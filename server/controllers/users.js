const { login, createAuthToken } = require('../auth');
const { body, validationResult } = require('express-validator/check');
const User = require('../models/user');

exports.register = async (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      const errors = result.array({ onlyFirstError: true });
      return res.status(422).json({ errors });
    }
  
    try {
      const { username, password } = req.body;
      const user = await User.create({ username, password });
      const token = createAuthToken(user.toJSON());
      res.status(201).json({ token });
    } catch (err) {
      next(err);
    }
  };

exports.login = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }

  login(req, res, next);
};


exports.validate = method => {
  const errors = [
    body('username')
      .exists()
      .withMessage('is necessary')

      .isLength({ min: 1 })
      .withMessage('should not be empty')

      .isLength({ max: 32 })
      .withMessage('can be maximum of 32 characters length')

      .custom(value => value.trim() === value)
      .withMessage('cannot contain whitespaces in the start or end')

      .matches(/^[a-zA-Z0-9_-]+$/)
      .withMessage('contains characters that are not valid'),

    body('password')
      .exists()
      .withMessage('is necessary')

      .isLength({ min: 1 })
      .withMessage('should not be empty')

      .isLength({ min: 8 })
      .withMessage('must have minimum of 8 characters')

      .isLength({ max: 72 })
      .withMessage('can be maximum of 72 characters length')
  ];

  if (method === 'register') {
    errors.push(
      body('username').custom(async username => {
        const exists = await User.countDocuments({ username });
        if (exists) throw new Error('already exists');
      })
    );
  }

  return errors;
};