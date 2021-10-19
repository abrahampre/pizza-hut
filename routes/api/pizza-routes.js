const router =  require('express').Router();
const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
  } = require('../../controllers/pizza-controller');

//set upGett all and Posts at /api/pizzas
router
    .route('/')
    .get(getAllPizza)
    .post(createPizza);

//set up get one put and delete at /api/pizzas/:_id
router
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);

module.exports= router;