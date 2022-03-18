import {useMutation} from '@apollo/client'
import {DELETE_TODO} from './fragments';

export default function DeleteButton({id}) {
  const [deleteTodo, {loading}] = useMutation(DELETE_TODO, {
    variables: {id},
    onError: (error) => alert(error.message)
  })
  return <button disabled={loading} onClick={deleteTodo}>Delete</button>
}