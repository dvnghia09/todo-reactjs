import { useRef, useState, forwardRef, useImperativeHandle } from "react";
import { FaPlusCircle, FaArrowAltCircleUp } from "react-icons/fa";

const InputTodo = forwardRef(({ onPostData, onUpdateData }, ref) => {
  const [name, setName] = useState("");
  const [isBtn, setIsBtn] = useState(false);
  const [idUpdate, setIdUpdate] = useState("");

  const input = useRef();

  const valueEdit = (id, text) => {
    setName(text);
    setIsBtn(true);
    setIdUpdate(id);
    input.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      valueEdit: valueEdit,
    };
  });

  return (
    <>
      <div className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          ref={input}
        />
        {isBtn ? (
          // Btn update
          <button
            type="button"
            className="input-submit"
            onClick={() => {
              onUpdateData(idUpdate, name);
              setName("");
              input.current.focus();
              setIsBtn(false);
            }}
          >
            <FaArrowAltCircleUp
              style={{
                color: "#1ed707",
                fontSize: "20px",
                marginTop: "2px",
              }}
            />
          </button>
        ) : (
          // Btn add
          <button
            type="button"
            className="input-submit"
            onClick={() => {
              onPostData(name);
              setName("");
              input.current.focus();
            }}
          >
            <FaPlusCircle
              style={{
                color: "darkcyan",
                fontSize: "20px",
                marginTop: "2px",
              }}
            />
          </button>
        )}
      </div>
    </>
  );
});

export default InputTodo;
