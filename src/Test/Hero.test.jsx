import React from 'react';

import {render,screen}from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
import HeroSec from "../landingPage/Home/HeroSec"

describe("HeroSec Component",()=>{
    test("render hero image",()=>{
        render(<HeroSec/>);
        const heroImage=screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/homeHero.png");

    })
})