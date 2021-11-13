const express = require('express')
const rutasHorario = express.Router()

rutasHorario.get('/', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('SELECT * FROM Horarios', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

rutasHorario.post('/', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('INSERT INTO Horarios set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.send("Horario creado con éxito")
        })
    })
})

rutasHorario.delete('/:idHorario', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('DELETE FROM Horarios WHERE idHorario = ?', [req.params.idHorario], (err, rows) => {
            if (err) return res.send(err)
            res.send("Horario eliminado con éxito")
        })
    })
})

rutasHorario.put('/:idHorario', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('UPDATE Horarios set ? WHERE idHorario = ?', [req.body, req.params.idHorario], (err, rows) => {
            if (err) return res.send(err)
            res.send("Horario actualizado con éxito")
        })
    })
})

module.exports = rutasHorario