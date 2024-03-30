const express = require("express");
const router = express.Router();
const {create, getAllBlogs, detailBlog, removeBlog} =  require("../controllers/blogController");

router.post("/create", create);
router.get("/blogs", getAllBlogs);
router.get("/blog/:slug", detailBlog);
router.delete("/blog/:slug", removeBlog);

module.exports = router;