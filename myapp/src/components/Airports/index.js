import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Table from "../Table";
import AirportDetails from "../AirportDetails";

import "./index.css";

const rowData = [
  {
    id: uuidv4(),
    name: "Indra Gandhi International Airport",
    country: "India",
    code: "DEL",
    terminals: 3,
  },
  {
    id: uuidv4(),
    name: "Dubai International Airport",
    country: "India",
    code: "UAE",
    terminals: 5,
  },
  {
    id: uuidv4(),
    name: "Heathrow Airport",
    country: "India",
    code: "England",
    terminals: 6,
  },
  {
    id: uuidv4(),
    name: "Istanbul Airport",
    country: "India",
    code: "Turkey",
    terminals: 3,
  },
  {
    id: uuidv4(),
    name: "Rajiv Gandhi International Airport",
    country: "India",
    code: "Texas",
    terminals: 14,
  },
];

const Airports = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [code, setCode] = useState("");
  const [terminals, setTerminals] = useState(1);

  const [rows, setRow] = useState(rowData);
  const [isAddBtnClicked, setAddBtnClicked] = useState(false);
  const [isError, setError] = useState(false);
  const updateName = (e) => setName(e.target.value);
  const updateCountry = (e) => setCountry(e.target.value);
  const updateCode = (e) => setCode(e.target.value);
  const updateTerminal = (e) => setTerminals(e.target.value);

  const [card, setCard] = useState(false);
  const [cardDetails, setCardDetails] = useState({});

  const updateCard = (id) => {
    setCard(true);
    const row = rows.find((eachRow) => {
      if (eachRow.id === id) {
        return true;
      }
      return false;
    });

    setCardDetails(row);
  };

  const handleAddClick = () => setAddBtnClicked(!isAddBtnClicked);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name !== "" && country !== "" && code !== "" && terminals !== "") {
      const newRow = {
        id: uuidv4(),
        name: name,
        country: country,
        code: code,
        terminals: terminals,
      };
      setRow([...rows, newRow]);
      setName("");
      setCountry("");
      setCode("");
      setTerminals(1);
      handleAddClick();
      setError(false);
    } else {
      setError(true);
    }
  };

  const renderBar = () => (
    <div className="add-container">
      <h2 className="airports-heading">Airports</h2>
      <button onClick={setAddBtnClicked} className="add-btn">
        +Add new
      </button>
    </div>
  );

  const onDelete = (id) => {
    setRow(rows.filter((eachRow) => eachRow.id !== id));
  };

  const modal = () => (
    <div className="modal-container">
      <div className="modal">
        <h4 className="modal-heading">Add New Airport</h4>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Airport Name</label>
            <input
              onChange={updateName}
              placeholder="Enter Airport Name"
              type="text"
            />
          </div>
          <div className="input-container">
            <label>Country</label>
            <input
              value={country}
              onChange={updateCountry}
              placeholder="Enter Country Name"
              type="text"
            />
          </div>
          <div className="input-container">
            <label>Code</label>
            <input
              value={code}
              onChange={updateCode}
              placeholder="Enter Country Code"
              type="text"
            />
          </div>
          <div className="input-container">
            <label>Terminals</label>
            <input
              value={terminals}
              onChange={updateTerminal}
              placeholder="Enter Terminal Count"
              type="number"
            />
          </div>
          {isError && <p className="error">Check the input fields</p>}
          <div className="buttons-container">
            <button onClick={handleAddClick} type="button" className="close">
              Close
            </button>
            <button className="submit" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const renderTableDetails = () => (
    <div className="airports-container">
      {renderBar()}
      <Table updateCard={updateCard} data={rows} onDel={onDelete} />
      {isAddBtnClicked && modal()}
    </div>
  );

  const renderCard = () => <AirportDetails singleRowDetails={cardDetails} />;

  return card ? renderCard() : renderTableDetails();
};

export default Airports;
