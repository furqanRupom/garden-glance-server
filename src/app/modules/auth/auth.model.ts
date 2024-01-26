import { Schema, model } from 'mongoose';
import { IUser } from './auth.interface';
import bcrypt from 'bcryptjs';
import config from '../../config';

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      select: false,
      required: true,
    },
    role: {
      type: String,
      default: 'user',
    },
  },
  {
    toJSON: {
      transform: function (doc, user) {
        delete user.password;
      },
    },
    timestamps: true,
  },
);

/* use pre hook for hashing password before saving document  */
userSchema.pre('save', async function (this, next) {
  this.password = await bcrypt.hash(this.password, Number(config.salt_number));
  next();
});

export const UserModel = model<IUser>('User', userSchema);
