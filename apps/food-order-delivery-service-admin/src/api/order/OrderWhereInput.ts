import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderHistoryListRelationFilter } from "../orderHistory/OrderHistoryListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type OrderWhereInput = {
  contactNumber?: StringNullableFilter;
  customerName?: StringNullableFilter;
  deadline?: DateTimeNullableFilter;
  deliveryAddress?: StringNullableFilter;
  deliveryPerson?: StringNullableFilter;
  estimatedDeliveryTime?: DateTimeNullableFilter;
  id?: StringFilter;
  orderHistories?: OrderHistoryListRelationFilter;
  orderItems?: JsonFilter;
  orderNumber?: StringNullableFilter;
  specialInstructions?: StringNullableFilter;
  status?: "Option1";
};
