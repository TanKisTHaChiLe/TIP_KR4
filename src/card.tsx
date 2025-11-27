import "./card.css";

interface CardProps {
  id: number;
  name: string;
  image: string;
  description: string;
}

export const Card = ({ id, name, image, description }: CardProps) => {
  return (
    <article className="card">
      <img className="card-image" src={image} />
      <h3 className="card-title">{name}</h3>
      <p className="card-description">{description}</p>
    </article>
  );
};
