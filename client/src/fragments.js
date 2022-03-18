import {gql} from '@apollo/client';

export const TODO_FRAGMENT = gql`
  fragment TodoFragment on Todo {
    id
    text
    isComplete
  }
`

export const LIST_TODOS = gql`
  query ListTodos {
    todos {
      ...TodoFragment
    }
  }
  ${TODO_FRAGMENT}
`

export const UPDATE_TODO = gql`
  mutation UpdateTodo($id: ID!, $isComplete: Boolean!) {
    updateTodo(id: $id, isComplete: $isComplete) {
      ...TodoFragment
    }
  }
  ${TODO_FRAGMENT}
`

export const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) {
      ...TodoFragment
    }
  }
  ${TODO_FRAGMENT}
`

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
    }
  }
`

// update(cache, { data }) {
//   // responding to an add mutation
//   const { todos } = cache.readQuery({
//     query: LIST_TODOS
//   });

//   cache.writeQuery({
//     query: LIST_TODOS,
//     data: {
//       todos: [
//         ...todos,
//         data.addTodo
//       ]
//     }
//   })
// }

// update(cache, {data}) {
//   // responding to a delete mutation
//   const {todos} = cache.readQuery({
//     query: LIST_TODOS
//   });
  
//   cache.writeQuery({
//     query: LIST_TODOS,
//     data: {
//       todos: todos.filter(todo => todo.id !== data.deleteTodo.id)
//     }
//   })
// }