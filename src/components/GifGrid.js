//rafc
//import userEvent from '@testing-library/user-event';
import React from 'react'
import { useFechGifs } from '../hooks/useFechGifs'
//import { getGif } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {


    const {data:images, loading} = useFechGifs(category);

    console.log(loading);

    /*
    const [images, setImages] = useState([]);
    //api key 0lcq6KI1WCEm3ytUaMaVrOCtFxVKqCrS

    


    useEffect(() =>{

        getGif(category).then(setImages);
    }, [category])*/




    //getGif();

    return (

        <> 
            <h3 className="card animate__animated animate__fadeIn"> { category } </h3>
            { loading && <p  className="card animate__animated animate__flash" >Cargando... </p> }
            <div className="card-grid">
            
                {
                    
                    images.map((img) => { 
                        
                        return(
                            <GifGridItem 
                                key={img.id}
                                {...img}
                            />
                        )

                    })   
                }
     
            
        </div>
        </>
    )
}
