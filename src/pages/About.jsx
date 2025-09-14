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
      <div className="become"></div>
      <section className="about">
        <div className="container about__container">
          <h1 className="about__title title-text about__title-2">
            Our food philosophy
          </h1>
          <ul className="about__list">
            <li className="about__item">
              <img
                src="/images/icon-bullet-point.svg"
                alt=""
                width="32"
                height="32"
              />
              <div className="about__item-texts">
                <h3 className="about__heading">Whole ingredients first.</h3>
                <p className="about__description">
                  Fresh produce, grains, legumes, herbs, and quality fats form
                  the backbone of every recipe.
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
                <h3 className="about__heading">Flavor without compromise.</h3>
                <p className="about__description">
                  Spices, citrus, and natural sweetness replace excess salt,
                  sugar, and additives.
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
                <h3 className="about__heading">Respect for time.</h3>
                <p className="about__description">
                  Weeknight meals should slot into real schedules; weekend
                  cooking can be leisurely but never wasteful.
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
                <h3 className="about__heading">Sustainable choices.</h3>
                <p className="about__description">
                  Short ingredient lists cut down on food waste and carbon
                  footprint, while plant-forward dishes keep things
                  planet-friendly.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div className="become"></div>
      {/* family */}
      <section className="family">
        <div className="container family__container">
          <div className="family__about">
            <h1 className="family__title title-text">Beyond the plate</h1>
            <p className="family__description">
              We believe food is a catalyst for community and well-being. By
              sharing approachable recipes, we hope to:
            </p>
            <ul className="family__list">
              <li className="family__item">
                Encourage family dinners and social cooking.
              </li>
              <li className="family__item">
                Reduce reliance on single-use packaging and delivery waste.
              </li>
              <li className="family__item">
                Spark curiosity about seasonal produce and local agriculture.
              </li>
            </ul>
          </div>
          <picture>
            <source
              media="(max-width: 500px)"
              srcSet="/images/image-about-beyond-the-plate-small.webp"
            />
            <img
              className="family__img"
              src="/images/image-about-beyond-the-plate-large.webp"
              width="744"
              height="400"
            />
          </picture>
        </div>
      </section>
      {/* recipe */}
      <section className="recipe">
        <div className="container recipe__container">
          <div className="recipe__wrapper">
            <h1 className="recipes__title title-text">
              Ready to cook smarter?
            </h1>
            <p className="recipes__description">
              Hit the button, pick a recipe, and get dinner on the table—fast.
            </p>
            <button className="btn recipes__btn">Browse recipes</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
