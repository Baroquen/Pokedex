import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface IPokemon {
  count: number,
  next: string | undefined,
  previous: string | undefined,
  results: [{name: string, url: string}]
}

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<IPokemon, string>({
      query: (name: string) => `pokemon/${name}`,
    }),
    getPokemon: builder.query<IPokemon, void>({
      query: () => `pokemon/`,
    }),
  }),
})

export const { useGetPokemonQuery, useGetPokemonByNameQuery } = pokemonApi;