import styles from './section_5.module.css';

export default function Section_5(){
    return(
        <div className = {styles.sec5}>
        <h1 className = {styles.contactustext}>Contact Us</h1>
        <h2 className = {styles.nametext}>Name</h2>
        <h2 className = {styles.messagetext}>Message</h2>
        <h2 className = {styles.emailtext}>Email</h2>
        <hr className = {styles.emailline}></hr>
        <hr className = {styles.nameline}></hr>
        <section className = {styles.messagebox}></section>

        </div>
    )
}