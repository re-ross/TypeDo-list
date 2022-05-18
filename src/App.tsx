import TodoProvider from "./context/todoContext";
import ThemeProvider from "./context/themeContext";
import Todos from "./containers/Todos";
import "./styles.css";
import AddTodo from "./components/AddTodo";
import ThemeWrapper from "./components/ThemeWrapper";

const App = () => {
  return (
    <ThemeProvider>
      <TodoProvider>
        <ThemeWrapper>
          <main className="App">
            <h1>TypeDo List</h1>
            <AddTodo />
            <Todos />
          </main>
        </ThemeWrapper>
      </TodoProvider>
    </ThemeProvider>
  );
};

export default App;
