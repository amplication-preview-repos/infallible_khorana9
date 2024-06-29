import { Order } from "../order/Order";

export type OrderHistory = {
  createdAt: Date;
  deliveryExperienceRating: number | null;
  id: string;
  order?: Order | null;
  updatedAt: Date;
};
