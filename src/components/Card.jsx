const Cards = ({ coverUrl = null, title, desc, url = "#", date = null }) => (
  <div className="card bg-base-200 w-auto shadow-sm">
    <figure>
      <img
        src={coverUrl}
        alt={title} />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{desc}</p>
      <p className="text-green-400">{date}</p>
      <div className="card-actions justify-end">
        <a href={url} target="blank" className="btn btn-outline" >Read more</a>
      </div>
    </div>
  </div>
);

export default Cards;