import { User } from "../user/User";

export type Vehicle = {
  createdAt: Date;
  id: string;
  licensePlate: string | null;
  makeModel: string | null;
  updatedAt: Date;
  user?: User | null;
};
