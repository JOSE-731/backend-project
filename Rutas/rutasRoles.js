const express = require('express')
const rutasRol = express.Router()


rutasRol.get('/', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('SELECT * FROM Roles', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

rutasRol.post('/', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        console.log(req.body);
        connet.query('INSERT INTO Roles set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.send("Rol creado con éxito")
        })
    })
})

rutasRol.delete('/:idRol', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('DELETE FROM Roles WHERE idRol = ?', [req.params.idRol], (err, rows) => {
            if (err) return res.send(err)
            res.send("Rol eliminado con éxito")
        })
    })
})

rutasRol.put('/:idRol', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('UPDATE Roles set ? WHERE idRol = ?', [req.body, req.params.idRol], (err, rows) => {
            if (err) return res.send(err)
            res.send("Rol actualizado con éxito")
        })
    })
})

module.exports = rutasRol