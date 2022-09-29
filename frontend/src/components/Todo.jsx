import React, { useState } from "react";
import { Col, Button, Modal, Form } from "react-bootstrap";
import edit from "./image_svg/edit_svg.svg";
import del from "./image_svg/delete_svg.svg";
import styles from "./todo.module.css";

const Todo = ({
  id,
  title,
  description,
  completeTodo,
  deleteTodo,
  editTodo,
  todoData,
}) => {
  const [show, setShow] = useState(false);
  const [newtitle, setTitle] = useState(title);
  const [newdescription, setDescription] = useState(description);

  const handleClose = () => {
    setShow(false);
    setTitle(title);
    setDescription(description);
  };
  const handleShow = () => setShow(true);

  const editTodoHandler = (title, description) => {
    handleClose();
    const todo = {
      id,
      title,
      description,
    };
    editTodo(todo);

    setTitle(title);
    setDescription(description);
  };
  return (
    <>
      <div className="d-flex flex-row border-bottom pt-3">
        <Col md={1} className="pe-2 pe-lg-0">
          <Form>
            <Form.Check
              type="checkbox"
              checked={todoData?.completed}
              onChange={() => completeTodo(id)}
            />
          </Form>
        </Col>
        <Col>
          <h5>{title}</h5>
          <p>{description}</p>
        </Col>
        <Col md={2} className="d-flex me-0">
          <img
            src={edit}
            className={styles.svgImage}
            alt="SVG as an image"
            onClick={handleShow}
          ></img>
          <img
            src={del}
            className={`ms-2 ${styles.svgImage}`}
            alt="SVG as an image"
            onClick={() => deleteTodo(id)}
          ></img>
        </Col>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={newtitle}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={newdescription}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => editTodoHandler(newtitle, newdescription)}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Todo;
