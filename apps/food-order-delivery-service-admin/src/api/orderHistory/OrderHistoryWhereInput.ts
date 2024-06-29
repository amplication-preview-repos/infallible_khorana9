import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderHistoryWhereInput = {
  deliveryExperienceRating?: IntNullableFilter;
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
};
