const express = require('express')
const rutasMateria = express.Router()

rutasMateria.get('/', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('SELECT * FROM Materias', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

rutasMateria.post('/', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('INSERT INTO Materias set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.send("Materia creada con éxito")
        })
    })
})

rutasMateria.delete('/:idMaterias', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('DELETE FROM Materias WHERE idMaterias = ?', [req.params.idMaterias], (err, rows) => {
            if (err) return res.send(err)
            res.send("Materia eliminada con éxito")
        })
    })
})

rutasMateria.put('/:idMaterias', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('UPDATE Materias set ? WHERE idMaterias = ?', [req.body, req.params.idMaterias], (err, rows) => {
            if (err) return res.send(err)
            res.send("Materia actualizada con éxito")
        })
    })
})

module.exports = rutasMateria