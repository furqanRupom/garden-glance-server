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

  const result = await flowerServices.getAllFlowersIntoDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All Flowers Fetched Successfully',
    data: result,
  });
});

/* update a flower controller  */

/* delete a flower controller */


export const flowersController = {
  addFlower,
  getAllFlowers
}