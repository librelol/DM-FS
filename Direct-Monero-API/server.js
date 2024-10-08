const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
require('dotenv').config();
const verboseLogging = true; // Set to true to enable verbose logging

const connectDB = require('./config/database');
const { apiLimiter } = require('./middleware/rateLimiter');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const adminRoutes = require('./routes/admin'); // Import admin routes

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
connectDB();

app.set('trust proxy', 1); // Trust the first proxy

// Middleware
app.use(helmet());
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:80', 'https://crypto-market-frontend.vercel.app', 'https://www.directmonero.com', 'https://directmonero.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());
app.use(apiLimiter);

// Verbose logging middleware
if (verboseLogging) {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    next();
  });
}

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/admin', adminRoutes); // Use admin routes

// Route to check if the api is working
app.get('/api', (req, res) => {
  res.json({ message: 'API is running' });
});

app.get('/', (req, res) => {
  res.send('This is the API root. Please make sure you use /api to access the API.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`);
});