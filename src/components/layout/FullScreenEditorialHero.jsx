import React from 'react';
import './FullScreenEditorialHero.css';
// TODO: Replace with actual logo import
// import LogoIcon from '../../assets/national-waqf-logo.svg';

export default function FullScreenEditorialHero() {
  return (
    <section className="fs-editorial-hero">
      <div className="fs-editorial-hero__container">
        {/* Left Content Column */}
        <div className="fs-editorial-hero__left">
          <div className="fs-editorial-hero__brandmark">
            <div className="fs-editorial-hero__logo">
              {/* Replace with <img src={LogoIcon} alt="National Waqf Logo" /> */}
              <span className="fs-editorial-hero__logo-placeholder">Logo</span>
            </div>
            <span className="fs-editorial-hero__brandtext">NATIONALWAQF</span>
          </div>
          <h1 className="fs-editorial-hero__headline">
            Building Communities one project at a Time
          </h1>
          <p className="fs-editorial-hero__body">
            National Waqf works to build infrastructure for communities. Every project we invest in is thoroughly researched and developed with the intention and aim of bringing maximum benefit to people, sustainably, for many years. We do this through a way of working that has been carefully developed and designed to create excellent ROSI (Return On Social Investment).
          </p>
        </div>
        {/* Right Visual Column */}
        <div className="fs-editorial-hero__right">
          <div className="fs-editorial-hero__card fs-editorial-hero__card--1">
            <span className="fs-editorial-hero__card-subtext">NATIONAL WAQF</span>
            <div className="fs-editorial-hero__card-logo">Logo</div>
          </div>
          <div className="fs-editorial-hero__card fs-editorial-hero__card--2">
            <span className="fs-editorial-hero__card-maintext">nationalwaqf.org</span>
            <span className="fs-editorial-hero__card-subline">Building communities sustainably</span>
          </div>
        </div>
      </div>
    </section>
  );
}
