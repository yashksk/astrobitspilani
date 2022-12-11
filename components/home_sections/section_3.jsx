import styles from "./section_3.module.css";
import Carousel  from "./scrl.jsx";
import Announcescroll from "./announcement";
// import App from "./scroller.tsx";
export default function Section_3() {
    return (
      
      <div className={styles.sec3}>
        
        
        <div>
        <section><h2 className={styles.aboutUsText}>About Us</h2></section>
        <section className={styles.content}><p className={styles.aboutUsContent}> After two long years, the Sports Council of BITS Pilani is organizing its 35th annual BOSM (BITS Open Sports Meet) from the 14th to the 18th of October. A platform for the students to display their talent by competingagainst the best players across the Globe. mjnhfg bfdnhgbdfvn gfb fdbfbbbfbf fbdfbdf f </p></section>
        <section className = {styles.box}>
        <h1 className = {styles.announcementtext}>Announcements</h1>
        <section className={styles.scroll}><Announcescroll/></section>
        </section> 
        </div>
        

        
        <div className={styles.events}>
        <section className={styles.eventext}>EVENTS</section>  
        <section className={styles.carousel}><Carousel /></section>
        </div>
         <div>
         <section><h1 className = {styles.gallerytext}>
            Gallery
          </h1></section>
          <section><hr className={styles.rightline}></hr></section> 
          <section><hr className={styles.leftline}></hr></section>
          
        </div> 

      </div>
    )
  }