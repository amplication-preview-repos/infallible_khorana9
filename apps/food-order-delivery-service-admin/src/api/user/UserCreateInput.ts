import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { VehicleCreateNestedManyWithoutUsersInput } from "./VehicleCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  notifications?: NotificationCreateNestedManyWithoutUsersInput;
  password: string;
  phoneNumber?: string | null;
  profilePicture?: InputJsonValue;
  roles: InputJsonValue;
  username: string;
  vehicles?: VehicleCreateNestedManyWithoutUsersInput;
};
