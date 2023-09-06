import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide username'],
    unique: true
  },
  password: { type: String, required: [true, 'Please provide password'] },
  isAdmin: { type: Boolean, default: false }
})

const User = mongoose.models.users || mongoose.model('users', userSchema)
export default User
