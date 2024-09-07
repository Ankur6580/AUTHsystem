const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoute');
require('dotenv').config();
const path = require('path');
const cors = require('cors');

app.get('/', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

app.use(express.json());

app.use(cors({
  origin: '*',
  credentials: true
}));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/dashboard', dashboardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
