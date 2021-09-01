import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from "../Sidebar/index";
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from "./HeroElements";
const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <HeroContainer>
                <Navbar toggle={toggle}/>    
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <HeroContent>
                    <HeroItems>
                        <HeroH1>Greatest Pizza ever</HeroH1>
                        <HeroP>Ready in 60 seconds</HeroP>
                        <HeroBtn>Place Order</HeroBtn>
                    </HeroItems>
                </HeroContent>
            </HeroContainer>            
        </div>
    )
}

export default Hero
