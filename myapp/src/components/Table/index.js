import TableRow from "../TableRow";
import "./index.css";

const Table = (props) => {
  const { data, onDel, updateCard } = props;

  const renderCheck = () => <input type="checkbox" />;

  const renderTable = () => (
    <table className="table">
      <thead className="table-heading">
        <tr>
          <th>{renderCheck()}</th>
          <th className="expand">All Airports</th>
          <th>Country</th>
          <th>Code</th>
          <th>Terminals</th>
        </tr>
      </thead>
      <tbody>
        {data.map((eachRow) => (
          <TableRow
            updateCard={updateCard}
            rowDetails={eachRow}
            onDel={onDel}
            key={eachRow.id}
          />
        ))}
      </tbody>
    </table>
  );

  return renderTable();
};

export default Table;
