const Categories = () => {
  const Categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
  return (
    <div className="sticky top-0 z-99 flex gap-3 justify-start md:justify-center items-center py-3 overflow-auto bg-base-100" style={{scrollbarWidth: "none"}}>
      {
        Categories.map(category => (
          <button key={category} className="btn btn-accent btn-outline">
            {category.toUpperCase()}
          </button>
        ))
      }
    </div>
  );
};

export default Categories
