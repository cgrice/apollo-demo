// Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  todo: (where?: TodoWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  todo: (where: TodoWhereUniqueInput) => TodoNullablePromise;
  todoes: (args?: {
    where?: TodoWhereInput;
    orderBy?: TodoOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Todo>;
  todoesConnection: (args?: {
    where?: TodoWhereInput;
    orderBy?: TodoOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => TodoConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createTodo: (data: TodoCreateInput) => TodoPromise;
  updateTodo: (args: {
    data: TodoUpdateInput;
    where: TodoWhereUniqueInput;
  }) => TodoPromise;
  updateManyTodoes: (args: {
    data: TodoUpdateManyMutationInput;
    where?: TodoWhereInput;
  }) => BatchPayloadPromise;
  upsertTodo: (args: {
    where: TodoWhereUniqueInput;
    create: TodoCreateInput;
    update: TodoUpdateInput;
  }) => TodoPromise;
  deleteTodo: (where: TodoWhereUniqueInput) => TodoPromise;
  deleteManyTodoes: (where?: TodoWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  todo: (
    where?: TodoSubscriptionWhereInput
  ) => TodoSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type TodoOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "text_ASC"
  | "text_DESC"
  | "done_ASC"
  | "done_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface TodoCreateInput {
  id?: Maybe<ID_Input>;
  text: String;
  done: Boolean;
}

export interface TodoWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  text?: Maybe<String>;
  text_not?: Maybe<String>;
  text_in?: Maybe<String[] | String>;
  text_not_in?: Maybe<String[] | String>;
  text_lt?: Maybe<String>;
  text_lte?: Maybe<String>;
  text_gt?: Maybe<String>;
  text_gte?: Maybe<String>;
  text_contains?: Maybe<String>;
  text_not_contains?: Maybe<String>;
  text_starts_with?: Maybe<String>;
  text_not_starts_with?: Maybe<String>;
  text_ends_with?: Maybe<String>;
  text_not_ends_with?: Maybe<String>;
  done?: Maybe<Boolean>;
  done_not?: Maybe<Boolean>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<TodoWhereInput[] | TodoWhereInput>;
  OR?: Maybe<TodoWhereInput[] | TodoWhereInput>;
  NOT?: Maybe<TodoWhereInput[] | TodoWhereInput>;
}

export interface TodoUpdateInput {
  text?: Maybe<String>;
  done?: Maybe<Boolean>;
}

export interface TodoUpdateManyMutationInput {
  text?: Maybe<String>;
  done?: Maybe<Boolean>;
}

export interface TodoSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<TodoWhereInput>;
  AND?: Maybe<TodoSubscriptionWhereInput[] | TodoSubscriptionWhereInput>;
  OR?: Maybe<TodoSubscriptionWhereInput[] | TodoSubscriptionWhereInput>;
  NOT?: Maybe<TodoSubscriptionWhereInput[] | TodoSubscriptionWhereInput>;
}

export type TodoWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface TodoEdge {
  node: Todo;
  cursor: String;
}

export interface TodoEdgePromise extends Promise<TodoEdge>, Fragmentable {
  node: <T = TodoPromise>() => T;
  cursor: () => Promise<String>;
}

export interface TodoEdgeSubscription
  extends Promise<AsyncIterator<TodoEdge>>,
    Fragmentable {
  node: <T = TodoSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface TodoPreviousValues {
  id: ID_Output;
  text: String;
  done: Boolean;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface TodoPreviousValuesPromise
  extends Promise<TodoPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  text: () => Promise<String>;
  done: () => Promise<Boolean>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface TodoPreviousValuesSubscription
  extends Promise<AsyncIterator<TodoPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  text: () => Promise<AsyncIterator<String>>;
  done: () => Promise<AsyncIterator<Boolean>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AggregateTodo {
  count: Int;
}

export interface AggregateTodoPromise
  extends Promise<AggregateTodo>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTodoSubscription
  extends Promise<AsyncIterator<AggregateTodo>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface TodoSubscriptionPayload {
  mutation: MutationType;
  node: Todo;
  updatedFields: String[];
  previousValues: TodoPreviousValues;
}

export interface TodoSubscriptionPayloadPromise
  extends Promise<TodoSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = TodoPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TodoPreviousValuesPromise>() => T;
}

export interface TodoSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TodoSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TodoSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TodoPreviousValuesSubscription>() => T;
}

export interface Todo {
  id: ID_Output;
  text: String;
  done: Boolean;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface TodoPromise extends Promise<Todo>, Fragmentable {
  id: () => Promise<ID_Output>;
  text: () => Promise<String>;
  done: () => Promise<Boolean>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface TodoSubscription
  extends Promise<AsyncIterator<Todo>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  text: () => Promise<AsyncIterator<String>>;
  done: () => Promise<AsyncIterator<Boolean>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface TodoNullablePromise
  extends Promise<Todo | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  text: () => Promise<String>;
  done: () => Promise<Boolean>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface TodoConnection {
  pageInfo: PageInfo;
  edges: TodoEdge[];
}

export interface TodoConnectionPromise
  extends Promise<TodoConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<TodoEdge>>() => T;
  aggregate: <T = AggregateTodoPromise>() => T;
}

export interface TodoConnectionSubscription
  extends Promise<AsyncIterator<TodoConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<TodoEdgeSubscription>>>() => T;
  aggregate: <T = AggregateTodoSubscription>() => T;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Todo",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
