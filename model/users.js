import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, 
        unique: true 
    },
    password: {
        type: String,
        required: true,
    }
});
const UsersModel = mongoose.model('users', userSchema);

export default UsersModel;
