//helper func, and global state not component, goal is to make favorite feature working
import { createContext, useEffect, useState } from "react"
import { useContext } from "react"


const MovieContext = createContext()

export const useMovieContext =() => useContext(MovieContext)
export const MovieProvider =({children})=>{

    const [favorites, setFavorites] = useState([])

    useEffect( ()=>{
        const storedFavs = localStorage.getItem("favorites")

        if(storedFavs) setFavorites(JSON.parse(storedFavs))
    },[])

    useEffect(() =>{
        localStorage.setItem('favorites', JSON.stringify(favorites))
    },[favorites])

    const addToFavorite = (movie)=>{
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId)=>{
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    // 判断某部电影是不是已经在收藏夹里
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value={
        favorites,
        addToFavorite,
        removeFromFavorites,
        isFavorite
    }


    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}