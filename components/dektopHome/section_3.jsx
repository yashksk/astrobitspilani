import styles from "./section3.module.css"

export default function Section_3() {
    return (
        <div className={styles.outer}>
            <div className={styles.contact}>
                contact us
            </div>
            <div className={styles.contactDesc}>
                <div>Email - bitspilaniastroclub@gmail</div>\
                <div>Phone - 89293 64696 (President Astro Club)</div>
            </div>
        </div>
    );
}