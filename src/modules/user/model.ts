import { Schema, model } from 'mongoose';
import { IUser } from 'src/types/user';

const userSchema = new Schema<IUser>(
  {
    firstName: String,
    lastName: String,
    email: { type: String, unique: true, required: true },
    address: String,
    password: { type: String, required: true },
    role: String,
  },
  { timestamps: true },
);

export default model<IUser>('User', userSchema);
