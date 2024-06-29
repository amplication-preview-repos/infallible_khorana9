import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
} from "react-admin";

import { OrderHistoryTitle } from "../orderHistory/OrderHistoryTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="contactNumber" source="contactNumber" />
        <TextInput label="customerName" source="customerName" />
        <DateTimeInput label="deadline" source="deadline" />
        <TextInput label="deliveryAddress" multiline source="deliveryAddress" />
        <TextInput label="deliveryPerson" source="deliveryPerson" />
        <DateTimeInput
          label="estimatedDeliveryTime"
          source="estimatedDeliveryTime"
        />
        <ReferenceArrayInput
          source="orderHistories"
          reference="OrderHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderHistoryTitle} />
        </ReferenceArrayInput>
        <div />
        <TextInput label="orderNumber" source="orderNumber" />
        <TextInput
          label="specialInstructions"
          multiline
          source="specialInstructions"
        />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
