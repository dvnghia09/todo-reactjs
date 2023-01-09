import { useState, useContext } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import styles from "./TodoItem.module.css";
import { ThemeContext } from "../App";

const TodoItem = ({ data, onDelete, onEdit, onUpdateStatus }) => {
  const [completed, setCompleted] = useState(data.status);
const test = useContext(ThemeContext)
  const completedStyle = {
    fontStyle: "italic",
    color: "#000",
    opacity: 0.7,
    textDecoration: "line-through",
  };

  return (
    <li className={styles.item}>
      <h3 style={completed ? completedStyle : null}>{data.name}</h3>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          value={completed}
          onChange={() => {
            setCompleted(!completed);
            onUpdateStatus(data.id, !completed);
          }}
        />
        <button
          type="button"
          onClick={() => {
            test(data.id);
          }}
        >
          <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
        </button>
        <button type="button">
          <FaEdit
            style={{ color: "blue", fontSize: "16px" }}
            onClick={() => {
              onEdit(data.id, data.name);
            }}
          />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
