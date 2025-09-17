import { Link } from "react-router-dom";

function ProductsItem({ data, selected, cookSelected, search }) {
  let filtered = data || [];
  if (search.trim()) {
    filtered = filtered.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    });
  }
  if (selected) {
    filtered = filtered.filter((item) => {
      console.log(item.prepMinutes);
      return item.prepMinutes >= selected;
    });
  }
  if (cookSelected) {
    filtered = filtered.filter((item) => {
      console.log(item.prepMinutes);
      return item.cookMinutes >= cookSelected;
    });
  }

  return (
    <ul className="products__list">
      {filtered.length > 0 ? (
        <>
          {filtered.map((product) => {
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
                    alt={product.title}
                  />
                </picture>
                <h4 className="product__list-title">{product.title}</h4>
                <p className="product__list-description">{product.overview}</p>
                <div className="product__list-servic">
                  <p>
                    <img src="/images/user.svg" alt="" width="20" height="20" />
                    Servings: {product.servings}
                  </p>
                  <p>
                    <img
                      src="/images/Timer.svg"
                      width="20"
                      height="20"
                      alt=""
                    />
                    Prep: {product.prepMinutes} min
                  </p>
                  <p>
                    <img
                      src="/images/Food3.svg"
                      alt=""
                      width="20"
                      height="20"
                    />
                    Cook: {product.cookMinutes} min
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
        </>
      ) : (
        <p className="no-result title-text">
          🍳 Try searching with different ingredients!
        </p>
      )}
    </ul>
  );
}

export default ProductsItem;
