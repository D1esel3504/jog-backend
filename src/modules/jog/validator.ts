import Joi from "joi";

const jogSchema = Joi.object().keys({
  start: Joi.date(),
  end: Joi.date(),
  name: Joi.string().required(),
  userId: Joi.string(),
});

export default jogSchema;
