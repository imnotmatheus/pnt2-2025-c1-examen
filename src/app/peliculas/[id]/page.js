"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

import Cabecera from '../Cabecera'
import PieDePagina from "../PieDePagina"

const detallePelicula = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState([])

    const urlPelicula = `https://mflixbackend.azurewebsites.net/api/movies/${id}`

    useEffect(() => {
        fetch(urlPelicula)
        .then(response => response.json())
        .then(data => setMovie(data))
        .catch(error => console.log(error))
    }, [])
    

    return (
        <div>
            <Cabecera/>
            <div className="flex flex-row justify-center">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    {movie.poster ? (
                        <img
                            src={movie.poster}
                            alt={movie.title}
                            className="w-full object-cover rounded-md"
                        />
                    ) : (
                        <div className="w-full h-[135px] bg-gray-300 rounded-md flex items-center justify-center">
                            <span className="text-xs text-gray-600 text-center">{movie.title}</span>
                        </div>
                    )}
                    <p className="text-base mt-1 truncate">{movie.title}</p>
                    <p className='text-sm mt-1'>{movie.fullplot}</p>
                </div>
            </div>
            <br></br>
            <PieDePagina/>
        </div>
    )
}

export default detallePelicula