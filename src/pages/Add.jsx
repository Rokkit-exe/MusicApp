import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import MainContainer from '../components/MainContainer'
import { navList } from '../path'
import { Song } from '../objects/Song';
import { addSong } from '../functions/HttpRequests';
import SongCard from '../components/SongCard';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';


function Add() {
    const defaultImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEXl4+acnpvo5umYmpfd3N6nqKaWmJXj4eSdn5zf3+DPzs+1trWam5m8vLzAwMDExMSxsrHNzM3X1teio6KqrKizsrOwsrCsrK3Nzs23t7i+v77V0tbS0tJkw6+9AAAFD0lEQVR4nO2da3eqOhCGZQKCGLyA1Y2b//87T5Duqq0kTkAn6Xmftbr6oaWLp5Pr5OJiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAISgW6RfZmaMUZ52+0213u1Ou11bbfZdmv8WT6OR7tus0EoprXVivlSPLrJ2ny5itzTvv183Rid5hFFt2jJmSaO3G7O7sTwaSelX9YLSqnDo/ZMsqjQ+R6pN+J7QGzCBrONypPqwfCZ8N4FcniJypPT4VPH8Hsf1KhJH2jLK552j3sagSHXj53dxzCIoqht/v4tj4GGk/LCcJGgUj3nAjlQn/Bbmh2IRbkml/bQS+kUZqCJNrIJXAq2MVE2tgleWmwAVqZ0rgj2qCk6RqjkFjWJoUaTNfEV0YBlWXZytFb1BhdSiUj2/oJluBNQvrl7gZyikva6cpo9kHqE/Agkir6dfPmDs+UBaG14lzPIHpGO/rWppux5qGIJJ9uhPjNfjLIAgmhn9dMNi7NdDGKGmvI6CaZjo1buFvkMfrzVUrXQQuX0911C8saEDsytkG+qjbBBr7oCbbZgs03dL3UI77miGb6jXkkFkNqRehokSDKLHtNfHUHIybH0zq+Hdcr7dMGnE/HzmvZ+G+Z/yQnqhtj8jNxfmtzNfhulSDav5FxzPCLY1HjP7f4as/40SMvRKzvgZlkKGrcfU3s9QanDKmhhOMXzcx7wefnfvbahFOn2/HKmfoUx/4bdQ4WkosoxBmYegp2FykDDM+UM2f0ORgZtXQ+NrmEg0Nd07DSVyGZ7LTb6GAo0pM0861VAgb+q56OtreBYwXL/VUKBDpJ2PoLehwBSR/BYNPQ0lJsH/A0OPFAYMAzP8/W3p7+8P/XYixjSmYYxL+0NOWdYUSumIxqVPzy20Om3rVX/wJ603TeNpKLFO+uRLqja9Ht2ixV8/Q5H54VNzfN38fVi82HP8UPM0Khs5ssU1PMnk2pxvqQ/5yMNx5NqeaExHaw87X/pOs+tbugzVfvQ/zzUUWuh2rFtoy2oDd91CZmXGVRFt4xDm2pPQzn0q7cXUtpzCNOzeZ3WP3bAZa0gXXEMd6Dr+wfIoy1BuHd9RTG29NMtQrpA69tPYFm5ZWxrl9tM4ZsGWekglI4aie6KshU2Pz3hYCQLRbcJ0tChaMg85Y5ODlt0lbN1fOlpM6Q+nkIruL13QwVLcxocijBBK5PPvsDaKI9kV1h4H4RC60qYPj2WzsnTye/UdfXfxM4nBTLSKn7dwrQWrzd0FAkTpiXUObHyK+T4c+RrVbPPPZJv5VlcJ7xBRAILuEZgqjtuyq7uuPJ+Yt57I7Gf7gXvPwnC7l2Jf6hJEGe2h4yuOAZvgh3KG1HcDmJOAzgG/5iy3SCZ/DFfKxoegzuP3rc0vv1NhzqtbBkI4HvuNea/+CO7ij545L/8IrogOeO5WfECARXRgphZV6y5Qwb5fLOa46yvkizApP06tjMsPaQkHtJ0URa1DGWyPQ3U25d7EkEvoF7TlzXKvfkn4ARygVetxv6dSbSz3ly4ud+yy76DdRVFAr1C91s/HUet1ZH49lJ6bJ++CbjYRlc9biMoP7aiR5sfrLtL7vHvISLbZ2K3lSqms6iK+kv0TWqRldWiS4fx9fwR/SLsVh6pMI47ePf3HB9Tl9lyte6rztqzj/9CAn/zmz7cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACIiP8Au1xCf+LsdtMAAAAASUVORK5CYII="

    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [genre, setGenre] = useState("");
    const [image, setImage] = useState("");

    const [songData, setSongData] = useState(Song)

    const [response, setResponse] = useState({})

    useEffect(() => {
        setSongData({...Song, title: title, artist: artist, album: album, genre: genre, image: image, songPath: "path"})
    }, [title, artist, album, genre, image]);

    useEffect(() => {
        console.log(response)
    },[setResponse])

    return (
        <MainContainer>
            <Header title="Music" itemList={navList}/>
            <div className='m-4 d-flex justify-content-center align-items-center text-light'>
                <h2 className=''>
                    Add Song
                </h2>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-row text-light mt-5">
                <SongCard title={title} artist={artist} album={album} genre={genre} image={image} defaultImage={defaultImage}/>
                <div className='w-25 d-flex flex-column justify-content-between align-content-between'>
                    <Input title="Title" value={title} setValue={setTitle}/>
                    <Input title="Artist" value={artist} setValue={setArtist}/>
                    <Input title="Album" value={album} setValue={setAlbum}/>
                    <Input title="Genre" value={genre} setValue={setGenre}/>
                    <Input title="Image" value={image} setValue={setImage}/>
                    <SubmitButton title="Submit" onClick={addSong(songData, setResponse)}/>
                </div>
            </div>
        </MainContainer>
    )
}

export default Add