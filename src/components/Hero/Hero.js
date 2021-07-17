import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My name is Jason and this is a little look into my journey as a
        self-taught web developer
      </SectionText>
      {/* <Button onCLick={() => (window.location = "https://www.google.co.uk/")}>
        Learn More
      </Button> */}
    </LeftSection>
  </Section>
);

export default Hero;
