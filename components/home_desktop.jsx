import { Container } from "react-bootstrap";
import Section_1 from "./home_sections/section_1";
import Section_2 from "./home_sections/section_2";
import Section_3 from "./home_sections/section_3";
import Section_4 from "./home_sections/section_4";
import Section_5 from "./home_sections/section_5";

export default function DesktopHome() {
    return (
        <Container>
        <Section_1 />
        <Section_2 />
       
        <Section_3 />
       
        <Section_4 />
        <Section_5/>
        </Container>
    )
  }