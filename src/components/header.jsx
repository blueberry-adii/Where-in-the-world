import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {

  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('dark-mode')));

  if(isDark) {
    document.querySelector("body").classList.add("dark");
  }

  return (
    <>
      <header>
        <div>
          <h2 className="title">
            <Link className="a" href="/">
              Where in the World?
            </Link>
          </h2>
          <p className="dark-mode" onClick={() => {
            document.querySelector("body").classList.toggle("dark");
            setIsDark(!isDark);
            localStorage.setItem('dark-mode', !isDark);
          }}>
            <i className={`fa-solid fa-xl fa-${isDark? 'sun':'moon'}`}></i>&nbsp;&nbsp;{isDark? `Light Mode` : `Dark Mode`}
          </p>
        </div>
      </header>
      <Outlet></Outlet>
    </>
  );
}
