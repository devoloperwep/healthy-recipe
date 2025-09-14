import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";

function Recipes() {
  const { data, isPending, error } = useFetch(
    "https://json-api.uz/api/project/recipes/recipes"
  );
  console.log(data);

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [cookOpen, setCookOpen] = useState(false);
  const [cookSelected, setCookSelected] = useState("");
  // select 1
  function select1() {
    setSelected("");
    setIsOpen(false);
  }
  // select 2
  function select2() {
    setCookOpen(false);
    setCookSelected("");
  }

  return (
    <>
      {/* hero */}
      <section className="hero">
        <div className="hero__container container">
          <h1 className="hero__title title-text">
            Explore our simple, healthy recipes
          </h1>
          <p className="hero__description">
            Discover eight quick, whole-food dishes that fit real-life schedules
            and taste amazing. Use the search bar to find a recipe by name or
            ingredient, or simply scroll the list and let something delicious
            catch your eye.
          </p>
        </div>
      </section>
      {/* products */}
      <section className="products">
        <div className="products__container container">
          <div className="dropdown__container">
            <div className="dropdown__wrapper">
              <div className="dropdown">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="dropdown-btn"
                >
                  {`${selected && selected + " minutes"}` || "Max Prep Time"}
                </button>
                {isOpen && (
                  <div className="dropdown-menu">
                    {[5, 10].map((time) => (
                      <label key={time} className="dropdown-option">
                        <input
                          className="custom-radio"
                          type="radio"
                          name="time"
                          value={time}
                          checked={selected === time}
                          onChange={() => setSelected(time)}
                        />
                        {`${time} minutes`}
                      </label>
                    ))}
                    <button onClick={select1} className="clear-btn">
                      Clear
                    </button>
                  </div>
                )}
              </div>
              <div className="dropdown">
                <button
                  onClick={() => setCookOpen(!cookOpen)}
                  className="dropdown-btn"
                >
                  {cookSelected !== ""
                    ? `${cookSelected} minutes`
                    : "Max Cook Time"}
                </button>
                {cookOpen && (
                  <div className="dropdown-menu">
                    {[0, 5, 10, 15, 20].map((time) => (
                      <label key={time} className="dropdown-option">
                        <input
                          className="custom-radio"
                          type="radio"
                          name="cook"
                          value={time}
                          checked={cookSelected === time}
                          onChange={() => setCookSelected(time)}
                        />
                        {`${time} minutes`}
                      </label>
                    ))}
                    <button onClick={select2} className="clear-btn">
                      Clear
                    </button>
                  </div>
                )}
              </div>
            </div>
            <input
              className="product__find-input"
              type="text"
              name="find"
              placeholder="Search by name or ingredient…"
            />
          </div>
          {isPending && <div className="loading">Loading...</div>}
          {error && <div className="error">{error}</div>}
          <ul className="products__list">
            {data &&
              data.data.map((product) => {
                return (
                  <li key={product.id} className="product__item">
                    <picture>
                      <source
                        media="(max-width: 500px)"
                        srcSet={product.image.small}
                      />
                      <img
                        className="product__list-img"
                        src={product.image.large}
                        width={360}
                        height={300}
                      />
                    </picture>
                    <h4 className="product__list-title">{product.title}</h4>
                    <p className="product__list-description">
                      {product.overview}
                    </p>
                    <div className="product__list-servic">
                      <p>
                        <img
                          src="/images/user.svg"
                          alt=""
                          width="20"
                          height="20"
                        />
                        Servings: {product.servings}
                      </p>
                      <p>
                        <img
                          src="/images/Timer.svg"
                          width="20"
                          height="20"
                          alt=""
                        />
                        Prep: {product.prepMinutes}
                      </p>
                      <p>
                        <img
                          src="/images/Food3.svg"
                          alt=""
                          width="20"
                          height="20"
                        />
                        Cook: {product.cookMinutes}
                      </p>
                    </div>
                    <button className="btn product__list-button">
                      View Recipe
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Recipes;
