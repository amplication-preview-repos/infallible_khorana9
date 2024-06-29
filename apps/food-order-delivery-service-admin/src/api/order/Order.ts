import { OrderHistory } from "../orderHistory/OrderHistory";
import { JsonValue } from "type-fest";

export type Order = {
  contactNumber: string | null;
  createdAt: Date;
  customerName: string | null;
  deadline: Date | null;
  deliveryAddress: string | null;
  deliveryPerson: string | null;
  estimatedDeliveryTime: Date | null;
  id: string;
  orderHistories?: Array<OrderHistory>;
  orderItems: JsonValue;
  orderNumber: string | null;
  specialInstructions: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
