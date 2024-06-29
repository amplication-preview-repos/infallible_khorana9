import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { VehicleUpdateManyWithoutUsersInput } from "./VehicleUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  notifications?: NotificationUpdateManyWithoutUsersInput;
  password?: string;
  phoneNumber?: string | null;
  profilePicture?: InputJsonValue;
  roles?: InputJsonValue;
  username?: string;
  vehicles?: VehicleUpdateManyWithoutUsersInput;
};
