import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VehicleCreateInput = {
  licensePlate?: string | null;
  makeModel?: string | null;
  user?: UserWhereUniqueInput | null;
};
