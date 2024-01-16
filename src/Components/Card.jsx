import "../App.css";

function Card({ title, abstract, date }) {
  return (
    <div className="card">
      <p>{title}</p>
      <p>{date}</p>
      <p>{abstract}</p>
    </div>
  );
}

export default Card;
