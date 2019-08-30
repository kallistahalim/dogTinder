//create an express router
const router = require("express").Router();

//import from models/dog to connect with schema
const db = require("../../models/dog");


//extract all information from MongoDB
// @route   GET api/routes
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  db.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});


//extract a certain ID information from MongoDB
// @route   GET api/routes
// @desc    Get All Items
// @access  Public
router.get('/:id', (req, res) => {
  db.findById(req.params.id)
    .sort({ date: -1 })
    .then(items => res.json(items));
});


//input information to MongoDB
//@route  POST api/routes
router.post('/', (req, res) => {
    const newItem = new db({
      name: req.body.name,
      gender : req.body.gender
    });
  
    newItem.save().then(item => res.json(item));
  });



//update (change) information that exists in MongoDB
router.put('/update/:id', function (req, res) {
  db.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, { new: true },function (err, response) {
    if (err) {
      console.log(err);
    }
    res.send(response);

  });
});

//Delete information by ID from MongoDB
// @route   DELETE api/routes/:id
// @desc    Delete A Item
// @access  Private
router.delete('/:id', (req, res) => {
  db.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;