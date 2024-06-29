import { SortOrder } from "../../util/SortOrder";

export type VehicleOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  licensePlate?: SortOrder;
  makeModel?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
