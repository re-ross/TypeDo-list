import { useContext, useState } from "react";
import { TodoContext } from "../context/todoContext";
import { TodoContextType, ITodo } from "../@types/todo";
import { FormEvent } from "../@types/event.types";

const AddTodo = () => {
  const { saveTodo } = useContext(TodoContext) as TodoContextType;
  const [formData, setFormData] = useState<ITodo | {}>();
  const handleForm = (e: FormEvent): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSave = (e: React.FormEvent, formData: ITodo | any) => {
    e.preventDefault();
    saveTodo(formData);
  };

  return (
    <form className="Form" onSubmit={(e) => handleSave(e, formData)}>
      <div>
        <div>
          <label htmlFor="name">Title</label>
          <input onChange={handleForm} type="text" id="title" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input onChange={handleForm} type="text" id="description" />
        </div>
      </div>
      <button disabled={formData === undefined ? true : false}>
        {" "}
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
