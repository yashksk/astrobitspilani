import styles from "./section2.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Section_2() {
    return (
        <div className={styles.outer}>
            <div className={styles.change} />
            <div className={styles.aboutOuter}>
                <div className={styles.announcements}>
                    <div className={styles.anounceHeading}>Activities</div>
                    <div className={styles.scroll}>
                        <div className={styles.marquee}>
                            <div className={styles.card}>
                                Sky Watching
                            </div>
                            <div className={styles.card}>
                                <img className={styles.cardImg} src={"./images/skywatch1.jpg"} />
                                Our activities typically take place on the FD-3 terrace and mostly feature stargazing, discussions, quizzes, and astrophotography.
                            </div>
                            <div className={styles.card}>
                                <img className={styles.cardImg} src={"./images/skywatch2.jpg"} />
                                We generally observe the night sky using our two telescopes:<br />
                                An 11 inch Schmidt Cassegrain Telescope<br />
                                A 6 inch galilean Telescope
                            </div>
                            <div className={styles.card}>
                                <img className={styles.cardImg} src={"./images/Moon.jpeg"} />
                                We primarily employ our reflecting telescope to observe numerous celestial bodies and—on rare occasions—galaxies.
                            </div>
                            <div className={styles.card}>
                                <img className={styles.cardImg} src={"./images/jupiter.jpg"} />
                                <div style={{ width: "65%" }}>
                                    Our observations include:<br />
                                    Moon<br />
                                    Mars<br />
                                    Jupiter
                                </div>
                            </div>
                            <div className={styles.card}>
                                <img className={styles.cardImg} src={"./images/saturn.jpg"} />
                                <div style={{ width: "65%" }}>
                                    Saturn<br />
                                    Orion Nebula<br />
                                    Andromeda Galaxy
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.about}>
                    about us
                    <div className={styles.aboutCon}>
                        The Astro Club of Bits Pilani, founded in 1979, comprises a group of enthusiastic students and faculty with a keen interest in astronomy and cosmology. The Astro Club aims to promote astronomy as a hobby and spread knowledge about it among the students at BITS. In addition to these primary objectives, the Astro Club also seeks to advance its own understanding and investigation of the universe.
                    </div>
                </div>
            </div>
            <div className={styles.events}>
                <div className={styles.eventHead}>Events</div>
                <div className={styles.eventScroll}>
                    <div className={styles.eventMarquee}>
                        <div className={styles.eventCard}>
                            <img style={{ height: "66%" }} src="./images/night.jpg" />
                            <div style={{ width: "90%", marginTop: "5%" }}>
                                <div className={styles.eventHeading}>Night’s Watch</div>
                                <div className={styles.eventDesc}>The Astro Club's flagship event, Night's Watch, is held twice a year during Oasis and APOGEE. Hundreds of people use the telescope during Night's Watch to view stellar objects that are visible at those times</div>
                            </div>
                        </div>
                        <div className={styles.eventCard}>
                            <img style={{ height: "66%" }} src="./images/astropixel.jpg" />
                            <div style={{ width: "90%", marginTop: "5%" }}>
                                <div className={styles.eventHeading}>Astro Pixel</div>
                                <div className={styles.eventDesc}> The night sky is notoriously difficult to capture, so if you think you’re up to the challenge, this is the place to showcase your astrophotography skills.
                                </div>
                            </div>
                        </div>
                        <div className={styles.eventCard}>
                            <img style={{ height: "66%" }} src="./images/42.jpg" />
                            <div style={{ width: "90%", marginTop: "5%" }}>
                                <div className={styles.eventHeading}>42</div>
                                <div className={styles.eventDesc}>42 is the signature astronomical quizzing event of the club that takes place during APOGEE. </div>
                            </div>
                        </div>
                        <div className={styles.eventCard}>
                            <img style={{ height: "66%" }} src="./images/everyoneDies.jpg" />
                            <div style={{ width: "90%", marginTop: "5%" }}>
                                <div className={styles.eventHeading}>Everyone Dies</div>
                                <div className={styles.eventDesc}>In a new event for APOGEE 2023 called Everyone Dies, the player is challenged to find a "practical" manner to exterminate everyone on the earth in the context of a supposedly absurd scenario.
                                </div>
                            </div>
                        </div>
                        <div className={styles.eventCard}>
                            <img style={{ height: "66%", }} src="./images/ksp.jpg" />
                            <div style={{ width: "90%", marginTop: "5%" }}>
                                <div className={styles.eventHeading}>Race to the Mun</div>
                                <div className={styles.eventDesc}>Another new event in APOGEE 2023 is Race to the Mun, which is split into two halves and is based on the simulation-based game Kerbal Space Program. The first phase will take place during pre-APOGEE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.gallery}>Gallery</div>
            <div className={styles.images}>
                <Carousel autoPlay={false} showThumbs={false} interval={5000}>
                    <div>
                        <img src="images/1.jpg" />
                    </div>
                    <div>
                        <img src="images/2.jpg" />
                    </div>
                    <div>
                        <img src="images/3.jpg" />
                    </div>
                    <div>
                        <img src="images/4.jpg" />
                    </div>
                    <div>
                        <img src="images/5.jpg" />
                    </div>
                    <div>
                        <img src="images/combine.jpg" />
                    </div>
                    <div>
                        <img src="images/42.jpg" />
                    </div>
                    <div>
                        <img src="images/astropixel.jpg" />
                    </div>
                    <div>
                        <img src="images/dome.jpg" />
                    </div>
                    <div>
                        <img src="images/group.jpg" />
                    </div>
                    <div>
                        <img src="images/group2.jpg" />
                    </div>
                    <div>
                        <img src="images/saturn.jpg" />
                    </div>
                    <div>
                        <img src="images/sky.jpg" />
                    </div>
                    <div>
                        <img src="images/skywatch1.jpg" />
                    </div>
                    <div>
                        <img src="images/skywatch2.jpg" />
                    </div>
                    <div>
                        <img src="images/sun.jpg" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}