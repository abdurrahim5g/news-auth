import { useLoaderData } from "react-router-dom";
import SingleNews from "../../components/SingleNews/SingleNews";

const Category = () => {
  const categoryNews = useLoaderData();

  return (
    <div className="catagory-page">
      {categoryNews.length > 0 ? (
        categoryNews.map((singleNews) => (
          <SingleNews singleNews={singleNews} key={singleNews._id}></SingleNews>
        ))
      ) : (
        <h2 className="text-center py-5 px-2 bg-light">News not found</h2>
      )}
    </div>
  );
};

export default Category;
