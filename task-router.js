const taskRouter = require('express').Router();
const Tasks = require('./task-model');

taskRouter.get('/', (req, res) => {
  Tasks.find()
    .then((tasks) => res.status(200).json(tasks))
    .catch((err) => {
      console.log(err);
      res.status(200).json(err);
    });
});

taskRouter.post('/', (req, res) => {
  if (!req.body.description || !req.body.project_id) {
    res.status(400).json({ err: 'plese provide a description and a project_id' });
  }

  Tasks.add(req.body)
    .then((count) => res.status(201).json({ added: count }))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = taskRouter;
