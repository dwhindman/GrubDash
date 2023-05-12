const router = require("express").Router();
const controller = require("./dishes.controller");
const ordersRouter = require("../orders/orders.router");
const methodNotAllowed = require("../errors/methodNotAllowed");
// TODO: Implement the /dishes routes needed to make the tests pass

router.use("/:dishId/orders", ordersRouter);
router
    .route("/")
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed);

router
    .route("/:dishId")
    .get(controller.read)
    .put(controller.update)
    .all(methodNotAllowed);

module.exports = router;
