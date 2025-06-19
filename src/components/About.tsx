
import React from 'react';
import AboutHeader from './about/AboutHeader';
import MissionStatement from './about/MissionStatement';
import AIAgentTeams from './about/AIAgentTeams';
import HumanTeam from './about/HumanTeam';
import AIWorkforce from './about/AIWorkforce';
import WhyChooseUs from './about/WhyChooseUs';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutHeader />
        <MissionStatement />
        <AIAgentTeams />
        <HumanTeam />
        <AIWorkforce />
        <WhyChooseUs />
      </div>
    </section>
  );
};

export default About;
