const axios = require('axios');

class Busquedas{

    hisotrial=[];

    constructor(){
        //TO DO: leer BD si existe
    }

    get paramsMapbox(){

        return{
            'access_token' : process.env.MAPBOXS_KEY,
            'limit' : 5,
            'language': 'es'   
        }
    }

    async ciudadEncontrada(lugar = ''){

        try {
            
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params : this.paramsMapbox
            });

            const resp = await instance.get();

            return resp.data.features.map( lugar => ({

                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]

            }))
        

        } catch (error) {
            return[];
        }

        //Peticion http
        // console.log('Ciudad', lugar);

        //retornar los lugares que coincidan
        return [];

    }

}

module.exports= Busquedas;
