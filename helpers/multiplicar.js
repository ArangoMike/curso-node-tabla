const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (base = 5, listar = false,hasta = 10) => {

    try {

        let salida = '';
        for (let i = 1; i < hasta + 1; i++) {

            salida += `${base} x${i} = ${base * i}\n`;
        }
        if (listar == true) {
            console.log('==========================='.red);
            console.log('  Tabla del: ', `${base}`.green);
            console.log('==========================='.red);

            console.log(salida);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `Tabla-${base}.txt`.rainbow;

    } catch (err) {
        throw (err)

    }


}

module.exports = {
    crearArchivo
}