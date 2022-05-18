import Todos from "./containers/Todos";
import { ThemeProvider, TodoProvider } from "./context";
import { ThemeWrapper, AddTodo } from "./components";
import "./styles.css";

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
