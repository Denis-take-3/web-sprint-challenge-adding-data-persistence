const projectRouter = require('express').Router();

const Projects = require('./project-model');

module.exports = projectRouter;

projectRouter.get('/', (req, res) => {
  Projects.get()
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => res.status(500).json(err));
});

projectRouter.post('/', (req, res) => {
  Projects.add(req.body)
    .then((count) => res.status(200).json({ added: count }))
    .catch((err) => res.status(500).json(err));
});
