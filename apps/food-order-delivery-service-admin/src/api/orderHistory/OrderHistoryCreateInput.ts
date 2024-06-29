import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderHistoryCreateInput = {
  deliveryExperienceRating?: number | null;
  order?: OrderWhereUniqueInput | null;
};
