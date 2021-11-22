import React from 'react';
import { HeroContainer, HeroBg, VideoBg } from './HeroElements';
import Video from '../../videos/video.mp4';

function HeroSection() {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autplay loop muted src={Video} type='video/mp4' />
            </HeroBg>
        </HeroContainer>
    );
};

export default HeroSection;
