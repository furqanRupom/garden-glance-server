/* add flower to the inventory */

import { IFLowers } from "./flowers.interface";
import FlowerModel from "./flowers.model";

const addFlowerIntoDB = async (payload:IFLowers) => {
  const result = await FlowerModel.create(payload);
  return result;
}



/* read and view all flowers from inventory */





/* update a flower from the inventory */


/* delete a flower from the inventory */


export const flowerServices = {
 addFlowerIntoDB
}