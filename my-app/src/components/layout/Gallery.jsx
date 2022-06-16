import styles from './Gallery.module.css';
import React from 'react'; 

import Img1 from '../../image/1.jpg';
import Img2 from '../../image/2.jpg';
import Img3 from '../../image/3.jpg';
import Img4 from '../../image/4.jpg';
import Img5 from '../../image/5.jpg';
import Img6 from '../../image/6.jpg';

// import { useState } from 'react';
// import { AiOutlineClose } from 'react-icons/ai';

const Gallery = () => {

    let data = [
        {
            id: 1,
            imgSrc: Img1
        },
        {
            id: 2,
            imgSrc: Img2
        },
        {
            id: 3,
            imgSrc: Img3
        },
        {
            id: 4,
            imgSrc: Img4
        },
        {
            id: 5,
            imgSrc: Img5
        },
        {
            id: 6,
            imgSrc: Img6
        }
    ]

    // const [model, setModel] = useState(false);
    // const [tempImgSrc, setTempImgSrc] = useState('');
    // const getImg = (imgSrc) => {
    //     setTempImgSrc(imgSrc);
    //     setModel(true);
    // }

    return (
        <>
        {/* <div className={model? "model open" : "model"}>
            <img src={tempImgSrc} alt='' />
            <AiOutlineClose onClick={() => setModel(false)} />
        </div> 
        
        onClick={ () => getImg(item.imgSrc) }
        
        */}

        <div className={styles.gallery}>
            {data.map((item, index) => {
                return(
                    <div className={styles.fotos} key={index} >
                        <img src={item.imgSrc} alt="fotos" style={{width: '100%'}} />
                    </div>
                );
            })}
       </div>
        </>
    );
}

export default Gallery;