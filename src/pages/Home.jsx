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
              srcset="./src/assets/images/image-home-hero-small.webp"
            />
            <img
              className="discover__image"
              src="./src/assets/images/image-home-hero-large.webp"
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
                src="./src/assets/images/Carrots.svg"
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
                src="./src/assets/images/Feature.svg"
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
                src="./src/assets/images/Search.svg"
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
    </>
  );
}

export default Home;
