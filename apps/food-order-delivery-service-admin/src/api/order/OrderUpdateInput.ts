import { OrderHistoryUpdateManyWithoutOrdersInput } from "./OrderHistoryUpdateManyWithoutOrdersInput";
import { InputJsonValue } from "../../types";

export type OrderUpdateInput = {
  contactNumber?: string | null;
  customerName?: string | null;
  deadline?: Date | null;
  deliveryAddress?: string | null;
  deliveryPerson?: string | null;
  estimatedDeliveryTime?: Date | null;
  orderHistories?: OrderHistoryUpdateManyWithoutOrdersInput;
  orderItems?: InputJsonValue;
  orderNumber?: string | null;
  specialInstructions?: string | null;
  status?: "Option1" | null;
};
