/* add flower to the inventory */

import { IFLowers } from './flowers.interface';
import FlowerModel, { SalesModel } from './flowers.model';

const addFlowerIntoDB = async (payload: IFLowers) => {
  const result = await FlowerModel.create(payload);
  return result;
};

/* read and view all flowers from inventory */

const getAllFlowersFromDB = async () => {
  const result = await FlowerModel.find();
  return result;
};

/* read single flowers from inventory */

const getSingleFlowersFromDB = async (id: string) => {
  console.log(id);
  const result = await FlowerModel.findById(id);
  return result;
};

/* update a flower from the inventory */

const updateFlowerIntoDB = async (id: string, payload: Partial<IFLowers>) => {
  const result = await FlowerModel.findByIdAndUpdate(id, payload, {
    runValidators: true,
    new: true,
  });
  return result;
};

/* delete a flower from the inventory */

const deleteFlowerFromDB = async (id: string) => {
  const result = await FlowerModel.findByIdAndDelete(id);
  return result;
};

const bulkDeleteFlowersFromDB = async (payload: Partial<[]>) => {
  console.log(payload);
  const result = await FlowerModel.deleteMany({ _id: { $in: payload } });
  return result;
};

/*

id,
buyerName,
sellDate,
quantity

*/

const addSoldProductIntoDB = async (payload: Partial<any>) => {
  console.log(payload);

  /* search the sold flower */

  const flower =  await FlowerModel.findById(payload.id)
    const quantity = flower!.quantity - payload.quantity;
    await FlowerModel.findByIdAndUpdate(payload.id,{
      quantity:quantity
    })
 
   const result = await SalesModel.create(payload);
   return result;
};

export const flowerServices = {
  addFlowerIntoDB,
  getAllFlowersFromDB,
  getSingleFlowersFromDB,
  updateFlowerIntoDB,
  deleteFlowerFromDB,
  bulkDeleteFlowersFromDB,
  addSoldProductIntoDB,
};
