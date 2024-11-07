import React from "react";
import { Link } from "react-router-dom";  // Import Link from React Router
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

import logo from "../../images/logo.svg";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const Header = tw.header`
  flex justify-between items-center
  w-full  // Make sure the header takes the full width
  h-16 // Increase the height of the header (18rem or 288px in this case)
  bg-[#8CD6D1]  // Background color for DSS
  px-4 py-4  // Adjust padding if needed
`;

export const NavLinks = tw.div`flex`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw(Link)`
  text-gray-900 hover:bg-gray-700 hover:text-white
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent
  px-4 py-2  // Add padding to create space around the text
  inline-block  // Make the link behave like a block to extend the hover background
  rounded-lg
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-gray-700 text-white  // Use a neutral background
  hocus:bg-gray-900 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(Link)`
  ${tw`flex items-center font-black text-black border-b-0 text-xl! ml-0!`};  // Set text color to black

  img {
    ${tw`h-10 w-auto mr-3`}  // Set height to 10px, auto width to preserve aspect ratio
  }
`;


const defaultLogoLink = (
  <LogoLink to="/">
    <img src="/logo192.png" alt="DSS Logo" />
    DSS News
  </LogoLink>
);

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg bg-white`}  // Ensure the white background matches DSS
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }

  ${NavLink} {
    ${tw`text-gray-900 hover:bg-gray-700 hover:text-white`}  // Add hover effects for mobile as well
  }
`);

// Add new styled components for layout
const LeftSection = tw.div`flex items-center`;  // Holds the logo
const CenterSection = tw.div`flex items-center gap-x-4 ml-8`; // Centers and spaces nav links
const RightSection = tw.div`ml-auto flex items-center`; // Holds the Account button

// Update the DesktopNavLinks layout
export const DesktopNavLinks = tw.nav`
  hidden lg:flex items-center justify-between w-full
`;

export default ({ roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "lg" }) => {
  /*
   * This header component accepts an optionals "links" prop that specifies the links to render in the navbar.
   * This links props should be an array of "NavLinks" components which is exported from this file.
   * Each "NavLinks" component can contain any amount of "NavLink" component, also exported from this file.
   * This allows this Header to be multi column.
   * So If you pass only a single item in the array with only one NavLinks component as root, you will get 2 column header.
   * Left part will be LogoLink, and the right part will be the the NavLinks component you
   * supplied.
   * Similarly if you pass 2 items in the links array, then you will get 3 columns, the left will be "LogoLink", the center will be the first "NavLinks" component in the array and the right will be the second "NavLinks" component in the links array.
   * You can also choose to directly modify the links here by not passing any links from the parent component and
   * changing the defaultLinks variable below below.
   * If you manipulate links here, all the styling on the links is already done for you. If you pass links yourself though, you are responsible for styling the links or use the helper styled components that are defined here (NavLink)
   */
  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/saved">Saved</NavLink>
      <NavLink to="/history">History</NavLink>
      <NavLink to="/categories">Categories</NavLink>
    </NavLinks>
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];


  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <Header className={className || "header-light"}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {/* Logo on the Left */}
        <LeftSection>
          {logoLink}
        </LeftSection>

        {/* Centered Nav Links */}
        <CenterSection>
          {links}
        </CenterSection>

        {/* Account button on the Right */}
        <RightSection>
          <PrimaryLink css={roundedHeaderButton && tw`rounded-full`} to='/account'>Account</PrimaryLink>
        </RightSection>
      </DesktopNavLinks>

      <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
        {logoLink}
        <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
          {links}
        </MobileNavLinks>
        <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
          {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}
        </NavToggle>
      </MobileNavLinksContainer>
    </Header>
  );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  }
};
