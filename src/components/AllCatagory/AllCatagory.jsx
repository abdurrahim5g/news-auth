import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllCategory.css";

const AllCatagory = () => {
  const [category, setCategory] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/categories/")
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <>
      <h3>All Category {}</h3>
      <div className="category-links">
        <ul>
          {category?.map((c) => (
            <li key={c.id}>
              <Link to={`/catagory/${c.id}`}>{c.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AllCatagory;
