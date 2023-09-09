const User = require('../models/users.model');
const Joi = require('joi');

// Define a Joi schema for validating the incoming data
const userSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  businessName: Joi.string().required(),
  picture: Joi.string(),
  businessType: Joi.string(),
  businessEmail: Joi.string().email().required(),
  country: Joi.string(),
  businessId: Joi.string().required(),
  address: Joi.string(),
  password: Joi.string().required(),
});

exports.registerUser = async (req, res) => {
  try {
    const { error, value } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const user = await User.create(value);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
