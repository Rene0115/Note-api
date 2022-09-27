import Joi from 'joi';

class NoteValidator {
  createNoteSchema= Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required()
  });

  updateNoteSchema = Joi.object({
    id: Joi.string().required(),
    content: Joi.string(),
    title: Joi.string()
  });

   deleteListSchema = Joi.object({
     id: Joi.string().required()
  });
}
export default new NoteValidator();
