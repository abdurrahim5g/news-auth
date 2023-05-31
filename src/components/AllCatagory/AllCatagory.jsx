import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllCategory.css";

const AllCatagory = () => {
  const [category, setCategory] = useState();
  useEffect(() => {
    fetch("https://news-auth-server-f-rahim.vercel.app/categories/")
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
              <Link to={`/category/${c.id}`}>{c.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AllCatagory;
