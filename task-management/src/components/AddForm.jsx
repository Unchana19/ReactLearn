import "./AddForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function AddForm(props) {
  const { title, setTitle, addTask, editId } = props;
  return (
    <>
      <h2>Task Management</h2>
      <form onSubmit={addTask}>
        <div className="form-control">
          <input
            type="text"
            className="text-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="submit-button">
            {editId ? (
              <FontAwesomeIcon icon={faPenToSquare} />
            ) : (
              <FontAwesomeIcon icon={faPlus} />
            )}
          </button>
        </div>
      </form>
    </>
  );
}
