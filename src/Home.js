import React from 'react';
import Product from './Product';
import "./Home.css";

function Home() {
  return (
    
    <div className="home">  
        <img 
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
        alt="" 
        />

        <div className="home_row">
        <Product id="12321341"
        title="The Lean Startup: How constant Innovation Creates Radically Successful Businesses Paperback"
        price={11.96} 
        rating={ 5 }
        image= "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
        <Product id="4569895"
        title="PHISINIC Stand Mixer, 6.5-QT 800W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Power Hub for Attachment (Red)"
        price={199} 
        rating={ 3 }
        image= "https://m.media-amazon.com/images/I/71PcRhHJaSL._AC_UL640_FMwebp_QL65_.jpg"
        />
        </div>
        <div className="home_row">
        <Product id="42175690"
        title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Heather Gra"
        price={39} 
        rating={ 4 }
        image= "https://m.media-amazon.com/images/I/61V25P7mlyL._AC_UY436_FMwebp_QL65_.jpg"
        />

       <Product id="98456720"
        title="New Apple iPad (10.2-inch, Wi-Fi, 32GB) - Silver (Latest Model, 8th Generation) "
        price={399} 
        rating={ 5 }
        image= "https://m.media-amazon.com/images/I/71GsWDM8sPL._AC_UY436_FMwebp_QL65_.jpg"

        />
        <Product id="562143"
        title="Roll over image to zoom in Samsung Galaxy Watch Active (40mm, GPS, Bluetooth) Smart Watch with Fitness Tracking, and Sleep Analysis - Rose Gold  (US Version)"
        price={199} 
        rating={ 4 }
        image= "https://m.media-amazon.com/images/I/61n1c2vnPJL._AC_UY436_FMwebp_QL65_.jpg"

        />
        </div>
        <div className="home_row">
        <Product id="735626893"
        title="SAMSUNG 55-Inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN55TU8000FXZA, 2020 Model)"
        price={497} 
        rating={ 4 }
        image= "https://m.media-amazon.com/images/I/71RiQZ0J2SL._AC_UY436_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
    
    
  );
}

export default Home;
