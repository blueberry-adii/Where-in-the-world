import { Link } from "react-router-dom";

export default function Card({ name, flag, population, region, capital, country }) {
  return (
    <>
      <Link className="country-card a" to={"/" + name} state={country}>
        <img src={flag} alt={name}></img>
        <div className="card-text">
          <h3>{name}</h3>
          <p>
            <b>Population:</b> {population.toLocaleString()}
          </p>
          <p>
            <b>Region:</b> {region}
          </p>
          <p>
            <b>Capital:</b> {capital ? capital.join(', ') : "No capital"}
          </p>
        </div>
      </Link>
    </>
  );
}
