import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import "./index.css";

const TableRow = (props) => {
  const { rowDetails, onDel, updateCard } = props;
  const { id, name, country, code, terminals } = rowDetails;

  const getId = () => {
    onDel(id);
  };

  const renderCheck = () => <input type="checkbox" />;

  return (
    <tr onClick={() => updateCard(id)}>
      <td>{renderCheck()}</td>
      <td className="expand">{name}</td>
      <td>{country}</td>
      <td>{code}</td>
      <td>{terminals}</td>
      <td className="row-btn-container">
        <button className="row-btn" type="button">
          <MdOutlineEdit />
        </button>
        <button className="row-btn" onClick={getId} type="button">
          <RiDeleteBin5Fill />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
