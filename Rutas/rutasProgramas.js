const express = require('express')
const rutasPrograma = express.Router()

rutasPrograma.get('/', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('SELECT * FROM Usuarios', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

rutasPrograma.post('/', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('INSERT INTO Programas set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.send("Programa creado con éxito")
        })
    })
})

rutasPrograma.delete('/:idPrograma', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('DELETE FROM Programas WHERE idPrograma = ?', [req.params.idPrograma], (err, rows) => {
            if (err) return res.send(err)
            res.send("Programa eliminado con éxito")
        })
    })
})

rutasPrograma.put('/:idPrograma', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('UPDATE Programas set ? WHERE idPrograma = ?', [req.body, req.params.idPrograma], (err, rows) => {
            if (err) return res.send(err)
            res.send("Programa actualizado con éxito")
        })
    })
})


module.exports = rutasPrograma