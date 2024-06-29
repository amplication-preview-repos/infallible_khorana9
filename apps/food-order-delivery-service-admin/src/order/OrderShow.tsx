import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ORDER_TITLE_FIELD } from "./OrderTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="contactNumber" source="contactNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="customerName" source="customerName" />
        <TextField label="deadline" source="deadline" />
        <TextField label="deliveryAddress" source="deliveryAddress" />
        <TextField label="deliveryPerson" source="deliveryPerson" />
        <TextField
          label="estimatedDeliveryTime"
          source="estimatedDeliveryTime"
        />
        <TextField label="ID" source="id" />
        <TextField label="orderItems" source="orderItems" />
        <TextField label="orderNumber" source="orderNumber" />
        <TextField label="specialInstructions" source="specialInstructions" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="OrderHistory"
          target="orderId"
          label="OrderHistories"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField
              label="deliveryExperienceRating"
              source="deliveryExperienceRating"
            />
            <TextField label="ID" source="id" />
            <ReferenceField label="order" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
