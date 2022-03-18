import { useQuery } from "@apollo/client";
import {LIST_TODOS} from './fragments';
import TodoForm from "./TodoForm";
import DeleteButton from './DeleteButton';
import ToggleCompletion from './ToggleCompletion'

function App() {
  const { data, loading, error } = useQuery(LIST_TODOS)
  
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div style={{color: 'red'}}>{error.message}</div>
  }

  return (
    <>
      <TodoForm />
      <ul>
        {data.todos.map(todo => (
          <li key={todo.id}>
            <ToggleCompletion todo={todo} />
            {todo.text}
            <DeleteButton id={todo.id} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;