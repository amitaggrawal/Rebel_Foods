import React, {useEffect, useState} from "react";

import axios from "axios"

import BeersPage from "../component/BeersPage";
import * as API from "../service/APIConstants";

const Beers = props => {
    const [beersList, updateBeersList ] = useState([]);


    useEffect(() => {
        const beersListRequest = axios.get(API.BEERS);
        const beersImageRequest = axios.get(API.BEERS_IMAGES);

        Promise.all([beersListRequest, beersImageRequest])
        .then((response) => {
            console.log(response);
            let initialIndex = 0;
            let maxIndex = response[1]['data'].length;

            const finalBeersList = response[0]['data'].map(beer => {
                if(initialIndex === maxIndex){
                    initialIndex = 0;
                }
                const beerItem = {...beer, image:response[1]['data'][initialIndex]['image']}
                initialIndex++;
                return beerItem;
            });
            updateBeersList(finalBeersList);

        });
        
    },[]);

    
    return(
        <BeersPage data={beersList}/>
    )
    
};

export default Beers;