const express = require('express')
const rutasConsultasUsuario = express.Router()

//Consulta todos los datos de los usuarios y el rol que tienen

//Rol de administrador
rutasConsultasUsuario.get('/administrador', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('SELECT *, nombreRol FROM Usuarios AS usu, Roles AS rol WHERE rol.idRol = 1 AND usu.Roles_idRol =1 ', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

//Rol super usuario
rutasConsultasUsuario.get('/super-usuario', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('SELECT *, nombreRol FROM Usuarios AS usu, Roles AS rol WHERE rol.idRol= 2 AND usu.Roles_idRol = 2', [req.body, req.params.idRol], (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

//Rol coordinador
rutasConsultasUsuario.get('/coordinador', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('SELECT *, nombreRol FROM Usuarios AS usu, Roles AS rol WHERE rol.idRol = 3 AND usu.Roles_idRol = 3', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

//Rol registro y control
rutasConsultasUsuario.get('/registro-control', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('SELECT *, nombreRol FROM Usuarios AS usu, Roles AS rol WHERE rol.idRol = 4 AND usu.Roles_idRol = 4', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

//Consulta para los docentes
rutasConsultasUsuario.get('/docentes', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('SELECT * Profesores WHERE idProfesor = 1', [req.body], (res, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

module.exports = rutasConsultasUsuario