const express = require('express')
const rutasMateriaModular = express.Router()

rutasMateriaModular.get('/', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('SELECT * FROM MateriaModular', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

rutasMateriaModular.post('/', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('INSERT INTO MateriaModular set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.send("Momento de materia creado con éxito")
        })
    })
})

rutasMateriaModular.delete('/:idMaterias', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('DELETE FROM MateriaModular WHERE idMateriaModular = ?', [req.params.idMateriaModular], (err, rows) => {
            if (err) return res.send(err)
            res.send("Momento de materia eliminada con éxito")
        })
    })
})

rutasMateriaModular.put('/:idMateriaModular', (req, res) => {
    req.getConnection((err, connet) => {
        if (err) return res.send(err)
        connet.query('UPDATE MateriaModular set ? WHERE idMateriaModular = ?', [req.body, req.params.idMateriaModular], (err, rows) => {
            if (err) return res.send(err)
            res.send("Momento de materia actualizado con éxito")
        })
    })
})

module.exports = rutasMateriaModular