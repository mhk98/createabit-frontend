import Link from "next/link";
import { useEffect } from "react";

function DarkNavbar({ lightMode, mainBg, subBg, noStatic, curve }) {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector(".navbar");

    if (bodyScroll > 300) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");
  }

  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector(".dropdown-menu").classList.add("show");
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector(".dropdown-menu")
      .classList.remove("show");
  }

  function handleDropdownSideMouseMove(event) {
    event.currentTarget.querySelector(".dropdown-side").classList.add("show");
  }

  function handleDropdownSideMouseLeave(event) {
    event.currentTarget
      .querySelector(".dropdown-side")
      .classList.remove("show");
  }

  function toggleNavbar() {
    document.querySelector(".navbar .navbar-collapse").classList.toggle("show");
  }

  function toggleSearch() {
    let form = document.querySelector(".navbar .search-form");
    let closeBtn = document.querySelector(".search-form .close-search");

    form.classList.toggle("open");
    if (form.classList.contains("open")) closeBtn.style.display = "block";
    else closeBtn.style.display = "none";
  }

  return (
    <nav
      className={`navbar navbar-expand-lg ${curve ? "nav-crev" : ""} ${
        noStatic ? "" : "static"
      } ${mainBg ? "main-bg" : ""} ${subBg ? "sub-bg" : ""}`}
    >
      <div className="container">
        <Link className="logo icon-img-100" href="/dark/home-creative-agency">
          <img src="/light/assets/imgs/logo-light.png" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                // href={`/${lightMode ? "light" : "dark"}/home-creative-agency`}
                href="/dark/home-creative-agency"
              >
                <span className="rolling-text">Home</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                // href={`/${lightMode ? "light" : "dark"}/page-services`}
                href="/dark/page-services"
              >
                <span className="rolling-text">Services</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/dark/page-products">
                <span className="rolling-text">Products</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                href={`/${lightMode ? "light" : "dark"}/page-contact`}
              >
                <span className="rolling-text">Solution</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                href={`/${lightMode ? "light" : "dark"}/page-contact`}
              >
                <span className="rolling-text">Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/light/home-creative-agency/">
                <span className="rolling-text">Classic Mode</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default DarkNavbar;
