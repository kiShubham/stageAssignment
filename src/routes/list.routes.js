const router = require("express").Router();

// import controller ;
const listController = require("../controllers/list.controller");
//import middleware if needed ;

// 1.add to my list ;2.remove from list ;3.list all
router.post("/", listController.addNew);
router.delete("/:id", listController.removeOne);
router.get("/", listController.fetchAll);

module.exports = router;
