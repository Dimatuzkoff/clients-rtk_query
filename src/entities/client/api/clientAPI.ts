// api
import { api } from '@/shared/api/api'
// types
import type { 
    GetClientsResponse,
    GetClientsRequest,
    GetClientResponse,
    GetClientRequest,
    PostClientsResponse,
    PostClientsRequest,
    DeleteClientsResponse,
    DeleteClientsRequest,
    PutClientsResponse,
    PutClientsRequest
} from '@/entities/client/model/types/clientsAPItypes'

const clientAPI = api.injectEndpoints({
    endpoints: (builder) => ({
        getClients: builder.query< GetClientsResponse, GetClientsRequest >({
            keepUnusedDataFor: 120,
            query: () => ({
                url: "/clients",
                method: "GET",
            }),
            providesTags: [{type: 'CLIENT', id: 'LIST'}],
        }),
        getClient: builder.query< GetClientResponse, GetClientRequest >({
            query: (id) => ({
                url: `/client/${id}`,
                method: "GET",
            }),
            providesTags: (result, error, arg) => [{type: 'CLIENT', id: arg}],
        }),
        createClient: builder.mutation< PostClientsResponse, PostClientsRequest >({
            query: (newClient) => ({
                url: "/client",
                method: "POST",
                body: newClient
            }),
            invalidatesTags: [{type: 'CLIENT', id: 'LIST'}],
        }),
        deleteClient: builder.mutation< DeleteClientsResponse, DeleteClientsRequest >({
            query: ( id ) => ({
                url: `/client/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'CLIENT', id: 'LIST' },
                { type: 'CLIENT', id },
            ],
        }),
        updateClient: builder.mutation< PutClientsResponse, PutClientsRequest >({
            query: ( updatedClient ) => ({
                url: "/client",
                method: "PUT",
                body: updatedClient
            }),
            invalidatesTags: (result, error, arg) => [
                {type: 'CLIENT', id: 'LIST'},
                {type: 'CLIENT', id: arg._id}
            ],
        })
    })
})

export const { useGetClientsQuery, useGetClientQuery, useCreateClientMutation, useDeleteClientMutation, useUpdateClientMutation } = clientAPI