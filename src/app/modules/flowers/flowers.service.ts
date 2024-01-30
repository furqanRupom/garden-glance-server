/* add flower to the inventory */

import { ICategory, IFLowers } from './flowers.interface';
import FlowerModel, { SalesModel } from './flowers.model';

const addFlowerIntoDB = async (payload: IFLowers) => {
  const result = await FlowerModel.create(payload);
  return result;
};

/* read and view all flowers from inventory */

const getAllFlowersFromDB = async (queryOptions: Partial<any>) => {
  const baseQuery: any = {};


    if (queryOptions?.price === 'one') {
      baseQuery.price = {
        $gte: 0,
        $lte: 100,
      };
    } else if (queryOptions?.price === 'two') {
      baseQuery.price = {
        $gte: 101,
        $lte: 500,
      };
    } else if (queryOptions?.price === 'three') {
      baseQuery.price = {
        $gte: 501,
        $lte: 1000,
      };
    }

  if (queryOptions?.size === 'Small') {
    baseQuery.size = 'Small';
  }else if (queryOptions?.size === 'Medium'){
    baseQuery.size = 'Medium'
  }else if (queryOptions?.size === 'Large') {
    baseQuery.size = 'Large';
  }


    if (queryOptions?.type?.length > 0) {
      baseQuery.type = queryOptions?.type;
    }

  if (queryOptions?.fragrance?.length > 0) {
    baseQuery.fragrance = queryOptions?.fragrance;
  }

  if (queryOptions?.color?.length > 0) {
    baseQuery.color = queryOptions?.color;
  }
  baseQuery.quantity = {$gt:0}
  const queryResult = FlowerModel.find(baseQuery);
  const result = await queryResult;
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
  console.log(result);
  return result;
};

/* delete a flower from the inventory */

const deleteFlowerFromDB = async (id: string) => {
  const result = await FlowerModel.deleteOne({_id:id});
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

  const flower = await FlowerModel.findById(payload.id);
  const quantity = flower!.quantity - payload.quantity;
  await FlowerModel.findByIdAndUpdate(payload.id, {
    quantity: quantity,
  });

  const result = await SalesModel.create(payload);
  return result;
};

/* categories by history and get sold history */

const getCategoriesSoldProductFromHistory = async (category: ICategory) => {
  try {
    let startDate: Date;

    switch (category) {
      case 'daily':
        startDate = new Date();
        startDate.setUTCHours(0, 0, 0, 0);
        break;
      case 'weekly':
        startDate = new Date();
        startDate.setUTCHours(0, 0, 0, 0);
        startDate.setDate(startDate.getUTCDate() - startDate.getUTCDay());
        break;
      case 'monthly':
        startDate = new Date();
        startDate.setUTCHours(0, 0, 0, 0);
        startDate.setUTCDate(1);
        break;
      case 'yearly':
        startDate = new Date();
        startDate.setUTCHours(0, 0, 0, 0);
        startDate.setUTCMonth(0, 1);
        break;
      default:
        return await SalesModel.find();
    }

    const endDate = new Date();
    endDate.setUTCHours(23, 59, 59, 999);

    const salesHistory = await SalesModel.find({
      saleDate: {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      },
    });

    return salesHistory;
  } catch (error) {
    console.error(error);
    throw new Error('Error retrieving sales history');
  }
};

export const flowerServices = {
  addFlowerIntoDB,
  getAllFlowersFromDB,
  getSingleFlowersFromDB,
  updateFlowerIntoDB,
  deleteFlowerFromDB,
  bulkDeleteFlowersFromDB,
  addSoldProductIntoDB,
  getCategoriesSoldProductFromHistory,
};
