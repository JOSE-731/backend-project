const express = require('express')
const rutasTipoInst = express.Router()


rutasTipoInst.get('/', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('SELECT * FROM tipoInstitucion', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

rutasTipoInst.post('/', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        console.log(req.body);
        connet.query('INSERT INTO tipoInstitucion set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.send("Institución creada con éxito")
        })
    })
})

rutasTipoInst.delete('/:idTipoInstitucion', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('DELETE FROM tipoInstitucion WHERE idTipoInstitucion = ?', [req.params.idTipoInstitucion], (err, rows) => {
            if (err) return res.send(err)
            res.send("Intitución eliminada con éxito")
        })
    })
})

rutasTipoInst.put('/:idTipoInstitucion', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('UPDATE tipoInstitucion set ? WHERE idTipoInstitucion = ?', [req.body, req.params.idTipoInstitucion], (err, rows) => {
            if (err) return res.send(err)
            res.send("Institución actualizada con éxito")
        })
    })
})

module.exports = rutasTipoInst