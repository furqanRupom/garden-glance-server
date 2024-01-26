import { ObjectId } from "mongoose";
export type ISize = 'Small' | 'Medium' | 'Large'
export interface IFLowers {
   name:string;
   user:ObjectId;
   price:number;
   quantity:number;
   bloomDate:string;
   color:string;
   size:ISize;
   fragrance:string;
}