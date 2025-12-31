import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import mongoose from 'mongoose';
import User from '../models/User.js';

export default function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL || 'http://localhost:5001/api/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log('Google Profile:', profile); // Log profile for debugging

        const email = profile.emails?.[0]?.value?.toLowerCase();
        
        if (!email) {
            console.error('Google Auth Error: No email found in profile');
            return done(new Error('No email found in Google profile'), null);
        }

        const newUser = {
          googleId: profile.id,
          name: profile.displayName,
          email: email,
          avatar: profile.photos?.[0]?.value,
        };

        try {
          let user = await User.findOne({ email: email });

          if (user) {
            // If user exists, update googleId if not present
            if (!user.googleId) {
                user = await User.findOneAndUpdate(
                    { email: email },
                    { 
                        $set: { 
                            googleId: profile.id,
                            ...(newUser.avatar && { avatar: newUser.avatar })
                        } 
                    },
                    { new: true }
                );
            }
            done(null, user);
          } else {
            user = await User.create(newUser);
            done(null, user);
          }
        } catch (err) {
          console.error('Google Auth Error inside strategy:', err);
          done(err, null);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
  });
};
