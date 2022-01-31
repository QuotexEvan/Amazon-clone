import React from 'react';
import './Home.css';
import Product from './Product';


function Home() {
    return (
        
        <div className='home'>
            <div className="home_container">
                <img className="home_image" src="https://wallpaperaccess.com/full/6522669.png" alt="background" />
                <div className="home_row">
                    <Product id={1} title="M1 Macbook Pro 2020" price={1299.00} rating={5} image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_US?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632948875000"/>
                    <Product id={2} title="Iphone 13 Pro Max" price={1099.00} rating={4} image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-family-select?wid=1880&amp;hei=2224&amp;fmt=jpeg&amp;qlt=80&amp;.v=1631306948000"/> 
                </div>
                <div className="home_row">
                    <Product id={3}title="Shoe Dog" price={10.99} rating={5}image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR94vDnjTtwwXYHiUZtPus28gb1UYqOFUSVUA&usqp=CAU"/>
                    <Product id={4} title="Sony PS4 Gaming Console 500Gb" price={649.97} rating={5} image="https://m.media-amazon.com/images/I/71PGvPXpk5L._SL1500_.jpg"/>
                    
                    <Product id={5} title="Amazon Kindle Oasis" price={149.99} rating={5} image="https://m.media-amazon.com/images/I/61moEqqnwzL._AC_SL1000_.jpg"/>
                </div>
                <div className="home_row">
                    <Product id={6} title="Sony Bravia 65inch 4k" price={450.00} rating={4} image="https://m.media-amazon.com/images/I/81ii3VScCbL._AC_UL640_QL65_.jpg" />
                    </div>
            </div>
            </div>
        
    )
}

export default Home
