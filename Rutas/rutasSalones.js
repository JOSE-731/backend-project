const express = require('express')
const rutasSalon = express.Router()

rutasSalon.get('/', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('SELECT * FROM Salones', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

rutasSalon.post('/', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('INSERT INTO Salones set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.send("Salón creado con éxito")
        })
    })
})

rutasSalon.delete('/:idSalon', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('DELETE FROM Salones WHERE idSalon = ?', [req.params.idSalon], (err, rows) => {
            if (err) return res.send(err)
            res.send("Salón eliminado con éxito")
        })
    })
})

rutasSalon.put('/:idSalon', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('UPDATE Salones set ? WHERE idSalon = ?', [req.body, req.params.idSalon], (err, rows) => {
            if (err) return res.send(err)
            res.send("Salón actualizado con éxito")
        })
    })
})

module.exports = rutasSalon