import React from 'react'

import img0 from '../assets/phone/huawei-nova-y60-noir.jpg'
import img1 from '../assets/phone/hu-y6p-purple.jpg'
import img2 from '../assets/phone/xiaomi redmi9a.jpg'
import img3 from '../assets/phone/XIAOMI 11T.jpg'
import img4 from '../assets/phone/IPHONE 13.jpg'
import img5 from '../assets/phone/mhda3f-a.jpg'

import '../Styles/style.css';

function Products(props) {
   const info = [
      {
          id: 0,
          name:'SMARTPHONE HUAWEI NOVA Y60',   
          img:img0, 
          details : 'Ecran 6.3" LCD IPS (1600 x 720 Pixels) - Processeur: Mediatek MT6762R Helio P22 (12 nm) Octa-Core  (4x2,0 GHz Cortex-A53 et 4x1,5 GHz Cortex-A53) - Systéme d"exploitation: Android 10.0 (Pie) - Mémoire RAM: 3 Go - Stockage:  64 Go - Appareil Photo Arriére: Triple 13 MP + 5 MP + 2 MP , flash led et Frontale: 8 MP - Empreinte digitale - Connctivité: 4G, Wifi et Bluetooth - Double SIM - Capacité Batterie: 5000 mAh - Couleur: Violet',  
          price: '599,000 TND',
      },
      {
         id: 1, 
         name:'SMARTPHONE HUAWEI Y6P 4G - VIOLET ',
         img:img1, 
         details: 'Écran 6.53 LCD IPS (1600 x 720 Pixels) - Processeur: MediaTek Helio G25 Octa-Core 2.0 GHz Cortex-A53 - Systéme d"exploitation: Android 10, MIUI 12 - Mémoire RAM: 2 Go - Stockage: 32 Go - Appareil Photo Arriére: 13.0 MP  f/2.2, Flash LED et Frontale 5.0MP - Connctivité: 4G, Wifi et Bluetooth - Batterie: Li-Ion 5000 mAh - Double SIM - Couleur: Bleu - Garantie: 1 an',
         price: '499,000 TND',
         
     },
      {
          id: 2, 
          name:'SMARTPHONE XIAOMI REDMI 9A 32G ',
          img:img2, 
          details: 'Écran 6.53 LCD IPS (1600 x 720 Pixels) - Processeur: MediaTek Helio G25 Octa-Core 2.0 GHz Cortex-A53 - Systéme d"exploitation: Android 10, MIUI 12 - Mémoire RAM: 2 Go - Stockage: 32 Go - Appareil Photo Arriére: 13.0 MP  f/2.2, Flash LED et Frontale 5.0MP - Connctivité: 4G, Wifi et Bluetooth - Batterie: Li-Ion 5000 mAh - Double SIM - Couleur: Bleu - Garantie: 1 an',
          price: '339,000 TND',
          
      },
      {
          id: 3, 
          name:'Smartphone XIAOMI 11 Lite 8G - Noir' ,  
          img:img3, 
          details: 'Ecran: 6.55" AMOLED - Résolution: 1080 x 2400 pixels - Systéme d"exploitation: Android 11 (MIUI 12) - Processeur: QualcommSM7150 Snapdragon 732G Octa-Core (2x2,3 GHz Kryo 470 Gold et 6x1,8 GHz Kryo 470 Silver) - Mémoire RAM: 8 Go - Stockage: 128 Go - Appareil Photo Arriére: Trio Pixels 64 MégaPixels + 8 MégaPixels + 5 MégaPixels - Appareil Photo Frontale: 16 MégaPixels - Connctivité: 4G, Wifi et Bluetooth - Capteur d"empreinte digitale - Double SIM - Autonomie de Batterie: 4250 mAh - Couleur: Noir ',
          price: '1 359,000 TND',
         
      },
      {
         id: 4, 
         name:'IPHONE 13 128GO' ,  
         img:img4, 
         details: 'Ecran 6,1" OLED Super Retina XDR HDR - Résolution: 2532 x 1170 pixels à 460 ppp - Processeur:  Puce A15 Bionic (5 nm) Hexa-core ( 2 x 3.22 GHz Avalanche + 4 x X.X GHz Blizzard) - GPU Graphics Apple 4 Coeurs - Système d"exploitation: iOS 15 - Mémoire RAM: 4 Go - Stockage: 128 Go - Appareil photo Arrière: Dual Pixels: 12 MégaPixels Grand‑angle avec ouverture ƒ/1,6 + 12 MégaPixels Ultra grand‑angle avec ouverture ƒ/2,4 et champ de vision de 120° - Appareil Avant: 12 MégaPixels avec Ouverture ƒ/2,2 - Video 4K HDR avec Wifi, Réseau 5G , GPS , NFC et Bluetooth 5.0 - Batterie: Li-Ion 3240 mAh - Face ID - Couleur: Bleu - Garantie: 1 an',
         price: '3 699,000 TND',
         
     },
     {
      id: 5, 
      name:'IPHONE 11 64 GO - NOIR ' ,  
      img:img5, 
      details: 'Ecran 6,1" Retina IPS - Résolution: 828 x 1792 pixels - Processeur: Apple A13 Bionic Hexa-core ( 2x2.65 GHz Lightning + 4x1.8 GHz Thunder) - Systéme d"exploitation: iOS 13 - Mémoire RAM: 4 Go - Stockage: 64 Go - Appareil photo Arriere: Double: 12 MégaPixels + 12 MégaPixels (Ouverture f/2.4 13mm) - Appareil Avant 12 MégaPixel (Ouverture ƒ/2,2) Retina Flash avec Wifi, 4G et Bluetooth 5.0 - Batterie: Li-Ion 3110 mAh - Enregistrement vidéo 4K - Temps de conversation Sans Fil: jusqu’à 17 heures - Classé IP68 (profondeur maximale de 2 mètres jusqu"à 30 minutes) - Couleur: Noir',
      price: '2 599,000 TND',
      
  },
  ]

  const phones = info.map((phone)=>{
  return  (
 
   
            <div className="col-sm-6 col-md-6 col-lg-4">
          <div className="box">
             <div className="option_container">
                <div className="options">
                   <a href="" className="option1">
                   Men's Shirt
                   </a>
                   <a href="" className="option2">
                   Buy Now
                   </a>
                </div>
             </div>
             <div className="img-box">
                <img src={phone.img} alt=""/>
               
             </div>
             <div className="detail-box">
                <h5>
                   {phone.name} 
                </h5>
                <br/>
                <h6 id="price">
                  {phone.price} 
                </h6>
             </div>
          </div>
       </div>
 
   
   ) })
                      
  return (
     <div>
 
   <section class="product_section layout_padding">
         <div class="container">
            <div class="heading_container heading_center">
               <h2>
                  Our <span>products</span>
               </h2>
            </div>
            <div class="row">
      
      {phones}    
      </div>
   
    </div>
    
   </section>  

   </div>
  )
}

export default Products
