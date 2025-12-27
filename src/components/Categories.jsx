import { useAppStore } from "../store/store";

const Categories = () => {

  const fetchNews = useAppStore(state => state.fetchNews);
  const Categories = ["all", "business", "entertainment", "general", "health", "science", "sports", "technology"];

  const handleClick = (e) => {
    fetchNews(`everything?q=${e.target.innerText.toLowerCase()}`);
  }

  return (
    <div className="sticky top-0 z-99 flex gap-3 justify-start lg:justify-center items-center pt-3 pb-4 overflow-auto bg-base-100" style={{ scrollbarWidth: "none" }}>
      {
        Categories.map(category => (
          <button key={category} className="btn btn-accent btn-outline" onClick={handleClick}>
            {category.toUpperCase()}
          </button>
        ))
      }
    </div>
  );
};

export default Categories
