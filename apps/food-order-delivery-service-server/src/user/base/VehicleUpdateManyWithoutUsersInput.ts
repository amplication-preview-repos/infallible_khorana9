/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { VehicleWhereUniqueInput } from "../../vehicle/base/VehicleWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class VehicleUpdateManyWithoutUsersInput {
  @Field(() => [VehicleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [VehicleWhereUniqueInput],
  })
  connect?: Array<VehicleWhereUniqueInput>;

  @Field(() => [VehicleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [VehicleWhereUniqueInput],
  })
  disconnect?: Array<VehicleWhereUniqueInput>;

  @Field(() => [VehicleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [VehicleWhereUniqueInput],
  })
  set?: Array<VehicleWhereUniqueInput>;
}

export { VehicleUpdateManyWithoutUsersInput as VehicleUpdateManyWithoutUsersInput };
