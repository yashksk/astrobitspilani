import React from "react";
import styles from "./scrl.module.css";
import Marquee from "react-fast-marquee";
import Event_Card from "./eventcard";
export default function Carousel(){
    return (
        <div className="styles.scroll">
            <Marquee loop={0} gradient={false}>
                <section className={styles.slider}><Event_Card/></section>
                <section className={styles.slider}><Event_Card/></section>
                <section className={styles.slider}><Event_Card/></section>
             </Marquee>
        </div>
    )
}











