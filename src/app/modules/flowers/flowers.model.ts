import mongoose, { Schema, model} from 'mongoose';
import { IFLowers } from './flowers.interface';



// Define the Mongoose Document interface based on FlowerType


// Create a Mongoose schema using the Zod validation schema
const FlowerMongooseSchema = new Schema<IFLowers>({
  name: {
    type: String,
    required: true,
  },
  user:{
   type:mongoose.Types.ObjectId,
   ref:"User",
   required:true
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  bloomDate: {
    type: String, // You may want to use Date type if storing dates as strings
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    enum:{
      values:['Small','Medium','Large']
    },
    required: true,
  },
  fragrance: {
    type: String,
    required: true,
  },
},{timestamps:true});

// Create the Mongoose model using the schema
const FlowerModel = model<IFLowers>('Flower', FlowerMongooseSchema);

export default FlowerModel;
