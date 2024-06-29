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
import { OrderHistory } from "./OrderHistory";
import { OrderHistoryCountArgs } from "./OrderHistoryCountArgs";
import { OrderHistoryFindManyArgs } from "./OrderHistoryFindManyArgs";
import { OrderHistoryFindUniqueArgs } from "./OrderHistoryFindUniqueArgs";
import { CreateOrderHistoryArgs } from "./CreateOrderHistoryArgs";
import { UpdateOrderHistoryArgs } from "./UpdateOrderHistoryArgs";
import { DeleteOrderHistoryArgs } from "./DeleteOrderHistoryArgs";
import { Order } from "../../order/base/Order";
import { OrderHistoryService } from "../orderHistory.service";
@graphql.Resolver(() => OrderHistory)
export class OrderHistoryResolverBase {
  constructor(protected readonly service: OrderHistoryService) {}

  async _orderHistoriesMeta(
    @graphql.Args() args: OrderHistoryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [OrderHistory])
  async orderHistories(
    @graphql.Args() args: OrderHistoryFindManyArgs
  ): Promise<OrderHistory[]> {
    return this.service.orderHistories(args);
  }

  @graphql.Query(() => OrderHistory, { nullable: true })
  async orderHistory(
    @graphql.Args() args: OrderHistoryFindUniqueArgs
  ): Promise<OrderHistory | null> {
    const result = await this.service.orderHistory(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => OrderHistory)
  async createOrderHistory(
    @graphql.Args() args: CreateOrderHistoryArgs
  ): Promise<OrderHistory> {
    return await this.service.createOrderHistory({
      ...args,
      data: {
        ...args.data,

        order: args.data.order
          ? {
              connect: args.data.order,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => OrderHistory)
  async updateOrderHistory(
    @graphql.Args() args: UpdateOrderHistoryArgs
  ): Promise<OrderHistory | null> {
    try {
      return await this.service.updateOrderHistory({
        ...args,
        data: {
          ...args.data,

          order: args.data.order
            ? {
                connect: args.data.order,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => OrderHistory)
  async deleteOrderHistory(
    @graphql.Args() args: DeleteOrderHistoryArgs
  ): Promise<OrderHistory | null> {
    try {
      return await this.service.deleteOrderHistory(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Order, {
    nullable: true,
    name: "order",
  })
  async getOrder(
    @graphql.Parent() parent: OrderHistory
  ): Promise<Order | null> {
    const result = await this.service.getOrder(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
