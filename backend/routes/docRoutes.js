const { addDocController, getAlldocsController, deleteAlldocs, } = require("../controller/docController")

const router = require("express").Router()

router
    .get("/", getAlldocsController)
    .post("/add", addDocController)
    .delete("/delete", deleteAlldocs)

module.exports = router