import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  contactNumber?: SortOrder;
  createdAt?: SortOrder;
  customerName?: SortOrder;
  deadline?: SortOrder;
  deliveryAddress?: SortOrder;
  deliveryPerson?: SortOrder;
  estimatedDeliveryTime?: SortOrder;
  id?: SortOrder;
  orderItems?: SortOrder;
  orderNumber?: SortOrder;
  specialInstructions?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
