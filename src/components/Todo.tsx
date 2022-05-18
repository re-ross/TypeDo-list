import { ITodo } from "../@types";

type Props = {
  todo: ITodo;
  updateTodo: (id: number) => void;
};

export const Todo = ({ todo, updateTodo }: Props) => {
  const checkTodo: string = todo.status ? `line-through` : "";

  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className={checkTodo}>{todo.title}</h1>
        <span className={checkTodo}>{todo.description}</span>
      </div>
      <button
        onClick={() => updateTodo(todo.id)}
        className={todo.status ? `hide-button` : `Card--button`}
      >
        Complete
      </button>
    </div>
  );
};
