const express = require('express')
const rutasSemestre = express.Router()

rutasSemestre.get('/', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('SELECT * FROM Semestre', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

rutasSemestre.post('/', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('INSERT INTO Semestre set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.send("Semestre creado con éxito")
        })
    })
})

rutasSemestre.delete('/:idSemestre', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('DELETE FROM Semestre WHERE idSemestre = ?', [req.params.idSemestre], (err, rows) => {
            if (err) return res.send(err)
            res.send("Semestre eliminado con éxito")
        })
    })
})

rutasSemestre.put('/:idSemestre', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('UPDATE Semestre set ? WHERE idSemestre = ?', [req.body, req.params.idSemestre], (err, rows) => {
            if (err) return res.send(err)
            res.send("Semestre actualizado con éxito")
        })
    })
})


module.exports = rutasSemestre