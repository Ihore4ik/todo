const router = require("express").Router();
const controllers = require("./controllers");

router.get("/", controllers.getAll);
router.get("/:id", controllers.getOne);
router.post("/", controllers.create);
router.delete("/:id", controllers.deleteTodo);
router.put("/:id", controllers.update);

module.exports = router;
