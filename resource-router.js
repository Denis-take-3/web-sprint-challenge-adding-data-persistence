const resourceRouter = require('express').Router();
const Resources = require('./resource-modal');
const { resource } = require('./server');

resourceRouter.get('/', (req, res) => {
  Resources.find()
    .then((resources) => res.status(200).json(resources))
    .catch((err) => res.status(500).json(err));
});

resourceRouter.post('/', (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ error: 'please enter the name ' });
  }
  Resources.add(req.body)
    .then((count) => res.status(201).json({ added: count }))
    .catch((err) => res.status(500).json(err));
});

module.exports = resourceRouter;
