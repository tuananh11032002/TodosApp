import { useState, useEffect, useCallback } from "react";
import { getTodosAPI, delTodosApi, addTodoAPI, editTodoAPI } from "./api/todos";

function App2() {
  const [database, setDatabase] = useState([]);
  console.log("data1 : ", database);
  useEffect(() => {
    fetchData();
    console.log("data2: ", database);
  }, [database]);

  const fetchData = async () => {
    const data = await getTodosAPI();
    setDatabase(data);
  };
  return <div>hello</div>;
}

export default App2;
