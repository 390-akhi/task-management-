// src/server.js
const express = require('express');
const app = express();
const port = 3000;

// Import tasks routes
const taskRoutes = require('./routes/tasks');

// Root route
app.get('/', (req, res) => {
  res.send('Task Management API is running!');
});

// Health check route
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime()
  });
});

// Mount task routes (under /tasks)
app.use('/tasks', taskRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
