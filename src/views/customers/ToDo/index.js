/* src/App.js
import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { createToDo } from '../../../graphql/mutations'
import { listToDos } from '../../../graphql/queries'

const initialState = { name: '', description: '' }

const ToDo = () => {
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchTodos() {
    console.log('fetch todos...')
    try {
      console.log('trying...')
      const todoData = await API.graphql(graphqlOperation(listToDos))
      console.log('ok got data...')
      const todos = todoData.data.listToDos.items
      console.log('setting todos...')
      setTodos(todos)
      console.log('should be done...')
    } catch (err) { console.log('error fetching todos') }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return
      const todo = { ...formState }
      setTodos([...todos, todo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createToDo, {input: todo}))
      console.log('added')
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  return (
    <div style={styles.container}>
      <h2>Amplify Todos</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={forState.name}
        placeholder="Name"
      />
      <input
        onChange={event => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addTodo}>Create Todo</button>
      {
        todos.map((todo, index) => (
          <div key={todo.id ? todo.id : index} style={styles.todo}>
            <p style={styles.todoName}>{todo.name}</p>
            <p style={styles.todoDescription}>{todo.description}</p>
          </div>
        ))
      }
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default ToDo*/

/*import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation, query } from 'aws-amplify'
import { Button, toast, Notification } from 'components/ui'
import { createToDo } from 'graphql/mutations'
import { listToDos } from 'graphql/queries'

import awsExports from "aws-exports";
Amplify.configure(awsExports);

const initialState = { name: '', description: '' }

const openNotification = (type, message) => {
  toast.push(
      <Notification
          title={type.charAt(0).toUpperCase() + type.slice(1)}
          type={type}
      >
          {message}
      </Notification>
  )
}

const ToDo = () => {
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchTodos() {
    console.log('fetching...')
    try {
      console.log('here 1')
      const todoData = await API.graphql(graphqlOperation(listToDos))
      console.log('here 2')
      const todos = todoData.data.listToDos.items
      console.log('here 3')
      setTodos(todos)
      console.log('here 4')
      console.log(todoData)
      console.log(todos)
    } catch (err) {
      console.log('error fetching todos')
      console.log(err)
    }
    console.log('done fetching')
  }

  async function addTodo() {
    console.log('adding...')

    try {
      if (!formState.name || !formState.description) return
      const todo = { ...formState }
      setTodos([...todos, todo])
      setFormState(initialState)
      const success = await API.graphql(graphqlOperation(createToDo, {input: todo}))

      console.log('success:' + success)

      if (success) {
        openNotification('success','ToDo added')
      } else {
        openNotification('error','Unable to save record')
      }

    } catch (err) {
      openNotification('error','An unknown error occured')
    }
  }

  return (
    <div style={styles.container}>
      <h2>Amplify Todos</h2>
      <Button
      onClick={() => openNotification('success','this is toast message')}
      className="mr-2 mb-2"
    >
      success
    </Button>
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={event => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addTodo}>Create Todo</button>
      <div>
      {
        todos.map((todo, index) => (
          <div key={todo.id ? todo.id : index} style={styles.todo}>
            <p style={styles.todoName}>{todo.name}</p>
            <p style={styles.todoDescription}>{todo.description}</p>
          </div>
        ))
      }
      </div>
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default ToDo*/

import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { createToDo } from 'graphql/mutations'
import { listToDos } from 'graphql/queries'

const initialState = { name: '', description: '' }

const ToDo = () => {
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchTodos() {
    try {
      console.log('fetching...')
      const todoData = await API.graphql(graphqlOperation(listToDos))
      console.log('got data...')
      console.log(todoData)
      const todos = todoData.data.listToDos.items
      setTodos(todos)
    } catch (err) {
      console.log('error fetching todos')
      console.log(err)
   }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return
      const todo = { ...formState }
      setTodos([...todos, todo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createToDo, {input: todo}))
      console.log('added')
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  return (
    <div style={styles.container}>
      <h2>Amplify Todos</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={event => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addTodo}>Create Todo</button>
      {
        todos.map((todo, index) => (
          <div key={todo.id ? todo.id : index} style={styles.todo}>
            <p style={styles.todoName}>{todo.name}</p>
            <p style={styles.todoDescription}>{todo.description}</p>
          </div>
        ))
      }
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default ToDo