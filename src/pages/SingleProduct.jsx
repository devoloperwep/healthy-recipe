import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function SingleProduct() {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    "https://json-api.uz/api/project/recipes/recipes/" + id
  );
  const {
    data: prodData,
    isPending: prodPending,
    error: prodError,
  } = useFetch("https://json-api.uz/api/project/recipes/recipes?limit=3");
  if (error) {
    return <div className="error">{error}</div>;
  }
  if (isPending) {
    return <div className="loading single__loading">Loading...</div>;
  }
  return (
    <>
      {/* only */}
      {data && (
        <section className="only">
          <div className="container">
            <p className="only__well">
              <span className="only__recipes">Recipes / </span> Mediterranean
              Chickpea Salad
            </p>
          </div>
          <div className="only__container container">
            <picture>
              <source
                media="(max-width: 500px)"
                srcSet={"." + data.image.small}
              />
              <img
                className="only__image"
                src={"." + data.image.large}
                width="580"
                height="580"
              />
            </picture>
            <div className="only__about">
              <h1 className="only__title title-text">{data.title}</h1>
              <p className="only__overview">{data.overview}</p>
              <div className="product__list-servic only__servic">
                <p>
                  <img src="/images/user.svg" alt="" width="20" height="20" />
                  Servings: {data.servings}
                </p>
                <p>
                  <img src="/images/Timer.svg" width="20" height="20" alt="" />
                  Prep: {data.prepMinutes}
                </p>
                <p>
                  <img src="/images/Food3.svg" alt="" width="20" height="20" />
                  Cook: {data.cookMinutes}
                </p>
              </div>
              <h3 className="only__ingredients"> Ingredients:</h3>
              <ul className="about__list only__list">
                {data.ingredients.map((item) => {
                  return (
                    <li className="about__item only__item">
                      <img
                        src="/images/icon-bullet-point.svg"
                        alt=""
                        width="24"
                        height="24"
                      />
                      <p className="about__item-texts">{item}</p>
                    </li>
                  );
                })}
              </ul>
              <h3 className="only__ingredients">Instructions:</h3>
              <ul className="about__list only__list">
                {data.instructions.map((item) => {
                  return (
                    <li className="about__item only__item">
                      <img
                        src="/images/icon-bullet-point.svg"
                        alt=""
                        width="24"
                        height="24"
                      />
                      <p className="about__item-texts">{item}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      )}
      <div className="become"></div>
      {/* more */}
      <section className="more">
        <div className="container more__container">
          <h3 className="more__title">More recipes</h3>
          <ul className="products__list">
            {prodData &&
              prodData.data.map((product) => {
                return (
                  <li key={product.id} className="product__item">
                    <picture>
                      <source
                        media="(max-width: 500px)"
                        srcSet={"." + product.image.small}
                      />
                      <img
                        className="product__list-img"
                        src={"." + product.image.large}
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
                    <Link
                      to={`/singleProduct/${product.id}`}
                      className="product__list-button"
                    >
                      View Recipe
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
      <div className="become"></div>
    </>
  );
}

export default SingleProduct;
