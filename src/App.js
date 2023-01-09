import axios from "axios";
import { useEffect, useState, useRef, createContext } from "react";

import Header from "./component/Header";
import Input from "./component/Input";
import TodoList from "./component/TodoList";

export const ThemeContext = createContext()

function App() {
  const [todos, setTodos] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/todo");
      setTodos(response.data);
    } catch (erro) {
      console.log("errosss");
    }
  };

  const postData = async (name) => {
    await axios
      .post("http://127.0.0.1:8000/api/todo", { name: name, status: false })
      .catch((error) => console.log("Error: ", error));

    getData();
  };

  const deleteData = (dataId) => {
    axios
      .delete(`http://127.0.0.1:8000/api/todo/${dataId}`)
      .then(() => {
        // const filteredItems = todos.filter((item) => {
        //   return item.id !== dataId;
        // });
        // setTodos(filteredItems);
        getData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editData = (id, name) => {
    ref.current.valueEdit(id, name);
  };

  const updateData = (id, name) => {
    axios
      .put(`http://127.0.0.1:8000/api/todo/${id}`, { name: name })
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateStatus = (id, status) => {
    axios
      .put(`http://127.0.0.1:8000/api/todo-update/${id}`, { status: status })
      .then(() => {
        // getData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ref = useRef(null);

  useEffect(() => {
    getData();
  }, []);

  return (
    <ThemeContext.Provider value={deleteData}>
      <div className="App">
        <Header />
        <Input onPostData={postData} ref={ref} onUpdateData={updateData} />
        <TodoList
          data={todos}
          onDeletData={deleteData}
          onEditData={editData}
          onUpdateStt={updateStatus}
        />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
