import './CarouselCard.css';

export default function CarouselCard({ title, date }) {
  return (
    <div className="carousel-card-container">
      <div className="carousel-card-graphContainer" />
      <div className="carousel-card-contents">
        <div className="carousel-card-title">
          <p>{title}</p>
        </div>
        <div className="carousel-card-date">
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}
