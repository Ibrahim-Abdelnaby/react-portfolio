import { useState } from "react";
import "./header.css";
import "../../../public/style.css";

export default function Header() {
  const [modal, setModal] = useState(false);

  return (
    <header className="flex">
      {/* Menu Icon */}
      <button className="mode flex menu"
        onClick={() => {
          setModal(true);
        }}
      >
        <span className="icon-menu"/>
      </button>

      <div />
        {/* Navigation menu */}
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
        {/* Light & Dark Mode Icons */}
      <button className="mode flex">
        <span className="icon-moon-o"/>
      </button>
        {/* Modal (Popup Menu) in small screens*/}
      {modal && (
        <div className="fixed">
          <ul className="modal">
            <li className="flex">
              <button className="mode flex cancel"
                onClick={() => {
                  setModal(false);
                }}
              >
                <span className="icon-cancel" />
              </button>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
