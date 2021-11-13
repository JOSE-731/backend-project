const express = require('express')
const rutasFacultad = express.Router()

rutasFacultad.get('/', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('SELECT * FROM Facultad', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

rutasFacultad.post('/', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('INSERT INTO Facultad set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.send("Facultad creada con éxito")
        })
    })
})

rutasFacultad.delete('/:idFacultad', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('DELETE FROM Facultad WHERE idFacultad = ?', [req.params.idFacultad], (err, rows) => {
            if (err) return res.send(err)
            res.send("Facultad eliminada con éxito")
        })
    })
})

rutasFacultad.put('/:idFacultad', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('UPDATE Facultad set ? WHERE idFacultad = ?', [req.body, req.params.idFacultad], (err, rows) => {
            if (err) return res.send(err)
            res.send("Facultad actualizada con éxito")
        })
    })
})


module.exports = rutasFacultad