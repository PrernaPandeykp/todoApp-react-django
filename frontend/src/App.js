import React , { useState, useEffect } from 'react'
import './App.css';
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

import{Container,Row,Col,Card,Button} from 'react-bootstrap'
import {useNavigate,Route,Routes} from 'react-router-dom';

import Completed from './pages/Completed'

import axios from 'axios'


function App() {
  const [ todos, setTodos ] = useState([])
  // const [complete,setComplete] =useState([])
  // const [incomplete,setInComplete] =useState(incomplete)

  // const navigate = useNavigate();

  // const navigateToCompletedList = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/Completed');
  // };
  const getTodos =async() => {
    try{
      const response = await axios.get('http://localhost:8000/api/v1/todoApp/')
      const { data } =response
      setTodos(data)
      // const completeList = todos.filter( todo => todo.completed)
      // const incompleteList = todos.filter( todo => !todo.completed)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(() =>{
    getTodos()
  },[])


  // const getCompleted =async() => {
  //   try{
  //     const response = await axios.get('http://localhost:8000/api/v1/todoApp/')
  //     const { data } =response
  //     setComplete(data.completed)
  //     // const completeList = todos.filter( todo => todo.completed)
  //     // const incompleteList = todos.filter( todo => !todo.completed)
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  // }

  // useEffect(() =>{
  //   getCompleted()
  // },[])

  const getCompleted =async id =>{
    try{
      const todo = todos.filter( todo => todo.completed === true)
      await axios.post(`http://localhost:8000/api/v1/todoApp/${id}`,todo)
      getTodos()
    }
    catch(err){
      console.log(err)
    }
  }

  const addTodo = async newTodo =>{
    try{
      console.log(newTodo)
      await axios.post('http://localhost:8000/api/v1/todoApp/',newTodo)
      getTodos()
    }
    catch(err){
      console.log(err)
    }
  }


  const completeTodo = async id =>{
    try{
      const todo = todos.filter( todo => todo.id === id)[0]
      todo.completed = !todo.completed
      await axios.put(`http://localhost:8000/api/v1/todoApp/${id}/`,todo)
      getTodos()
    }
    catch(err){
      console.log(err)
    }
  }
  const addFavTodo = async id =>{
    try{
      const todo = todos.filter( todo => todo.id === id)[0]
      todo.fav = !todo.fav
      await axios.put(`http://localhost:8000/api/v1/todoApp/${id}/`,todo)
      getTodos()
    }
    catch(err){
      console.log(err)
    }
  }

  const editTodo = async todo =>{
    try{
      await axios.put(`http://localhost:8000/api/v1/todoApp/${todo.id}/`,todo)
      getTodos()
    }
    catch(err){
      console.log(err)
    }
  }

  const deleteTodo = async id =>{
    try{
        await axios.delete(`http://localhost:8000/api/v1/todoApp/${id}/`)
        getTodos()
    }
    catch(err){
      console.log(err)
    }
  }
  // const addFavourite = async id =>{

  // }
  return (

    <div className='wrapper'>
      <Container>
        <Row className='justify-content-center pt-5'>
          <Col>
            <Card className='p-5'>
              <h1>My Todos</h1>
              <Row>
                <Col md={4}>
                    <Button variant='info' onClick={navigateToCompletedList} >Complete</Button>{" "}
                    <Button variant='info'>Incomplete</Button>{" "}
                    <Button variant='info'>Favourites</Button>
                    <Routes>
                      <Route path="/Completed" element={<Completed />} />
                    </Routes>
                </Col>
              </Row>
              <AddTodo addTodo={addTodo}/>
              {todos.map((todo, index)=>(
                todo.completed  ? 
                  <strike><Todo  key={index} id={todo.id } title={todo.title} description={todo.description} completeTodo={completeTodo} editTodo={editTodo} deleteTodo={deleteTodo} addFavTodo={addFavTodo}/></strike>
                  :
                  <Todo  key={index} id={todo.id } title={todo.title} description= {todo.description} completeTodo={completeTodo}  editTodo={editTodo} deleteTodo={deleteTodo}/>
              )
              )} 
            </Card>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App