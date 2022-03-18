import {useMutation} from '@apollo/client'
import {UPDATE_TODO} from './fragments';

export default function ToggleCompletion({todo}) {
  const [updateTodo, {loading}] = useMutation(UPDATE_TODO, {
    onError: (error) => alert(error.message)
  })
  return (
    <input
      type="checkbox"
      disabled={loading}
      checked={todo.isComplete}
      onChange={(event) => updateTodo({
        variables: {
          id: todo.id,
          isComplete: event.target.checked
        }
      })}
    />
  )
}