import React from 'react';
import './InspirationStackedHero.css';
import { ReactComponent as Logo } from '../../assets/logo-light.svg';

export default function InspirationStackedHero() {
  return (
    <section className="inspo-hero">
      <div className="inspo-hero__container">
        {/* Headline Block */}
        <div className="inspo-hero__headline-block">
          <h1 className="inspo-hero__headline">
            <span className="inspo-hero__headline-bold">Building Communities</span><br />
            <span className="inspo-hero__headline-regular">one project at a Time</span>
          </h1>
        </div>
        {/* Large Logo Block */}
        <div className="inspo-hero__large-logo-block">
          <Logo className="inspo-hero__logo-large" />
        </div>
        {/* Paragraph Block */}
        <div className="inspo-hero__paragraph-block">
          <p className="inspo-hero__paragraph">
            National Waqf works to build infrastructure for communities. Every project we invest in is thoroughly researched and developed with the intention and aim of bringing maximum benefit to people, sustainably, for many years. We do this through a way of working that has been carefully developed and designed to create excellent ROSI (Return On Social Investment).
          </p>
        </div>
      </div>
    </section>
  );
}
