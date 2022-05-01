const { body, validationResult } = require('express-validator/check');

exports.create = async (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      const errors = result.array({ onlyFirstError: true });
      return res.status(422).json({ errors });
    }
  
    try {
      const post = await req.post.addComment(req.user.id, req.body.comment);
      res.status(201).json(post);
    } catch (err) {
      next(err);
    }
  };

exports.load = async (req, res, next, id) => {
  try {
    req.comment = await req.post.comments.id(id);
    if (!req.comment) return next(new Error('comment not found'));
  } catch (err) {
    return next(err);
  }
  next();
};


exports.validate = [
  body('comment')
    .exists()
    .withMessage('is necessary')

    .isLength({ min: 1 })
    .withMessage('should not be empty')

    .isLength({ max: 2000 })
    .withMessage('must be at can be maximum of 2000 characters length')
];

exports.destroy = async (req, res, next) => {
  try {
    const post = await req.post.removeComment(req.params.comment);
    res.json(post);
  } catch (err) {
    next(err);
  }
};