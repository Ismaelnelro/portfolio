import React from 'react'
import { AboutMe } from './3_aboutMe/AboutMe';
import { Curriculum } from './4_curriculum';
import { Skills } from './5_skills';
import { Portfolio } from './6_porfolio/Portfolio';

export const Main = () => {
   return (
      <>
         <AboutMe />
         <Curriculum />
         <Skills />
         <Portfolio />
      </>
   )
}