import { useState } from "react"
import MovieCard from "../components/MovieCard"

function Home(){
    const [searchQuery, setSearchQuery]=useState("")
    const movies =[
        { id: 1, title: "Inception", releaseDate: "2010-07-16" },
        { id: 2, title: "Interstellar", releaseDate: "2014-11-07" },
        { id: 3, title: "The Dark Knight", releaseDate: "2008-07-18" },
        { id: 4, title: "Parasite", releaseDate: "2019-05-30" },
        { id: 5, title: "Dune", releaseDate: "2021-10-22" }
    ]


    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        // setSearchQuery("----")
    };


    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies" className="search-input" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) => (<MovieCard movie={movie} key={movie.id}/>))}
                {/* {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={movie} key={movie.id}/>))} */}
                {/* 虽然这样也可以但还是直接用API吧 */}
            </div>
        </div>
    )
}

export default Home