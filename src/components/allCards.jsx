import React from "react";
import Card from "./card";
import AllCardsShimmer from "./allCardsShimmer";

export default function AllCards({query, regionQuery}) {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((country) => {
        setData(country)
        console.log(country);
      });
  }, []);
  const regionCountries = (data.filter((country) => country.region.toLowerCase().includes(regionQuery)));
  const filteredCountries = regionCountries.filter((country) => country.name.common.toLowerCase().includes(query.toLowerCase()));
  return (
    <>
      {data.length === 0 ? <>{window.scrollTo(0, 0)}<AllCardsShimmer></AllCardsShimmer></> : <div className="countries-container">
        {window.scrollTo(0, 0)}
        {filteredCountries.map((country, i) => {
          return (
            <Card
              key={i}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital}
              country={country}
            ></Card>
          );
        })}
      </div>}
    </>
  );
}
