import React from "react";
import Card from "./card";
import AllCardsShimmer from "./allCardsShimmer";
import { data } from "react-router-dom";

export default function AllCards({ query, regionQuery }) {
  document.body.style.overflowY = "scroll";
  const [data1, setData1] = React.useState([]);
  const [data2, setData2] = React.useState([]);
  React.useEffect(() => {
    fetch("https://restcountries.com/v3.1/independent?status=true")
      .then((res) => res.json())
      .then((country) => {
        setData1(country);
      });
  }, []);
  React.useEffect(() => {
    fetch("https://restcountries.com/v3.1/independent?status=false")
      .then((res) => res.json())
      .then((country) => {
        setData2(country);
      });
  }, []);
  const data = [...data1, ...data2];
  const regionCountries = data.filter((country) =>
    country.region.toLowerCase().includes(regionQuery)
  );
  const filteredCountries = regionCountries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <>
      {data.length === 0 ? (
        <>
          {window.scrollTo(0, 0)}
          <AllCardsShimmer></AllCardsShimmer>
        </>
      ) : (
        <div className="countries-container">
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
        </div>
      )}
    </>
  );
}
