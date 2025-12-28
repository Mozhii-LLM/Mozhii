import express from 'express';
import passport from 'passport';
import { registerUser, loginUser, getMe, generateToken } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

// Google Auth
router.get('/google', passport.authenticate('google', { 
  scope: ['profile', 'email'], 
  session: false,
  prompt: 'select_account' 
}));

router.get('/google/callback', (req, res, next) => {
  passport.authenticate('google', { session: false }, (err, user, info) => {
    const clientUrl = process.env.CLIENT_URL || 'http://localhost:3000';
    console.log('Google Callback - Client URL:', clientUrl);

    if (err) {
      console.error('Google Auth Error (Full):', JSON.stringify(err, Object.getOwnPropertyNames(err)));
      const errorMessage = err.message || err.toString() || 'Unknown error';
      return res.redirect(`${clientUrl}/login?error=server_error&details=${encodeURIComponent(errorMessage)}`);
    }
    
    if (!user) {
      console.error('Google Auth Failed: No user returned', info);
      return res.redirect(`${clientUrl}/login?error=authentication_failed`);
    }

    // Successful authentication, redirect home.
    const token = generateToken(user._id);
    res.redirect(`${clientUrl}/login?token=${token}`);
  })(req, res, next);
});

export default router;
