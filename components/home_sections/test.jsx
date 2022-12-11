import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import pic_1 from "./assets/section4/pic_1.png";  
import styles from "./test.module.css";
export default class NextJsCarousel extends Component {
    render() {
        return (
            <div className = {styles.galleryy}>
              <Carousel className = {styles.mainslide}>
                  <div>
                      <img src = {pic_1.png} height = "600px" width = "1512px"/>
                      
  
                  </div>
                  <div>
                  <img src={pic_1.png} height = "600px" width = "1512px"/>
                      
  
                  </div>
                  <div>
                  <img src={pic_1.png} height = "600px" width = "1512px"/>
                      
  
                  </div>
                  <div>
                  <img src={pic_1.png} height = "600px" width = "1512px"/>
                      
  
                  </div>
                  <div>
                  <img src={pic_1.png} height = "600px" width = "1512px"/>
                      
  
                  </div>
              </Carousel>
            </div>  
        );
    }
};