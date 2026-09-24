
import React from 'react';
import AboutHeader from './about/AboutHeader';
import MissionStatement from './about/MissionStatement';
import AIAgentTeams from './about/AIAgentTeams';
import HumanTeam from './about/HumanTeam';
import AIWorkforce from './about/AIWorkforce';
import WhyChooseUs from './about/WhyChooseUs';

const About = () => {
  return (
    <section id="about" className="py-20 relative" itemScope itemType="https://schema.org/AboutPage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Structured content for better SEO and LLM understanding */}
        <div itemScope itemType="https://schema.org/Organization" className="sr-only">
          <span itemProp="name">Mushbloom AI Automation Solutions</span>
          <p itemProp="description">
            No-code AI automation for SMEs and owner-run businesses. Mushbloom builds
            simple systems that improve lead handling, follow-up and repetitive admin.
          </p>
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <meta itemProp="addressCountry" content="UK" />
          </div>
          <meta itemProp="email" content="office@mushbloom.co.uk" />
          <meta itemProp="foundingDate" content="2014" />
          <div itemProp="serviceArea" itemScope itemType="https://schema.org/Place">
            <meta itemProp="name" content="Global" />
          </div>
          <div itemProp="makesOffer" itemScope itemType="https://schema.org/Offer">
            <meta itemProp="name" content="No-Code AI Workflow Implementation" />
            <meta itemProp="description" content="Simple AI systems for lead capture, follow-up, booking and business administration" />
            <div itemProp="priceSpecification" itemScope itemType="https://schema.org/PriceSpecification">
              <meta itemProp="priceCurrency" content="GBP" />
              <meta itemProp="valueAddedTaxIncluded" content="true" />
            </div>
          </div>
        </div>

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
