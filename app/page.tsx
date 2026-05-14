import Image from "next/image";
import "../lib/home.css"
import "../lib/utils.css"
import "../components/header.css"

export default function Home() {
  return (
    <div>
      <header className="header container">
        <nav>
          <ul className="header__menu">
            <li>
              <a className="header__link" href="">Home</a>
            </li>
            <li>
              <a className="header__link" href="#about">About</a>
            </li>
            <li>
              <a className="header__link" href="#resume">Resume</a>
            </li>
            <li>
              <a className="header__link" href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <article className="container">
        <h1>Daniel Boland</h1>
        <p> Hi, I am a Computer Science graduate from the University of Akron.
          I enjoy gridning out leetcodes, pulling all nighters trying to learn new frameworks
          and learning as much as possible about writing clean effecient code.
        </p>
        <button className="btn">My GitHub</button>
      </article>

    </div>
  );
}
