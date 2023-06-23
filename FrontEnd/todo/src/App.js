import { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import { AiOutlineDelete, AiOutlineFileDone } from "react-icons/ai";
import { FiEdit3 } from "react-icons/fi";
import { getTodosAPI, delTodosApi, addTodoAPI, editTodoAPI } from "./api/todos";

function App() {
  const [database, setDatabase] = useState([]);
  console.log("data1 : ", database);
  useEffect(() => {
    inputRef.current.focus();
    fetchData();
    console.log("data2: ", database);
  }, []);

  const fetchData = useCallback(async () => {
    const data = await getTodosAPI();
    setDatabase(data);
  }, []);
  const delTodo = async (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      await delTodosApi(id);
      fetchData();
    }
  };
  const addOrEditTodo = async (e) => {
    e.preventDefault();
    const value = e.target[0].value;
    const id = e.target[1].value;
    if (id) {
      if (value !== "") {
        await editTodoAPI({
          id: id,
          name: value,
        });
      }
    } else {
      console.log({ name: value });
      if (value !== "") {
        await addTodoAPI({
          name: value,
        });
      }
      fetchData();
    }
  };
  const inputRef = useRef();

  const handleDoubleClick = (data, index) => {
    // Kiểm tra xem index đã được highlight chưa
    if (data.isComplete) {
      // Nếu đã được highlight, loại bỏ index khỏi danh sách

      editTodoAPI({ ...data, isComplete: false });
      fetchData();
    } else {
      // Nếu chưa được highlight, thêm index vào danh sách
      editTodoAPI({ ...data, isComplete: true });
      fetchData();
    }
  };
  const [state, setState] = useState([]);
  return (
    <Container>
      <form onSubmit={addOrEditTodo}>
        <h2>Danh sách việc hôm nay không để ngày mai</h2>
        <div className="line"></div>
        <div className="list__task">
          <ul>
            {database?.map((data, i) => (
              <li
                key={i}
                onDoubleClick={() => handleDoubleClick(data, i)}
                className={data.isComplete ? "highlight" : ""}
              >
                {data.name}
                <div className="icons">
                  {state.length === 0 || state[0] !== i ? (
                    <FiEdit3
                      onClick={() => {
                        setState((prev) => {
                          const newState = [];
                          newState.push(i);
                          return newState;
                        });
                        document.getElementById("id").value = data.id;
                        document.getElementById("name").value = data.name;
                      }}
                    />
                  ) : (
                    <AiOutlineFileDone
                      onClick={() => {
                        setState((prev) => {
                          const newState = [...prev];
                          newState.pop(i);
                          return newState;
                        });
                        document.getElementById("id").value = "";
                        document.getElementById("name").value = "";
                      }}
                    />
                  )}
                  <AiOutlineDelete onClick={() => delTodo(data.id)} />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="add__task">
          <input
            type="text"
            placeholder="Hãy nhập nhiệm vụ cần làm"
            ref={inputRef}
            id="name"
          />
          <input
            type="text"
            placeholder="Hãy nhập nhiệm vụ cần làm"
            name="id"
            id="id"
          />
          <button type="submit">{state?.length < 1 ? "Add" : "Update"}</button>
        </div>
      </form>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    overflow: hidden;
    border: 0.1rem solid;
    height: 85vh;
    border-radius: 2rem;
    width: 30rem;
    box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 10% 10% 50% 10%;
    h2 {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .list__task {
      overflow-y: scroll;
      & ::-webkit-scrollbar {
        width: 0.1rem; /* Điều chỉnh chiều rộng của thanh cuộn */
      }
      ul {
        padding: 0;
        .highlight {
          text-decoration: line-through;
        }
        li {
          list-style-type: none;

          width: 80%;
          margin: 0;

          padding: 2rem;
          display: flex;
          justify-content: space-between;

          .icons {
            display: flex;
            gap: 1rem;
          }
          &:hover {
            background-color: #eeeee0;
            cursor: pointer;
          }
        }
      }
    }
    .line {
      margin: 2.5rem;
      gap: 1rem;
      height: 0.1rem;
      width: 25rem;
      background-color: black;
    }
    .add__task {
      padding: 2rem;
      margin: 2rem;
      button {
        margin-left: 1.5rem;
        height: 2rem;
        width: 3.5rem;
      }
      input {
        margin: 0;
        height: 2rem;
        width: 15rem;
        border-radius: 2rem;
      }
    }
  }
`;

export default App;
