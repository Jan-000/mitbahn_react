const Group = require("../models/Group");
const Chat = require("../models/Chat");



const router = require("express").Router();

// get all the groups
router.get('/groups', (req, res, next) => {
  Group.find()

    .populate("guests")
    .then(groups => {
      res.status(200).json(groups)
    })
    .catch(err => next(err))
});

// create a group
router.post('/', (req, res, next) => {
  const { startStation, endStation, date, owner, ownerName } = req.body
  Group.create({ startStation, endStation, date, owner, ownerName})
    .then(group => {
      res.status(201).json(group)
    })
    .catch(err => next(err))
})



// get a specific group
router.get('/:id', (req, res, next) => {
  Group.findById(req.params.id)
    .populate("guests")
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
const user = req.body.user
const id = req.params.id;
  Group.findByIdAndUpdate(id, { $push: { guests: user._id }, $inc: {numOfGuests: +1}},
      { new: true })
      .then(group => {
        res.status(200).json(group)
});
});

router.put("/leavegroup/:id", (req, res, next) => {
  
const user = req.body.user
const id = req.params.id;

  Group.findByIdAndUpdate(id, { $pull: { guests: user._id }, $inc: {numOfGuests: -1}},
      { new: true })
      .then(group => {
        res.status(200).json(group)
});
});

router.post('/initialiseMessage', (req, res, next) => {
 
  const message="Welcome to the message board of this group!"
  const author="System"
  const messages={message, author}
  const groupID=req.body.id
  Chat.create({messages, groupID})
    .then(message=>{
      console.log('created chat test')
    })
    .catch(err => next(err))
  //update chat flag in group 
  const chat=true
  Group.findByIdAndUpdate(req.body.id, { chat }, { new: true })
    .then(updatedGroup =>{
      console.log('updated chat flag in group')
      res.status(200).json()
    })
    .catch(err => next(err))
    

})


router.post('/addMessage', (req, res, next) => {
  console.log('addmessage starting')
  
  const filter= {groupID: req.body.id}
  const objPush= {message: req.body.message, author: req.body.author}
  const update = { $push: { messages: objPush }}
  
  Chat.findOneAndUpdate(filter, update, {new:true})
    .then(updatedMessage => { 
      res.status(200).json(updatedMessage)
    })
    .catch(err => next(err))
})

router.get('/getMessages/:id', (req, res, next) => {
  Chat.findOne({'groupID': req.params.id})
    .then(messages => {
      res.status(200).json(messages)
    })
});


module.exports = router;
