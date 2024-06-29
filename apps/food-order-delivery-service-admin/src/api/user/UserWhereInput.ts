import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { VehicleListRelationFilter } from "../vehicle/VehicleListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  name?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  phoneNumber?: StringNullableFilter;
  profilePicture?: JsonFilter;
  username?: StringFilter;
  vehicles?: VehicleListRelationFilter;
};
