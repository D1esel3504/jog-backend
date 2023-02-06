import Joi from "joi";

export const userSchema = Joi.object().keys({
  firstName: Joi.string().min(3).max(30).required(),
  lastName: Joi.string().min(3).max(30).required(),
  address: Joi.string(),
  role: Joi.string(),
  email: Joi.string().email().required(),
  password: Joi.string(),
});

export const updateUserSchema = Joi.object().keys({
    firstName: Joi.string().min(3).max(30),
    lastName: Joi.string().min(3).max(30),
    address: Joi.string()
  });


