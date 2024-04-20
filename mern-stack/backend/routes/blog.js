const express = require("express");
const router = express.Router();
const {create, getAllBlogs, detailBlog, removeBlog, update} =  require("../controllers/blogController");
const {requireLogin} = require("../controllers/authController");

router.get("/blogs", getAllBlogs);
router.get("/blog/:slug", detailBlog);

router.put("/blog/:slug", requireLogin, update);
router.post("/create", requireLogin, create);
router.delete("/blog/:slug", requireLogin, removeBlog);

module.exports = router;