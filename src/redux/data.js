import { createAction,createReducer,createSlice } from "@reduxjs/toolkit"

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const pokemonApi = createApi({
//   reducerPath: 'pokemonApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
//   endpoints: (builder) => ({
//     getPokemon: builder.query({
//       query: (set) => `pokemon/?offset=${set || `20`}&limit=20`,
//     }),
//   }),
// })

// export const { useGetPokemonQuery } = pokemonApi


export const MOODS = {
    SAD: "sad",
    SHOCKED: "shocked",
    HAPPY: "happy",
    BLISSFUL: "blissful",
    LOVESTRUCK: "Lovestruck",
    EXCITED: "excited",
    KO: "ko"
}

const INITIAL_STATE = { valuex: MOODS.HAPPY };

export const updateCatMood = createAction("UPDATE_MOOD")

export const moodSlice = createSlice({
    name: "mood",
    initialState: INITIAL_STATE,
    reducers: {
        updateCatMood: (state, action)=>{
            state.valuex = action.payload
        }
    }
})