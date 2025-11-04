const express = require('express');
const app = express();
const port = 3000;

// Sample tasks array with 5 tasks
const tasks = [
  { id: 1, title: 'Learn Node.js', completed: false, priority: 'high', createdAt: new Date('2025-11-01T10:00:00Z') },
  { id: 2, title: 'Build REST API', completed: false, priority: 'medium', createdAt: new Date('2025-11-02T11:30:00Z') },
  { id: 3, title: 'Test API with Postman', completed: true, priority: 'low', createdAt: new Date('2025-11-03T09:15:00Z') },
  { id: 4, title: 'Document API responses', completed: false, priority: 'medium', createdAt: new Date('2025-11-04T08:45:00Z') },
  { id: 5, title: 'Deploy to production', completed: false, priority: 'high', createdAt: new Date('2025-11-04T12:00:00Z') }
];

// Root route
app.get('/', (req, res) => {
  res.send('Task Management API is running!');
});

// Tasks route
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
