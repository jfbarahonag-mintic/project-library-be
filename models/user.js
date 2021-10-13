const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  f_name:   { type: String, required: [true, 'First name is a required param']},
  l_name:   { type: String, required: [true, 'Last name is a required param']},
  email:    { type: String, required: [true, 'Email is a required param']},
  pswd:     { type: String, required: [true, 'Password is a required param']},
  doc_type: { type: String, required: [true, 'The type of the document is a required param']},
  doc_num:  { type: String, required: [true, 'The number of the document is a required param']},
  phone:    { type: String, required: [true, 'Phone is a required param']},
})

//convert to Schema object
const User = mongoose.model('User', userSchema);

export default User;
