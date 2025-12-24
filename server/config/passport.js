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
        try {
            console.log('Google Profile:', profile ? profile.id : 'No Profile'); 

            const email = profile.emails?.[0]?.value?.toLowerCase();
            
            if (!email) {
                console.error('Google Auth Error: No email found in profile');
                return done(new Error('No email found in Google profile'), null);
            }

            const newUser = {
              googleId: profile.id,
              name: profile.displayName || email.split('@')[0], // Fallback name
              email: email,
              avatar: profile.photos?.[0]?.value,
            };

            // Use findOneAndUpdate with upsert option for atomic operation
            // This handles both create and update in one go, preventing race conditions
            const user = await User.findOneAndUpdate(
                { email: email },
                { 
                    $set: { 
                        googleId: profile.id,
                        name: newUser.name, // Ensure name is set
                        ...(newUser.avatar && { avatar: newUser.avatar })
                    },
                    $setOnInsert: {
                        email: email // Only set email on insert
                    }
                },
                { new: true, upsert: true, setDefaultsOnInsert: true }
            );

            done(null, user);
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
