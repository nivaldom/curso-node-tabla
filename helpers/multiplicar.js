
const fs = require('fs');


const crearArchivo = async( base, list, hasta) => {

    try{
    let salida = '';

    for(let i = 1; i<=hasta; i++){
        salida += `${base} x ${i} = ${base*i}\n`;
    }
    

    fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
    console.log(`tabla-${base}.txt creado`);

    if(list){ 
        console.log('=====================');
        console.log(`Tabla del ${base}`);
        console.log('=====================');
        console.log(salida);
    };

    }
    catch(err){
        throw err;
    }
}

module.exports = {
    crearArchivo
};