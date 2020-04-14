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
        <hr />

        <input
          type="text"
          className="summary-input"
          placeholder="Write a short summary about yourself..."
        ></input>

        <input
          className="address-input"
          placeholder="&#x2302; Enter address"
        ></input>
        <hr />
        <input
          className="phone-input"
          placeholder="&#x260F; Enter phone"
        ></input>
        <hr />
        <input
          className="email-input"
          placeholder="&#x2709; Enter email"
        ></input>
        <hr />

        <div className="profile">S K I L L S</div>
        <hr />
        <input
          className="summary-input"
          placeholder="Put your skillset here..."
        ></input>

        <div className="profile">E D U C A T I O N</div>
        <hr />
        <input
          className="summary-input"
          placeholder="Education info..."
        ></input>
      </div>
      <div className="column-right">
        <div className="right-side"> E X P E R I E N C E</div>
        <hr />
        <input
          className="summary-input"
          placeholder="Write about your most notable projects..."
        ></input>
        <input className="summary-input"></input>

        <div className="right-side">L A N G U A G E S</div>
        <hr />
        <input
          className="summary-input"
          placeholder="What languages do you speak and how proficient are you?"
        ></input>

        <div className="right-side">R E F E R E N C E S</div>
        <hr />
        <input
          className="summary-input"
          placeholder="State your references here..."
        ></input>
      </div>
      <div className="button-export"></div>
    </div>
  );
}
