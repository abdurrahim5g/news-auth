import { useLoaderData } from "react-router-dom";
import SingleNews from "../../components/SingleNews/SingleNews";

const News = () => {
  const singleNews = useLoaderData();

  return (
    <div className="news-single-page">
      <SingleNews isSingle={true} singleNews={singleNews}></SingleNews>
    </div>
  );
};

export default News;
