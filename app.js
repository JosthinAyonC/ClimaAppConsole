require('dotenv').config()

const { leerInput, inquirerMenu, pausa, listarLugares } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

require('colors');

const main = async() =>{

    const busquedas= new Busquedas();
    let opt;

    do {
        
        opt= await inquirerMenu();

        switch(opt)
        {
            case 1:
            //Mostrar mensaje
            const terminoBusqueda = await leerInput('Ciudad: ');

            //Buscar los lugares
            const lugares = await busquedas.ciudadEncontrada(terminoBusqueda);  

            //seleccionar el lugar
            const idSelect = await listarLugares(lugares);
            console.log({idSelect})
            const lugarSel = lugares.find( l => l.id === idSelect);

            
            //Mostrar resultados
            console.log('\nInformacion de la ciudad\n'.green);
            console.log('Ciudad: ',lugarSel.nombre);
            console.log('Lat: ', lugarSel.lat);
            console.log('Lng: ', lugarSel.lng);
            console.log('Temperatura: ');
            console.log('Minima: ');
            console.log('Maxima: ');
    
            break;
            
        }

        if( opt  !== 0 ) await pausa();

    } while (opt !== 0)    
    
}
main();