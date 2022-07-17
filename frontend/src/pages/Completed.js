import React, { useEffect } from 'react'
import Todo from './components/Todo'
import{Container,Row,Col,Card} from 'react-bootstrap'
import axios from 'axios'

export const Completed = () => {
  const [ todos, setTodos ] = useState([])

  useEffect(()=>{
    getCompletedList()
    },[])

  let getCompletedList = async () => {
    try{
      const todo = todos.filter( todo => todo.completed === true)
      await axios.post(`http://localhost:8000/api/v1/todoApp/${id}`,todo)
      getCompletedList()
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
              <div>
              {todos.map((todo, index)=>(
                todo.completed  &&
                  <Todo  key={index} id={todo.id } title={todo.title} description={todo.description}   addFavTodo={addFavTodo}/>
              )
              )} 
              </div>
            </Card>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}
