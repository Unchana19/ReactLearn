//create data
const slugify = require("slugify");
const Blogs = require("../models/blogs");
const {v4: uuidv4} = require("uuid");

exports.create = async (req, res) => {
  const {title, content, author} = req.body;
  let slug = slugify(title);

  //validate data
  if (!slug) {
    slug = uuidv4();
  }

  switch(true) {
    case !title:
      return res.status(400).json({error: "invalid title"});
    case !content:
      return res.status(400).json({error: "invalid content"});
  }
  try {
    const blog = await Blogs.create({title, content, author, slug});
    res.json(blog);
  } catch (err) {
    res.status(400).json({error: err.message});
  }
}

//read data
exports.getAllBlogs = (req, res) => {
  Blogs.find({}).exec()
    .then(blogs => {
      res.json(blogs);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
};

//read detail blog
exports.detailBlog = (req, res) => {
  const {slug} = req.params;
  Blogs.findOne({slug}).exec()
  .then(blog => {
    res.json(blog);
  })
  .catch(err => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  });
}

//remove blog
exports.removeBlog = (req, res) => {
  const {slug} = req.params;
  Blogs.findOneAndDelete({slug})
  .then(blog => {
    res.json({message: "Delete Successfully"});
  })
  .catch(err => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  });
}