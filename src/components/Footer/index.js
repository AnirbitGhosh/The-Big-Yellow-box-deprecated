import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import{
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLinkR,
    FooterLinkS, 
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from './FooterElements';

import {
    FaFacebook,
    FaTwitter,
    FaYoutube, 
    FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLinkR to="/signin">Demo</FooterLinkR>
                            <FooterLinkR to="/signin">Testimonials</FooterLinkR>
                            <FooterLinkR to="/signin">Careers</FooterLinkR>
                            <FooterLinkR to="/signin">Team Members</FooterLinkR>
                            <FooterLinkR to="/signin">Terms of Service</FooterLinkR>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact us</FooterLinkTitle>
                            <FooterLinkR to="/signin">Contact</FooterLinkR>
                            <FooterLinkR to="/signin">Support</FooterLinkR>
                            <FooterLinkR to="/signin">Sponsorship</FooterLinkR>
                            <FooterLinkR to="/signin">Locations</FooterLinkR>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Sitemap</FooterLinkTitle>
                            <FooterLinkS to="about us">About us</FooterLinkS>
                            <FooterLinkS to="clients">Clients</FooterLinkS>
                            <FooterLinkS to="industry solutions">Industry solutions</FooterLinkS>
                            <FooterLinkS to="what we do">What we do</FooterLinkS>
                            <FooterLinkR to="/signin">Sign up</FooterLinkR>
                        </FooterLinkItems>
                        {/* <FooterLinkItems>
                            <FooterLinkTitle>Social media</FooterLinkTitle>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'none', color: 'white' }}>Twitter</a>
                            <a href="https://www.youtube.com" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'none', color: 'white' }}>Youtube</a>
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'none', color: 'white' }}>Facebook</a>
                            <a href="http://in.linkedin.com" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'none', color: 'white' }}>LinkedIn</a>
                        </FooterLinkItems> */}
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>The Big Yellow Box</SocialLogo>
                        <WebsiteRights>The Big Yellow Box © {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='//www.facebook.com/' target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='//twitter.com/' target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='//in.linkedin.com/' target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href='//www.youtube.com/' target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
