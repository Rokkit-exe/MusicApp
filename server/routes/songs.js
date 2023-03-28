const express = require('express')
const router = express.Router()
const Song = require('../models/song')


const getSong = async (req, res, next) => {
    let song
    try {
        song = await Song.findById(req.params.id)
        if (song == null) 
            return res.status(404).json({message: 'Cannot find song'})
    }
    catch (err) {
        return res.status(500).json({message: err.message})
    }
    res.song = song
    next()
}

// getting all
router.get('/', async (req, res) => {
    try {
        const song = await Song.find()
        res.json(song)
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
})

// getting one

router.get('/:id', getSong, (req, res) => {
    res.json(res.song)
})

// creating one
router.post('/', async (req, res) => {
    const song = new Song({
        title: req.body.title,
        artist: req.body.artist,
        album: req.body.album,
        genre: req.body.genre,
        albumImagePath: req.body.albumImagePath,
        songPath: req.body.songPath
    })
    try {
        const newSong = await song.save()
        res.status(201).json(newSong)
    }
    catch (err) {
        res.status(400).json({message: err.message})
    }
})

// update one
router.patch('/:id', getSong, async (req, res) => {
    if (req.body.title != null)
        res.song.title = req.body.title

    if (req.body.artist != null)
        res.song.artist = req.body.artist

    if (req.body.album != null)
        res.song.album = req.body.album
    
    if (req.body.genre != null)
        res.song.genre = req.body.genre

    if (req.body.albumImagePath != null)
        res.song.albumImagePath = req.body.albumImagePath

    if (req.body.songPath != null)
        res.song.songPath = req.body.songPath

    try {
        const updatedSong = await res.song.save()
        res.json(updatedSong)
    }
    catch (err) {
        res.status(400).json({message: err.message})
    }
})

// delete one
router.delete('/:id', getSong, async (req, res) => {
    try {
        await res.song.deleteOne()
        res.json({message: 'Song Deleted'})
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
})



module.exports = router