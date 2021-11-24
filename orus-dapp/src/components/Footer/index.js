import React from 'react';
import { FaDiscord, FaTwitter, FaReddit, FaInstagram } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons,  SocialIconLink } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Index</FooterLinkTitle>
                            <FooterLink to='/signin'>About</FooterLink>
                            <FooterLink to='/signin'>Rarities</FooterLink>
                            <FooterLink to='/signin'>Services</FooterLink>
                            <FooterLink to='/signin'>Roadmap</FooterLink>                 
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Community</FooterLinkTitle>
                            <FooterLink to='/signin'>Discord</FooterLink>
                            <FooterLink to='/signin'>Twitter</FooterLink>
                            <FooterLink to='/signin'>Reddit</FooterLink>
                            <FooterLink to='/signin'>Instagram</FooterLink>                    
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Markets</FooterLinkTitle>
                            <FooterLink to='/signin'>Artentic.nft</FooterLink> 
                            <FooterLink to='/signin'>Solanart.io</FooterLink>
                            <FooterLink to='/signin'>Margiceden.io</FooterLink>
                            <FooterLink to='/signin'>Opensea.io</FooterLink>                  
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Governance</FooterLinkTitle>
                            <FooterLink to='/signin'>Terms</FooterLink>
                            <FooterLink to='/signin'>Privacy</FooterLink>
                            <FooterLink to='/signin'>Charity</FooterLink>
                            <FooterLink to='/signin'>Solana</FooterLink>                 
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            orus
                        </SocialLogo>
                        <WebsiteRights>orus © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.discord.com/" target="@0friendsclub" aria-label="Discord">
                                <FaDiscord />
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com/" target="@0friendsclub" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="//www.reddit.com/" target="_blank" aria-label="Reddit">
                                <FaReddit />
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>       
        </FooterContainer>
    );
};

export default Footer;
