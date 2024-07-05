import "./index.css";

const AirportDetails = (props) => {
  const { singleRowDetails } = props;
  const { name } = singleRowDetails;

  const renderTabs = () => (
    <ul className="ul-container">
      <li className="list item-1">Terminals</li>
      <li className="list">Transport</li>
      <li className="list">Contact details</li>
    </ul>
  );

  const terminal = (no) => (
    <div className="terminal-container">
      <img
        className="term-img"
        src="https://res.cloudinary.com/dkm6rcqj9/image/upload/v1720176445/tnyyn1z1aeywrwrjesez.jpg"
        alt="terminal-1"
      />
      <div className="text-container">
        <div className="head-container">
          <h2 className="term-head">Terminal {no}</h2>
          <p>...</p>
        </div>
        <p className="text">Optional metadata should be two lines.</p>
      </div>
    </div>
  );

  const renderTerminals = () => (
    <div className="terminals-container">
      {terminal(1)}
      {terminal(2)}
      <button type="button" className="term-btn">
        +Add Terminal
      </button>
    </div>
  );

  const renderSelect = () => (
    <select>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  );

  const renderServices = () => (
    <div className="services-container">
      <h3 className="services-heading">Services</h3>
      <p className="side-head">Lost & found</p>
      <div className="services-input-container">
        <div className="all-input-container">
          <div className="ser-input-container">
            <label className="ser-label">Service Name</label>
            <input className="ser-input" type="text" value="Lost & found" />
          </div>
          <div className="ser-input-container">
            <label className="ser-label">Category</label>
            {renderSelect()}
          </div>
          <div className="ser-input-container">
            <label className="ser-label">Sub Category</label>
            {renderSelect()}
          </div>
          <button className="upload-btn">upload image</button>
          <button className="show-btn">Show images</button>
          <div className="ser-input-container">
            <label className="ser-label">Description</label>
            <textarea placeholder="type here"></textarea>
          </div>
        </div>
        <button type="button" className="save-btn">
          Save
        </button>
      </div>
      <p className="bottom-text">Lounge</p>
      <p className="bottom-text">Money Exchange</p>
    </div>
  );

  return (
    <div className="card-container">
      <p className="sub-heading">
        Airports &gt; <span className="sub-name">{name}</span>
      </p>
      <h1 className="name">{name}</h1>
      {renderTabs()}
      {renderTerminals()}
      {renderServices()}
    </div>
  );
};

export default AirportDetails;
