// src/routes/tasks.js
const express = require('express');
const router = express.Router();

// Sample tasks array
const tasks = [
  { id: 1, title: 'Learn Node.js', completed: false, priority: 'high', createdAt: new Date('2025-11-01T10:00:00Z') },
  { id: 2, title: 'Build REST API', completed: false, priority: 'medium', createdAt: new Date('2025-11-02T11:30:00Z') },
  { id: 3, title: 'Test API with Postman', completed: true, priority: 'low', createdAt: new Date('2025-11-03T09:15:00Z') },
  { id: 4, title: 'Document API responses', completed: false, priority: 'medium', createdAt: new Date('2025-11-04T08:45:00Z') },
  { id: 5, title: 'Deploy to production', completed: false, priority: 'high', createdAt: new Date('2025-11-04T12:00:00Z') }
];

// GET /tasks - return all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// GET /task/:id - return task by ID or 404 if not found
router.get('/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

module.exports = router;
