import MovieCard from "../component/MoviCard"
import { useState } from "react"


function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Terminator", release_date: "1999"},
        {id: 3, title: "The Matrix", release_date: "1998"},
    ]

    const handlesearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
       
    }

    return <div className="home">
        <form onSubmit={handlesearch} className="search-form">
            <input type="text"
                placeholder="Search for Movies...."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search </button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) =>
                movie.title.toLowerCase().startsWith(searchQuery) &&
                <MovieCard movie={movie} key={movie.id} />)}
        </div>
    </div>
}

export default Home