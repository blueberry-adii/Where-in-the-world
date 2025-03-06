import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import "./countryDetails.css";
import CountryDetailsShimmer from "./countryDetailsShimmer";

export default function countryDetails() {
  document.body.style.overflowY = "scroll";
  const params = useParams();
  const { state } = useLocation();
  const countryName = params.country.toLowerCase();
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  document.title = countryData ? countryData.name : "";
  document.querySelector("link[rel='icon']").href = countryData
    ? countryData.flag
    : "";

  function setData(data) {
    setCountryData({
      name: data.name.common,
      flag: data.flags.svg,
      nativeName: data.name.nativeName
        ? Object.values(data.name.nativeName)[0].common
        : "No Native Name",
      population: data.population.toLocaleString(),
      region: data.region,
      capital: data.capital ? data.capital.join(", ") : "No capital",
      subregion: data.subregion ? data.subregion : "No sub region",
      topLevelDomain: data.tld,
      currencies: data.currencies
        ? Object.values(data.currencies)[0].name
        : "No currency",
      languages: data.languages
        ? Object.values(data.languages).join(", ")
        : "No languages",
      borders: [],
    });

    if (!data.borders) {
      data.borders = [];
    }

    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderDetails]) => borderDetails.name.common);
      })
    ).then((borders) => {
      setCountryData((prev) => ({ ...prev, borders }));
    });
  }

  useEffect(() => {
    // if(state) {
    //   setData(state);
    //   return;
    // }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return (
      <>
        <div className="eror">
          <h2>&nbsp;&nbsp; 404 Page not found</h2>
        </div>
        <div className="country-details-container">
          <main>
            <a className="back-button" onClick={() => history.back()}>
              <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
            </a>
          </main>
        </div>
      </>
    );
  } else {
    return countryData === null ? (
      <>
        {window.scrollTo(0, 0)}
        <div className="country-details-container">
          <main>
            <a className="back-button" onClick={() => history.back()}>
              <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
            </a>
            <CountryDetailsShimmer></CountryDetailsShimmer>
          </main>
        </div>
      </>
    ) : (
      <>
        {window.scrollTo(0, 0)}
        <div className="country-details-container">
          <main>
            <a className="back-button" onClick={() => history.back()}>
              <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
            </a>
            <div className="country-details">
              <img src={countryData.flag} alt={countryData.name}></img>
              <div className="details-text-container">
                <h1>{countryData.name}</h1>
                <div className="t3">
                  <div className="details-text t1">
                    <p>
                      <b>Native Name: </b>
                      {countryData.nativeName}
                    </p>
                    <p>
                      <b>Population: </b>
                      {countryData.population}
                    </p>
                    <p>
                      <b>Region: </b>
                      {countryData.region}
                    </p>
                    <p>
                      <b>Capital: </b>
                      {countryData.capital}
                    </p>
                    <p>
                      <b>Sub Region: </b>
                      {countryData.subregion}
                    </p>
                  </div>
                  <div className="details-text t2">
                    <p>
                      <b>Top Level Domain: </b>
                      {countryData.topLevelDomain}
                    </p>
                    <p>
                      <b>Currencies: </b>
                      {countryData.currencies}
                    </p>
                    <p>
                      <b>Languages: </b>
                      {countryData.languages}
                    </p>
                  </div>
                </div>
                <div className="border-countries">
                  <p>
                    <b>Border Countries: </b>
                    {countryData.borders.length === 0
                      ? "No Border Countries"
                      : countryData.borders.map((border) => (
                          <Link key={border} to={"/" + border}>
                            {border}
                          </Link>
                        ))}
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
        {window.scrollTo(0, 0)}
      </>
    );
  }
}
