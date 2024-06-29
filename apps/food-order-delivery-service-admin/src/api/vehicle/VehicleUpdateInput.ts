import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VehicleUpdateInput = {
  licensePlate?: string | null;
  makeModel?: string | null;
  user?: UserWhereUniqueInput | null;
};
