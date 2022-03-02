const Project = require("../models/Project");

const router = require("express").Router();

// get all the projects
router.get('/', (req, res, next) => {
  Project.find()
    .then(projects => {
      res.status(200).json(projects)
    })
});

// create a project
router.post('/', (req, res, next) => {
  const { title, description } = req.body
  Project.create({ title, description })
    .then(project => {
      res.status(201).json(project)
    })
    .catch(err => next(err))
})

// get a specific project
router.get('/:id', (req, res, next) => {
  Project.findById(req.params.id)
    .then(project => {
      // check for a valid mongoobject id
      // mongoose.Types.ObjectId.isValid(<id>) 
      if (!project) {
        res.status(404).json(project)
      } else {
        res.status(200).json(project)
      }
    })
});

// update a project
router.put('/:id', (req, res, next) => {
  const { title, description } = req.body
  Project.findByIdAndUpdate(req.params.id, {
    title,
    description
  }, { new: true })
    .then(updatedProject => {
      res.status(200).json(updatedProject)
    })
    .catch(err => next(err))
});

// delete a project
router.delete('/:id', (req, res, next) => {
  Project.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: 'project deleted' })
    })
    .catch(err => next(err))
});


module.exports = router;
