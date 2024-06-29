import { OrderHistoryCreateNestedManyWithoutOrdersInput } from "./OrderHistoryCreateNestedManyWithoutOrdersInput";
import { InputJsonValue } from "../../types";

export type OrderCreateInput = {
  contactNumber?: string | null;
  customerName?: string | null;
  deadline?: Date | null;
  deliveryAddress?: string | null;
  deliveryPerson?: string | null;
  estimatedDeliveryTime?: Date | null;
  orderHistories?: OrderHistoryCreateNestedManyWithoutOrdersInput;
  orderItems?: InputJsonValue;
  orderNumber?: string | null;
  specialInstructions?: string | null;
  status?: "Option1" | null;
};
