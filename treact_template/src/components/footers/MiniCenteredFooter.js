import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/logo192.png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import {ReactComponent as InstagramIcon} from "../../images/instagram-logo.svg";
import {ReactComponent as LinkedInIcon} from "../../images/linkedin-icon.svg";
import { Link as Router} from "react-router-dom";  // Import Link from React Router



const Container = tw(ContainerBase)`bg-[#8CD6D1] text-gray-900 -mx-8 -mb-8`; // Match header background and text color
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider text-gray-900`; // Match text color to header

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const Link = tw(Router)`
  border-b-2 border-transparent 
  hocus:text-gray-700 hocus:border-gray-700  // Darker hover color to match hover effect
  pb-1 transition duration-300 mt-2 mx-4
  text-gray-900  // Match initial link color to header
`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            <LogoText>DSS News</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link to="/">Home</Link>
            <Link to="/saved">Saved</Link>
            <Link to="/history">History</Link>
            <Link to="/account">Categories</Link>
            <Link to="/account">Account</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://www.facebook.com/dssberkeley">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/dssberkeley/">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/company/dssberkeley/">
              <LinkedInIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Data Science Society at Berkeley News
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
