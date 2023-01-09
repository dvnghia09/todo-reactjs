import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ data, onDeletData, onEditData, onUpdateStt }) => {
  return (
    <ul>
      {data.map((item) => {
        return (
          <TodoItem
            key={item.id}
            data={item}
            onDelete={onDeletData}
            onEdit={onEditData}
            onUpdateStatus={onUpdateStt}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
