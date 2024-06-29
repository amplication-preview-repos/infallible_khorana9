import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderHistoryUpdateInput = {
  deliveryExperienceRating?: number | null;
  order?: OrderWhereUniqueInput | null;
};
