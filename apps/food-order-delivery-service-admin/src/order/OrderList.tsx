import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const OrderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Orders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
