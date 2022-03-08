const Group = require("../models/Group");


const router = require("express").Router();

// get all the groups
router.get('/groups', (req, res, next) => {
  Group.find()
    .then(groups => {
      console.log("this us groups", groups)
      res.status(200).json(groups)
    })
    .catch(err => next(err))
});

// create a group
router.post('/', (req, res, next) => {
  const { startStation, endStation, date, owner } = req.body
  Group.create({ startStation, endStation, date, owner })

    .then(group => {
      res.status(201).json(group)
    })
    .catch(err => next(err))
})

// get a specific group
router.get('/:id', (req, res, next) => {
  Group.findById(req.params.id)
    .then(group => {
      // check for a valid mongoobject id
      // mongoose.Types.ObjectId.isValid(<id>) 
      if (!group) {
        res.status(404).json(group)
      } else {
        res.status(200).json(group)
      }
    })
});

// update a group
router.put('/:id', (req, res, next) => {
  const { startStation, endStation, date } = req.body
  Group.findByIdAndUpdate(req.params.id, {
    startStation,
    endStation,
    date
  }, { new: true })
    .then(updatedGroup => {
      res.status(200).json(updatedGroup)
    })
    .catch(err => next(err))
});

// delete a group
router.delete('/:id', (req, res, next) => {
  Group.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: 'project deleted' })
    })
    .catch(err => next(err))
});
  

// display user details
router.get('/user/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      // check for a valid mongoobject id
      // mongoose.Types.ObjectId.isValid(<id>) 
      if (!user) {
        res.status(404).json(user)
      } else {
        res.status(200).json(user)
      }
    })
});

//
router.put("/joingroup/:id", (req, res, next) => {
  console.log("joingroup route was initiated");
  console.log("here is req.params.id", req.params.id);
  console.log("here is req.params.id", req.params);
const user = req.session.user;
  const id = req.params.id;
  Group.findByIdAndUpdate(id, { $push: { guests: user._id }, $inc: {numOfGuests: +1}},
      { new: true })
      .then(group => {
     // console.log("this is group", group);
      console.log("dit is reqsession id", user, group);
    //group.numOfGuests++
    res.render('groups/userjoinstrip')       
});
});




module.exports = router;
