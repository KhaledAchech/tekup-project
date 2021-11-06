import React from 'react'
import background from '../../images/bg.jpg'
import '../../App.css';
import TekupLogo from '../others/TekupLogo';

export default function Home() {

    return (
        <body style={{ backgroundImage: `url(${background})` , backgroundPosition: 'center',  backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',  width: '100vw', height: '100vh'}}>
        
        <TekupLogo/>
        </body>
    )
}
