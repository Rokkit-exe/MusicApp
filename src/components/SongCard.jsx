import React from 'react'


function SongCard({image, title, artist, album, genre, defaultImage}) {
    return (
        <div className='m-3'>
            <div className="card text-light bg-dark bg-gradient border-gray p-1">
            <img src={image ? image : defaultImage} className="card-img-top"/>
            <div className="card-body justify-content-center align-items-center">
                <h3 className="card-title">{title ? title : "title"}</h3>
                <h4 className="card-text">{artist ? artist : "artist"}</h4>
                <h6 className="card-text">{album ? album : "album"}</h6>
                <h8 className="card-text">{genre ? genre : "genre"}</h8>
            </div>
            </div>
        </div>
    )
}

export default SongCard