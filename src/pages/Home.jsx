import React from "react";

function Home() {
  return (
    <>
      {/* discover */}
      <section className="discover">
        <div className="container discover-continer">
          <h1 className="discover__title">
            <span className="discover__title-mark">Healthy</span> meals, zero
            fuss
          </h1>
          <p className="discover__description">
            Discover eight quick, whole-food recipes that you can cook
            tonight—no processed junk, no guesswork.
          </p>
          <button className="btn discover__btn">Start exploring</button>
          <picture>
            <source
              media="(max-width: 500px)"
              srcSet="/images/image-home-hero-small.webp"
            />
            <img
              className="discover__image"
              src="/images/image-home-hero-large.webp"
              height={530}
            />
          </picture>
        </div>
      </section>
      {/* order */}
      <section className="order">
        <div className="container order__container">
          <h1 className="order__title">What you’ll get</h1>
          <ul className="order__list">
            <li className="order__item">
              <img
                className="order__logo"
                width={60}
                height={60}
                src="/images/Carrots.svg"
                alt=""
              />
              <h3 className="order__subtitle">Whole-food recipes</h3>
              <p className="order__desciption">
                Each dish uses everyday, unprocessed ingredients.
              </p>
            </li>
            <li className="order__item">
              <img
                className="order__logo"
                width={60}
                height={60}
                src="/images/Feature.svg"
                alt=""
              />
              <h3 className="order__subtitle">Whole-food recipes</h3>
              <p className="order__desciption">
                Each dish uses everyday, unprocessed ingredients.
              </p>
            </li>
            <li className="order__item">
              <img
                className="order__logo"
                width={60}
                height={60}
                src="/images/Search.svg"
                alt=""
              />
              <h3 className="order__subtitle">Whole-food recipes</h3>
              <p className="order__desciption">
                Each dish uses everyday, unprocessed ingredients.
              </p>
            </li>
          </ul>
        </div>
      </section>
      {/*   food */}
      <section className="food">
        <div className="container food__container">
          <div className="food__wrapper">
            <h2 className="title-text food__title">Built for real life</h2>
            <p className="food__about">
              Cooking shouldn’t be complicated. These recipes come in under{" "}
              <span className="food__about-mark">30 minutes</span> of active
              time, fit busy schedules, and taste good enough to repeat.
            </p>
            <p className="food__description">
              Whether you’re new to the kitchen or just need fresh ideas, we’ve
              got you covered.
            </p>
          </div>
          <picture>
            <source
              media="(max-width: 500px)"
              srcSet="/images/image-home-real-life-small.webp"
            />
            <img
              className="food__image"
              src="/images/image-home-real-life-large.webp"
              width={635}
              height={450}
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

export default Home;
