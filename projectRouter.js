const projectRouter = require('express').Router();

const Projects = require('./project-model');

projectRouter.get('/', (req, res) => {
  let arr = [];
  Projects.find()
    .then((projects) => {
      console.log(projects);
      projects.map(async (project) => {
        if (project.completed === 0) {
          arr.push({ ...project, completed: false });
        } else {
          arr.push({ ...project, completed: true });
        }
      });
      res.json(arr);
    })
    .catch((err) => res.status(500).json(err));
});

projectRouter.post('/', (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ error: 'please enter the name ' });
  }
  Projects.add(req.body)
    .then((count) => res.status(200).json({ added: count }))
    .catch((err) => res.status(500).json(err));
});

module.exports = projectRouter;
