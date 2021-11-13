const express = require('express')
const rutasDocente = express.Router()

rutasDocente.get('/', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('SELECT * FROM Profesores', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

rutasDocente.post('/', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('INSERT INTO Profesores set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.send("Profesor creado con éxito")
        })
    })
})

rutasDocente.delete('/:idProfesor', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('DELETE FROM Profesores WHERE idProfesor = ?', [req.params.idProfesor], (err, rows) => {
            if (err) return res.send(err)
            res.send("Profesor eliminado con éxito")
        })
    })
})

rutasDocente.put('/:idProfesor', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('UPDATE Profesores set ? WHERE idProfesor = ?', [req.body, req.params.idProfesor], (err, rows) => {
            if (err) return res.send(err)
            res.send("Profesor actualizado con éxito")
        })
    })
})

module.exports = rutasDocente