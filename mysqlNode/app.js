var mysql = require('mysql');
var conexion = mysql.createConnection({
    host:'mysql3001.mochahost.com',
    database:'abecode_chuchoapi',
    user:'abecode_chuchoap',
    password:'Warewolf15'
})

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('CONEXCION EXITOSA')
    }
});

conexion.end();