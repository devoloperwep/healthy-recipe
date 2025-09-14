import React from "react";

function About() {
  return (
    <>
      {/* help */}
      <section className="help">
        <div className="container help__container">
          <div className="help__about">
            <span className="help__mission">Our mission</span>
            <h1 className="help__title title-text">
              Help more people cook nourishing meals, more often.
            </h1>
            <p className="desc-text help__description">
              Healthy Recipe Finder was created to prove that healthy eating can
              be convenient, affordable, and genuinely delicious.
            </p>
            <p className="desc-text help__parag">
              We showcase quick, whole-food dishes that anyone can master—no
              fancy equipment, no ultra-processed shortcuts—just honest
              ingredients and straightforward steps.
            </p>
          </div>
          <div className="help__image">
            <picture>
              <source
                media="(max-width: 500px)"
                srcSet="/images/image-about-our-mission-small.webp"
              />
              <img
                className="discover__image"
                src="/images/image-about-our-mission-large.webp"
                height={600}
                width="618"
              />
            </picture>
          </div>
        </div>
      </section>
      <div className="become"></div>
      {/* about */}
      <section className="about">
        <div className="container about__container">
          <h1 className="about__title title-text">Why we exist</h1>
          <ul className="about__list">
            <li className="about__item">
              <img
                src="/images/icon-bullet-point.svg"
                alt=""
                width="32"
                height="32"
              />
              <div className="about__item-texts">
                <h3 className="about__heading">Cut through the noise.</h3>
                <p className="about__description">
                  The internet is bursting with recipes, yet most busy cooks
                  still default to take-away or packaged foods. We curate a
                  tight collection of fool-proof dishes so you can skip the
                  scrolling and start cooking.
                </p>
              </div>
            </li>
            <li className="about__item">
              <img
                src="/images/icon-bullet-point.svg"
                alt=""
                width="32"
                height="32"
              />
              <div className="about__item-texts">
                <h3 className="about__heading">Empower home kitchens.</h3>
                <p className="about__description">
                  When you control what goes into your meals, you control how
                  you feel. Every recipe is built around unrefined ingredients
                  and ready in about half an hour of active prep.
                </p>
              </div>
            </li>
            <li className="about__item">
              <img
                src="/images/icon-bullet-point.svg"
                alt=""
                width="32"
                height="32"
              />
              <div className="about__item-texts">
                <h3 className="about__heading">Make healthy look good.</h3>
                <p className="about__description">
                  High-resolution imagery shows you exactly what success looks
                  like—because we eat with our eyes first, and confidence
                  matters.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default About;
