import { useState } from "react";
import React from "react";
import {Button } from "react-bootstrap";
import styles from "./addTodo.module.css";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    addTodo({
      title,
      description,
      completed: false,
      favourite: false,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <div>
      <form>
        <div className={styles.row}>
          <div>
            <label htmlFor="title">Title</label>
          </div>
          <div>
            <input
              id="title"
              className="todoIn"
              type="text"
              placeholder="Enter Todo Title"
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <label htmlFor="desc">Description</label>
          </div>
          <div>
            <input
              id="desc"
              className="todoIn"
              type="text"
              placeholder="Enter Todo Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
      </form>
      <Button
        variant="primary"
        type="submit"
        onClick={addTodoHandler}
        className="my-2 mt-3 btn-block "
      >
        Add Todo
      </Button>
    </div>
  );
};

export default AddTodo;
