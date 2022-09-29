import React, { useState, useEffect } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { Card } from "react-bootstrap";

import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [complete, setComplete] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  const getTodos = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/todoApp/");
      const { data } = response;
      setTodos(data);
      setComplete(data.filter((todo) => todo.completed).length);
      setIncomplete(data.filter((todo) => !todo.completed).length);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const addTodo = async (newTodo) => {
    try {
      console.log(newTodo);
      await axios.post("http://localhost:8000/api/v1/todoApp/", newTodo);
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };

  const completeTodo = async (id) => {
    try {
      const todo = todos.filter((todo) => todo.id === id)[0];
      todo.completed = !todo.completed;
      await axios.put(`http://localhost:8000/api/v1/todoApp/${id}/`, todo);
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };
  const addFavTodo = async (id) => {
    try {
      const todo = todos.filter((todo) => todo.id === id)[0];
      todo.fav = !todo.fav;
      await axios.put(`http://localhost:8000/api/v1/todoApp/${id}/`, todo);
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };

  const editTodo = async (todo) => {
    try {
      await axios.put(`http://localhost:8000/api/v1/todoApp/${todo.id}/`, todo);
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/todoApp/${id}/`);
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };

  const [radio, setRadio] = useState(1);
  function handleClick(e) {
    console.log(radio);
  }

  function handleChange(e) {
    const { nodeName, value } = e.target;
    if (nodeName === "INPUT") {
      setRadio(value);
    }
  }
  return (
    <div className="container mx-auto">
      <div className="d-flex flex-column flex-lg-row pt-3 justify-content-between">
        <div className="col-12 col-lg-4 mb-5 mb-lg-0">
          <Card className="border-0" style={{ backgroundColor: "whitesmoke" }}>
            <Card.Img
              className="rounded-circle "
              style={{ width: "80%", marginInline: "auto" }}
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSni_HAqtFjBgvZ91DWIzmLKmTsJAUbIwtrNA&usqp=CAU"
            />
            <AddTodo addTodo={addTodo} />
          </Card>
        </div>
        <div className="col-12 col-lg-7">
          <div className="radio-div flex-wrap" onChange={handleChange}>
            <div className="me-2 mb-2">
              <input
                type="radio"
                className="radio-input"
                value={1}
                name="priority"
                id="all-todo"
                onChange={(e) => setRadio(1)}
              />
              <label
                htmlFor="all-todo"
                className={`btn ${
                  radio === 1 ? "btn-primary" : "btn-outline-primary"
                }`}
              >
                All Tasks({todos.length})
              </label>
            </div>
            <div className="me-2 mb-2">
              <input
                type="radio"
                value={2}
                className="radio-input"
                name="priority"
                id="completed-todo"
                onChange={(e) => setRadio(2)}
              />
              <label
                htmlFor="completed-todo"
                className={`btn ${
                  radio === 2 ? "btn-success" : "btn-outline-success"
                }`}
              >
                Completed ({complete})
              </label>
            </div>
            <div className="mb-2">
              <input
                type="radio"
                value={3}
                className="radio-input"
                name="priority"
                id="incomplete-todo"
                onChange={(e) => setRadio(3)}
                checked={radio === 3}
              />
              <label
                htmlFor="incomplete-todo"
                className={`btn ${
                  radio === 3 ? "btn-warning" : "btn-outline-warning"
                }`}
              >
                Pending ({incomplete})
              </label>
            </div>
          </div>
          <div className="pt-3">
            {(() => {
              if (radio == 1) {
                return (
                  <div>
                    <h1>All Tasks</h1>

                    {todos.map((todo, index) =>
                      todo.completed ? (
                        <strike>
                          <Todo
                            todoData={todo}
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            description={todo.description}
                            completeTodo={completeTodo}
                            editTodo={editTodo}
                            deleteTodo={deleteTodo}
                            addFavTodo={addFavTodo}
                          />
                        </strike>
                      ) : (
                        <Todo
                          key={todo.id}
                          id={todo.id}
                          title={todo.title}
                          description={todo.description}
                          completeTodo={completeTodo}
                          editTodo={editTodo}
                          deleteTodo={deleteTodo}
                        />
                      )
                    )}
                  </div>
                );
              } else if (radio == 2) {
                return (
                  <div>
                    <h1>Completed</h1>

                    {todos.map((todo, index) =>
                      todo.completed ? (
                        <strike>
                          <Todo
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            description={todo.description}
                            completeTodo={completeTodo}
                            editTodo={editTodo}
                            deleteTodo={deleteTodo}
                            addFavTodo={addFavTodo}
                          />
                        </strike>
                      ) : (
                        ""
                      )
                    )}
                  </div>
                );
              } else {
                return (
                  <div>
                    <h1>Pending</h1>
                    {todos.map((todo, index) =>
                      !todo.completed ? (
                        <Todo
                          key={todo.id}
                          id={todo.id}
                          title={todo.title}
                          description={todo.description}
                          completeTodo={completeTodo}
                          editTodo={editTodo}
                          deleteTodo={deleteTodo}
                          addFavTodo={addFavTodo}
                        />
                      ) : (
                        ""
                      )
                    )}
                  </div>
                );
              }
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
