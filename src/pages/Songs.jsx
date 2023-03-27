import React, {useState, useEffect} from 'react'
import {fetchAllSongs, fetchOneSong, updateSong, deleteSong} from '../functions/HttpRequests'
import MainContainer from '../components/MainContainer';
import Header from '../components/Header';
import { navList } from '../path';
import axios from "axios"
import { NavLink } from 'react-router-dom';
import SongCard from '../components/SongCard';

const {REACT_APP_API_URL} = process.env

function Songs() {

    const id = "641e09a53a5da71bf2c4a2e3"
    const [songs, setSongs] = useState([]);
    const [song, setSong] = useState({});
    const [updated, setUpdated] = useState("");
    const [deleted, setDeleted] = useState("")

    useEffect(() => {
        fetchAllSongs(setSongs)
    },[])
    
    return (
        <MainContainer>
            <Header title="Music" itemList={navList}/>
            <div className='d-flex justify-content-between align-itemms-center m-3'>
                <div></div>
                <h2 className='text-light'>All songs</h2>
                <NavLink to="/songs/add" className='navlink btn btn-dark border border-light justify-content-center align-itemms-center'>Add Song</NavLink>
            </div>
            <div className='d-flex justify-content-center align-items-center bg-light-dark full-height'>
                <ul className='list-unstyled grid-container'>
                {
                    songs.map((elem, key) => 
                        <SongCard title={elem.title} artist={elem.artist} album={elem.album} genre={elem.genre} image={elem.albumImagePath}/>
                )}
                </ul>
            </div>
        </MainContainer>
        
    )}

export default Songs