const { addAvatar, getAllAvatar, addToGallary, getAllUsers } = require("../controller/userController")

const router = require("express").Router()

router.get("/", getAllAvatar)
router.get("/fetch", getAllUsers) // mutiple
// router.delete("/destroy", distroyAllUsers)  //mutiple
router.post("/add", addAvatar)
router.post("/add-to-gallery", addToGallary)  //mutiple

module.exports = router

// 6th