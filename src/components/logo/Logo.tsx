import React, { useState, useEffect } from 'react';
import logoImg from "../../assets/images/logo_1.png";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";

const LogoImage = styled.img<{ $pulseIntensity: number }>`
    width: 60px;
    height: 30px;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    
    transform: scale(${props => 1 + (props.$pulseIntensity * 0.25)}); /* До 1.25x */
    
    filter: drop-shadow(0 0 ${props => props.$pulseIntensity * 20}px rgba(77, 139, 255, ${props => props.$pulseIntensity * 0.8}))
    brightness(${props => 1 + (props.$pulseIntensity * 0.3)});

    &:hover {
        transform: scale(1.3) !important;
        filter: drop-shadow(0 0 25px rgba(77, 139, 255, 1)) brightness(1.4) !important;
    }
`;

export const Logo = () => {
    const [pulseIntensity, setPulseIntensity] = useState(0);

    useEffect(() => {
        let animationFrame: number;
        let startTime: number;
        let isAnimating = false;

        const animatePulse = () => {
            if (!isAnimating) return;

            const elapsed = Date.now() - startTime;
            const duration = 1000;

            if (elapsed < duration) {
                const progress = elapsed / duration;
                const intensity = Math.sin(progress * Math.PI); // От 0 до 1 и обратно
                setPulseIntensity(intensity);

                animationFrame = requestAnimationFrame(animatePulse);
            } else {
                setPulseIntensity(0);
                isAnimating = false;

                setTimeout(() => {
                    startTime = Date.now();
                    isAnimating = true;
                    animatePulse();
                }, 6000);
            }
        };

        setTimeout(() => {
            startTime = Date.now();
            isAnimating = true;
            animatePulse();
        }, 2000);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <a onClick={() => { scroll.scrollToTop() }} style={{ display: 'inline-block' }}>
            <LogoImage src={logoImg} alt="Logo" $pulseIntensity={pulseIntensity} />
        </a>
    );
};