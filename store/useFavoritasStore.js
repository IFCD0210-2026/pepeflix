import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavoritas = create(persist(
    set => ({
        favoritas: [],
        añadirFavoritas: (peliId) => set(state => ({
            favoritas: [...state.favoritas, peliId]
        })),
        eliminarFavoritas: (peliId) => set(state => ({
            favoritas: state.favoritas.filter(f => f !== peliId)
        }))
    }
    ),
    {
        name: "peliculas-favoritas"
    }
))