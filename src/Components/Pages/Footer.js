import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer>
      <h2>Made by Jinmin</h2>
      <p>
        <ul>
          <a href="https://github.com/Alien-oyi">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/jimmy-dai-68a0ba270/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;