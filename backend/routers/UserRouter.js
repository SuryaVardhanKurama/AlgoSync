const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload.js");
const {  getUserDetails,updateUserDetails,uploadProfilePicture } = require("../controllers/UserController.js");
const { Auth } = require("../middleware/auth.js"); 

router.get("/:id", Auth, getUserDetails);
router.put("/:id", Auth, updateUserDetails);
router.post("/:id/upload-profile", Auth, upload.single('profile'), uploadProfilePicture);


module.exports = router;
