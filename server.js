const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const rutasUsuario = require('./Rutas/rutasUsuario')
const rutasRol = require('./Rutas/rutasRoles')
const rutasTipoInst = require('./Rutas/rutasTipoInst')
const rutasFacultad = require('./Rutas/rutasFacultades')
const rutasPrograma = require('./Rutas/rutasProgramas')
const rutasSemestre = require('./Rutas/rutasSemestres')
const rutasMateria = require('./Rutas/rutasMaterias')
const rutasDocente = require('./Rutas/rutasDocentes')
const rutasSalon = require('./Rutas/rutasSalones')
const rutasHorario = require('./Rutas/rutasHorarios')
const rutasConsultasUsuario = require('./Rutas/consultasUsuario')
const rutasMateriaModular = require('./Rutas/rutasMateriamodular')


const app = express()

// OJO ESTO ES PARA CUANDO LO VAYAMOS A CONECTAR A UN SERVIDOR WEB
app.set('port', process.env.PORT || 9000)

const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'sistemagestorhorarios'
}

// middlewares -------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

//Rutas --------------------
app.get('/', (req, res) => {
    res.send('Welcome to the API')
})

//Cada una de estas rutas hace referencia al archivo dónde esta el CRUD de cada una de las tablas que se dicen
//Ejemplo: 
// "/usuarios" -> hace referencia al archivo dónde esta el CRUD de Usuarios
// "/roles" -> hace referencia al archivo dónde esta el CRUD de Roles... así sucesivamente
app.use('/roles', rutasRol)
app.use('/usuarios', rutasUsuario)
app.use('/tipo-institucion', rutasTipoInst)
app.use('/facultades', rutasFacultad)
app.use('/programa', rutasPrograma)
app.use('/semestres', rutasSemestre)
app.use('/materias', rutasMateria)
app.use('/profesores', rutasDocente)
app.use('/salones', rutasSalon)
app.use('/horarios', rutasHorario)
app.use('/materia-modular', rutasMateriaModular)

//Rutas para las consultas
app.use('/consultas-usuario', rutasConsultasUsuario)

//Server running ------------------------
app.listen(app.get('port'), () => {
    console.log('Server running on port', app.get('port'))
})