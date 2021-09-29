import React, { useState } from "react";
import "./styles.css";

const musicDB = {
  EDM: [
    {
      name: "R3HAB",
      rating: "4/5",
      description:
        "Fadil El Ghoul, performing under the stage name R3hab, is a Moroccan Dutch DJ and record producer from Breda."
    },
    {
      name: "Illenium",
      rating: "3.5/5",
      description:
        "Nicholas D. Miller, known professionally as Illenium, is an American musician, DJ, and record producer."
    },
    {
      name: "Martin Garrix",
      rating: "5/5",
      description:
        "He was ranked number one on DJ Mag's Top 100 DJs list for three consecutive years: 2016, 2017, and 2018. His most known singles are 'Animals', 'In the Name of Love', and 'Scared to Be Lonely'. "
    }
  ],
  RythmAndBlue: [
    {
      name: "Weeknd",
      rating: "5/5",
      description:
        "Weeknd, is a Canadian singer, songwriter and record producer. One of my favourite album is After Hours."
    },
    {
      name: "Drake",
      rating: "4/5",
      description:
        "Drake Graham is a Canadian rapper, singer, songwriter, actor, producer, and entrepreneur. "
    },
    {
      name: "Rihanna",
      rating: "4/5",
      description:
        "Barbadian singer, actress, fashion designer, and businesswoman."
    }
  ],
  Rap: [
    {
      name: "Eminem",
      rating: "5/5",
      description:
        "Marshall Bruce Mathers III, known professionally as Eminem, is an American rapper, songwriter, and record producer. Eminem is among the best-selling music artists of all time, with estimated worldwide sales of over 220 million records."
    },
    {
      name: "Jay-z",
      rating: "4.5",
      description:
        "Shawn Corey Carter, known professionally as Jay-Z, is an American rapper, songwriter, record executive, businessman, and media proprietor. "
    },
    {
      name: "NF",
      rating: "3/5",
      description:
        "NF, is an American rapper, singer and songwriter. He has released two EPs, I'm Free, and a self-titled EP in 2014 with Capitol CMG."
    },
    {
      name: "Logic",
      rating: "3/5",
      description:
        "Logic, is an American rapper and record producer. He has released six studio albums and received two Grammy Award nominations."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("EDM");
  var musicDBarray = Object.keys(musicDB);

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>🎵 Music Genres</h1>
      <p>This is my recommended music genres along with artists.</p>
      <div className="container container-center">
        <div className="genre-buttons">
          {musicDBarray.map((genre) => (
            <button
              class="link primary-link"
              onClick={() => genreClickHandler(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
        <hr />
        <div>
          <ul>
            {musicDB[selectedGenre].map((music) => (
              <li className="list-item-inline" key={music.name}>
                {" "}
                <section className="section">
                  <div className="music-name">{music.name}</div>
                  <div className="music-rating">{music.rating}</div>
                  <div className="music-description">{music.description}</div>
                </section>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-head">Connect with me on</div>
        <ul className="social-links list-non-bullet">
          <li className="list-item-inline">
            <img
              className="footer-img"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg=="
            />
            <a class="link" href="https://github.com/GenxTheGamer">
              Github
            </a>
          </li>
          <li className="list-item-inline">
            <img
              className="footer-img"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tMTEgMTloLTN2LTExaDN2MTF6bS0xLjUtMTIuMjY4Yy0uOTY2IDAtMS43NS0uNzktMS43NS0xLjc2NHMuNzg0LTEuNzY0IDEuNzUtMS43NjQgMS43NS43OSAxLjc1IDEuNzY0LS43ODMgMS43NjQtMS43NSAxLjc2NHptMTMuNSAxMi4yNjhoLTN2LTUuNjA0YzAtMy4zNjgtNC0zLjExMy00IDB2NS42MDRoLTN2LTExaDN2MS43NjVjMS4zOTYtMi41ODYgNy0yLjc3NyA3IDIuNDc2djYuNzU5eiIvPjwvc3ZnPg=="
            />
            <a class="link" href="https://www.linkedin.com/in/vaibhavvyas32/">
              Linkedin
            </a>
          </li>
          <li className="list-item-inline">
            <img
              className="footer-img"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgNC41NTdjLS44ODMuMzkyLTEuODMyLjY1Ni0yLjgyOC43NzUgMS4wMTctLjYwOSAxLjc5OC0xLjU3NCAyLjE2NS0yLjcyNC0uOTUxLjU2NC0yLjAwNS45NzQtMy4xMjcgMS4xOTUtLjg5Ny0uOTU3LTIuMTc4LTEuNTU1LTMuNTk0LTEuNTU1LTMuMTc5IDAtNS41MTUgMi45NjYtNC43OTcgNi4wNDUtNC4wOTEtLjIwNS03LjcxOS0yLjE2NS0xMC4xNDgtNS4xNDQtMS4yOSAyLjIxMy0uNjY5IDUuMTA4IDEuNTIzIDYuNTc0LS44MDYtLjAyNi0xLjU2Ni0uMjQ3LTIuMjI5LS42MTYtLjA1NCAyLjI4MSAxLjU4MSA0LjQxNSAzLjk0OSA0Ljg5LS42OTMuMTg4LTEuNDUyLjIzMi0yLjIyNC4wODQuNjI2IDEuOTU2IDIuNDQ0IDMuMzc5IDQuNiAzLjQxOS0yLjA3IDEuNjIzLTQuNjc4IDIuMzQ4LTcuMjkgMi4wNCAyLjE3OSAxLjM5NyA0Ljc2OCAyLjIxMiA3LjU0OCAyLjIxMiA5LjE0MiAwIDE0LjMwNy03LjcyMSAxMy45OTUtMTQuNjQ2Ljk2Mi0uNjk1IDEuNzk3LTEuNTYyIDIuNDU3LTIuNTQ5eiIvPjwvc3ZnPg=="
            />
            <a class="link" href="https://twitter.com/genxthegamer">
              Twitter
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
