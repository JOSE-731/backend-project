const express = require('express')
const rutasUsu = express.Router()

rutasUsu.get('/', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('SELECT * FROM Usuarios', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

rutasUsu.post('/', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('INSERT INTO Usuarios set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.send("Usuario creado con éxito")
        })
    })
})

rutasUsu.delete('/:idUsuario', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('DELETE FROM Usuarios WHERE idUsuario = ?', [req.params.idUsuario], (err, rows) => {
            if (err) return res.send(err)
            res.send("Usuario eliminado con éxito")
        })
    })
})

rutasUsu.put('/:idUsuario', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('UPDATE Usuarios set ? WHERE idUsuario = ?', [req.body, req.params.idUsuario], (err, rows) => {
            if (err) return res.send(err)
            res.send("Usuario actualizado con éxito")
        })
    })
})


module.exports = rutasUsu