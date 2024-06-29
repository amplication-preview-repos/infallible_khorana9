import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VehicleWhereInput = {
  id?: StringFilter;
  licensePlate?: StringNullableFilter;
  makeModel?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
