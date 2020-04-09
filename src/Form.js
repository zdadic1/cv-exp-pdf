import React from "react";
import "./Form.css";
import photo from "./photo.png";

export default function Form() {
  return (
    <div className="Form">
      <div className="column-left">
        <img className="slika" src={photo} alt="profilna" />
        <input className="name-input" placeholder="Enter name"></input>
        <input
          className="occupation-input"
          placeholder="Enter occupation"
        ></input>
        <div className="profile">P R O F I L E</div>
        <ColoredLine />

        <input
          type="text"
          className="summary-input"
          placeholder="Write a short summary about yourself"
        ></input>

        <input
          className="address-input"
          placeholder="&#x2302; Enter address"
        ></input>
        <ColoredLine />
        <input
          className="phone-input"
          placeholder="&#x260F; Enter phone"
        ></input>
        <ColoredLine />
        <input
          className="email-input"
          placeholder="&#x2709; Enter email"
        ></input>
        <ColoredLine />

        <div className="profile">S K I L L S</div>
        <ColoredLine />
        <input
          className="summary-input"
          placeholder="Write a short summary about yourself"
        ></input>

        <div className="profile">E D U C A T I O N</div>
        <ColoredLine />
        <input
          className="summary-input"
          placeholder="Write a short summary about yourself"
        ></input>
      </div>
      <div className="column-right">
        <div className="right-side"> E X P E R I E N C E</div>
        <ColoredLine />
        <input
          className="summary-input"
          placeholder="Write a short summary about yourself"
        ></input>
        <div className="right-side">L A N G U A G E S</div>
        <ColoredLine />
        <input
          className="summary-input"
          placeholder="Write a short summary about yourself"
        ></input>
        <div className="right-side">R E F E R E N C E S</div>
        <ColoredLine />
        <input
          className="summary-input"
          placeholder="Write a short summary about yourself"
        ></input>
      </div>
      {/*       </div>
       */}
      <div className="button-export"></div>
    </div>
  );
}
const ColoredLine = ({ color: black }) => <hr />;
