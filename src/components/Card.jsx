const Cards = ({
  urlToImage = null,
  title,
  description,
  url,
  publishedAt = null
}) => (
  <div className="card bg-base-200 w-auto shadow-sm">
    <figure>
      <img
        className="w-full aspect-video object-cover"
        src={urlToImage}
        loading="lazy"
        alt={title} />
    </figure>
    <div className="card-body">
      <h2 className="card-title line-clamp-2">{title}</h2>
      <p className="line-clamp-2">{description}</p>
      <p className="text-green-400 line-clamp-3">{publishedAt}</p>
      <div className="card-actions justify-end">
        <a href={url} target="blank" className="btn btn-outline" >Read more</a>
      </div>
    </div>
  </div>
);

export default Cards;