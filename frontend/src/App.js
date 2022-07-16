import React , { useState, useEffect } from 'react'
import './App.css';
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import{Container,Row,Col,Card} from 'react-bootstrap'

import axios from 'axios'


function App() {
  const [ todos, setTodos ] = useState([])
  const getTodos =async() => {
    try{
      const response = await axios.get('http://localhost:8000/api/v1/todo/')
      const { data } =response
      setTodos(data)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(() =>{
    getTodos()
  },[])

  const addTodo =async newTodo =>{
    try{
      console.log(newTodo)
      await axios.post('http://localhost:8000/api/v1/todo/',newTodo)
      getTodos()
      console.log(err)
      
    }
    catch(err){
      console.log(err)

    }
  }
  return (

    <div className='wrapper'>
      <Container>
        <Row className='justify-content-center pt-5'>
          <Col>
            <Card className='p-5'>
              <h1>My Todos</h1>
              <AddTodo/>
              {todos.map((todo, index)=>(
                <Todo  key={index} id={todo.id } title={todo.title} description={todo.description}/>
              ))}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App