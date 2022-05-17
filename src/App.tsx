import TodoProvider from "./context/todoContext";
import Todos from "./containers/Todos";
import "./styles.css";
import AddTodo from "./components/AddTodo";

const App = () => {
  return (
    <TodoProvider>
      <main className="App">
        <h1>TypeDo List</h1>
        <AddTodo />
        <Todos />
      </main>
    </TodoProvider>
  );
};

export default App;
