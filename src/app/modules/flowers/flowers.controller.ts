/* add a flower controller */

import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { flowerServices } from './flowers.service';

const addFlower = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await flowerServices.addFlowerIntoDB(payload);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Add flower to the inventory successfully',
    data: result,
  });
});

/* view all the flowers controller */

const getAllFlowers = catchAsync(async (req, res) => {
  const result = await flowerServices.getAllFlowersFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All Flowers Fetched Successfully',
    data: result,
  });
});

/* get specific flower controller */

const getSingleFlower = catchAsync(async (req, res) => {
  const id = req.params.id;

  const result = await flowerServices.getSingleFlowersFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Single Flower Fetched Successfully',
    data: result,
  });
});

/* update a flower controller  */

const updateFlower = catchAsync(async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await flowerServices.updateFlowerIntoDB(id, payload);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Update Flower Successfully',
    data: result,
  });
});

/* delete a flower controller */

const deleteFlower = catchAsync(async (req, res) => {
  const id = req.params.id;

  const result = await flowerServices.deleteFlowerFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Delete Flower Successfully',
    data: result,
  });
});

/* delete a flower controller */

const BulkDeleteFlower = catchAsync(async (req, res) => {
  const payload = req?.body;
  console.log(req.body);
  const result = await flowerServices.bulkDeleteFlowersFromDB(payload);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Bulk delete Flowers Successfully',
    data: result,
  });
});


/* add a sell post */

const addSoldProduct = catchAsync(async (req, res) => {
  const payload = req?.body;
  console.log(req.body);
  const result = await flowerServices.addSoldProductIntoDB(payload);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'this product sold successfully !',
    data: result,
  });
});

export const flowersController = {
  addFlower,
  getAllFlowers,
  getSingleFlower,
  updateFlower,
  deleteFlower,
  BulkDeleteFlower,
  addSoldProduct
};
