import { useEffect } from "react";
import { useAppStore } from "../store/store";
import Card from "../components/Card";
import Loader from "../components/Loader";

const Home = () => {

  const news = useAppStore(state => state.news);
  const loading = useAppStore(state => state.loading);
  const fetchNews = useAppStore(state => state.fetchNews);
  useEffect(() => {
    fetchNews("everything?q=latest");
  }, [fetchNews]);


  if(loading) return <Loader />

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {news.map(({ title, description, urlToImage, url, publishedAt }, idx) => (
        <Card key={idx} title={title} description={description} urlToImage={urlToImage} url={url} publishedAt={publishedAt} />
      ))}
    </div>
  );
}

export default Home;