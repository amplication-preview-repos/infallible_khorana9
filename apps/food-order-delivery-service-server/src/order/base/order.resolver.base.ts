/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Order } from "./Order";
import { OrderCountArgs } from "./OrderCountArgs";
import { OrderFindManyArgs } from "./OrderFindManyArgs";
import { OrderFindUniqueArgs } from "./OrderFindUniqueArgs";
import { CreateOrderArgs } from "./CreateOrderArgs";
import { UpdateOrderArgs } from "./UpdateOrderArgs";
import { DeleteOrderArgs } from "./DeleteOrderArgs";
import { OrderHistoryFindManyArgs } from "../../orderHistory/base/OrderHistoryFindManyArgs";
import { OrderHistory } from "../../orderHistory/base/OrderHistory";
import { AssignOrderDto } from "../AssignOrderDto";
import { OrderService } from "../order.service";
@graphql.Resolver(() => Order)
export class OrderResolverBase {
  constructor(protected readonly service: OrderService) {}

  async _ordersMeta(
    @graphql.Args() args: OrderCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Order])
  async orders(@graphql.Args() args: OrderFindManyArgs): Promise<Order[]> {
    return this.service.orders(args);
  }

  @graphql.Query(() => Order, { nullable: true })
  async order(
    @graphql.Args() args: OrderFindUniqueArgs
  ): Promise<Order | null> {
    const result = await this.service.order(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Order)
  async createOrder(@graphql.Args() args: CreateOrderArgs): Promise<Order> {
    return await this.service.createOrder({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Order)
  async updateOrder(
    @graphql.Args() args: UpdateOrderArgs
  ): Promise<Order | null> {
    try {
      return await this.service.updateOrder({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Order)
  async deleteOrder(
    @graphql.Args() args: DeleteOrderArgs
  ): Promise<Order | null> {
    try {
      return await this.service.deleteOrder(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [OrderHistory], { name: "orderHistories" })
  async findOrderHistories(
    @graphql.Parent() parent: Order,
    @graphql.Args() args: OrderHistoryFindManyArgs
  ): Promise<OrderHistory[]> {
    const results = await this.service.findOrderHistories(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.Mutation(() => String)
  async AssignOrderToDeliveryPerson(
    @graphql.Args()
    args: AssignOrderDto
  ): Promise<string> {
    return this.service.AssignOrderToDeliveryPerson(args);
  }

  @graphql.Query(() => String)
  async AssignWooCommerceOrder(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.AssignWooCommerceOrder(args);
  }

  @graphql.Query(() => [String])
  async FetchWooCommerceOrders(
    @graphql.Args()
    args: string
  ): Promise<string[]> {
    return this.service.FetchWooCommerceOrders(args);
  }

  @graphql.Mutation(() => String)
  async UpdateOrderStatus(
    @graphql.Args()
    args: AssignOrderDto
  ): Promise<string> {
    return this.service.UpdateOrderStatus(args);
  }
}
