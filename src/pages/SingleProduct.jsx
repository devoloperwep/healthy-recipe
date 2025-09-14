import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function SingleProduct() {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    "https://json-api.uz/api/project/recipes/recipes/" + id
  );
  console.log(data);
  return (
    <>
      {/* only */}
      {data && (
        <section className="only">
          <div className="only__container container">
            <div className="only__view">
              <p className="only__well">
                <span className="only__recipes">Recipes / </span> Mediterranean
                Chickpea Salad
              </p>
              <picture>
                <source
                  media="(max-width: 500px)"
                  srcSet={"." + data.image.small}
                />
                <img
                  className="product__list-img"
                  src={"." + data.image.large}
                  width={580}
                  height={580}
                />
              </picture>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default SingleProduct;
