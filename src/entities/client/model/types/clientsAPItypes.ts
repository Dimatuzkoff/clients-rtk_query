import type { IClient } from "./client";

export type GetClientsResponse = IClient[];

export type GetClientsRequest = void;

export type GetClientResponse = IClient;

export type GetClientRequest = IClient["_id"];

export type DeleteClientsResponse = void;

export type DeleteClientsRequest = IClient["_id"];

export type PutClientsResponse = IClient;

export type PutClientsRequest = IClient;

export type PostClientsResponse = IClient;

export type PostClientsRequest = Omit<IClient, "_id">;
