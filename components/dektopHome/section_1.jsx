import styles from "./section1.module.css"

export default function Section_1(){
    return(
        <div className={styles.outer}>
            <div className={styles.astro}>
            Astro Club
            </div>
            <div className={styles.bits}>
            Bits pilani
            </div>
        </div>
    );
}