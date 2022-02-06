var GroceryModel = require('../models/Grocery');

// Add Grocery
//groceryRoute.route('/create-grocery').post(); 
exports.createGrocery = (req, res, next) => {
  console.log('request body:')
  console.log(req.body)
  GroceryModel.create(req.body, (error, data) => {
    console.log('request body:')
    console.log(req.body)
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log('Grocery successfully added!')
    }
  })
};

// Get all groceries '/'
//groceryRoute.route('/').get(
exports.getAllGroceries =  (req, res) => {
  GroceryModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
};

// Get single grocery
//groceryRoute.route('/get-song/:id').get(
exports.getSingleGrocery = (req, res) => {
  GroceryModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
};


// Update grocery
//groceryRoute.route('/update-grocery/:id').put(
exports.updateGrocery = (req, res, next) => {
  GroceryModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Grocery successfully updated!')
    }
  })
};

// Delete grocery
//groceryRoute.route('/delete-grocery/:id').delete(
exports.deleteGrocery = (req, res, next) => {
  GroceryModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
};