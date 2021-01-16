import React from "react";
import axios from "axios";
import "./products.css";
import RecipeReviewCard from "./Card";
import CircularProgress from "@material-ui/core/CircularProgress";

function ProductComponent() {
  const [products, setProduct] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      console.log(result.data);
      const filtered = result.data
        .filter((item) => item.id % 2 == 1)
        .slice(0, 25);
      setProduct(filtered);
      console.log(filtered);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      // console.log(error.message);
    }
  };
  return (
    <div className="container">
      {products.map((item) => {
        const itemTitle = item.title.slice(0, 20);
        const itemBody = item.body.slice(0, 50);
        const itemId = item.id;
        return (
          <div className="card">
            <RecipeReviewCard title={itemTitle} body={itemBody} id={itemId} />
          </div>
        );
      })}
      <div style={{ margin: "auto" }}>
        {loading && <CircularProgress variant="determinate" value={75} />}
      </div>
    </div>
  );
}

export default ProductComponent;
