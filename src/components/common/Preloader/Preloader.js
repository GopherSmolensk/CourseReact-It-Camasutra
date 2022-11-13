import preloader from '../../../assets/images/Wave-Loader.svg';
import React from 'react'


let Preloader = (props) => {
    return (
        <div>            
                <img src={preloader} alt='img' />  
        </div>
    );
}

export default Preloader;