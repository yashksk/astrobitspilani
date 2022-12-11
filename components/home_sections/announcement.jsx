import React from "react";
import styles from "./announcement.module.css";
import Marquee from "react-fast-marquee";
export default function Announcescroll(){
    return (
        <div className={styles.scroll}>
            <Marquee loop={0} gradient={false}>
                <section className={styles.slide}><section className = {styles.anntext}>Hi hello this is Shubham Rai sunne me aa rha hai ki nadi ka pani baand seema ko par kr chuka hai and badh aane waali hai toh apne heaters taiyaar rkhey kyuki badh me thandi badhne ke chances bhot jyaada hai</section></section>
                <section className={styles.slide}></section>
                <section className={styles.slide}></section>
             </Marquee>
        </div>
    )
}











