const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoute');
require('dotenv').config();
const path = require('path');
const cors = require('cors');

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/dashboard', dashboardRoutes);

app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
