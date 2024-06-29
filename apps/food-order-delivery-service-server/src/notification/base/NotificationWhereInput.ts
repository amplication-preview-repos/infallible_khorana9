/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnumNotificationStatus } from "./EnumNotificationStatus";
import { EnumNotificationTypeField } from "./EnumNotificationTypeField";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class NotificationWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  message?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumNotificationStatus,
  })
  @IsEnum(EnumNotificationStatus)
  @IsOptional()
  @Field(() => EnumNotificationStatus, {
    nullable: true,
  })
  status?: "Option1";

  @ApiProperty({
    required: false,
    enum: EnumNotificationTypeField,
  })
  @IsEnum(EnumNotificationTypeField)
  @IsOptional()
  @Field(() => EnumNotificationTypeField, {
    nullable: true,
  })
  typeField?: "Option1";

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;
}

export { NotificationWhereInput as NotificationWhereInput };
