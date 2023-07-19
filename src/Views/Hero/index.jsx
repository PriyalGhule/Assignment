import React from 'react';
import { ButtonContainer, ButtonStyle, HeroContainer, HeroHeaderContainer, HeroImage, HeroImageContainer, HeroSubHeaderContainer, HeroTextContainer} from '../../Styles/Hero';
import heroImg from '../../Images/top-3.png' 

const Hero = () => {
  return (
    <HeroContainer>
      
      <HeroTextContainer>
         
          <HeroHeaderContainer>
              Discover. Connect. Collaborate.
          </HeroHeaderContainer>
          <HeroSubHeaderContainer>
              An ecosystem for Social media Influencers and Brands
          </HeroSubHeaderContainer>
          <ButtonContainer>
              <ButtonStyle>
                  I'M AN INFLUENCER
              </ButtonStyle>
              <ButtonStyle>
                  I'M A BRAND
              </ButtonStyle>
          </ButtonContainer>
      </HeroTextContainer>
      <HeroImageContainer>
         
         <HeroImage src={heroImg}></HeroImage>
      </HeroImageContainer>
    </HeroContainer>
  );
}

export default Hero;
