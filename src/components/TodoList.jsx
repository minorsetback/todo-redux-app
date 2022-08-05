import { useSelector, useDispatch } from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFillTrashFill } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useEffect } from "react"

function TodoList() {
    const data = useSelector(state => state)
    const dispatch = useDispatch()
    const [todos, setTodos] = useState(data.todo.todo)

    useEffect(() => {
        setTodos(data.todo.todo)
    }, [data])

    const Sort = (id) => {
        if (id === 1) {
            setTodos(data.todo.todo)
        }
        if (id === 2) {
            setTodos(data.todo.todo.filter((item) => item.done === true))
        }
        if (id === 3) {
            setTodos(data.todo.todo.filter((item) => item.done === false))
        }
    }
    const doneTodoLenght = data.todo.todo.filter((item) => item.done === true).length
    const inProcessTodoLenght = data.todo.todo.filter((item) => item.done === false).length

    return (
        <ListGroup as="ol" numbered className='mt-5'>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Sort
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => { Sort(1) }}>All Todos</Dropdown.Item>
                    <Dropdown.Item onClick={() => { Sort(2) }}>Done Todos</Dropdown.Item>
                    <Dropdown.Item onClick={() => { Sort(3) }}>In Process</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <span className='mt-5'>Count done Todo: {doneTodoLenght}</span>
            <span className='mt-2 mb-5'>Count in process: {inProcessTodoLenght}</span>
            {todos.map((item, index) => {
                return (
                    <ListGroup.Item key={item.id}
                        as="li"
                        className={`d-flex justify-content-between align-items-start w-100 ${item.done ? "list-group-item-success" : "list-group-item-danger"}`}
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold" style={{ cursor: "pointer" }} onClick={() => { dispatch({ type: 'EDIT_STATUS_TODO', payload: item.id }) }}>{item.title}</div>
                            {item.description}
                        </div>
                        <BsFillTrashFill className='mt-2' style={{ cursor: "pointer" }} onClick={() => { dispatch({ type: 'DELETE_TODO', payload: item.id }) }} />
                    </ListGroup.Item>
                )
            })}

        </ListGroup>
    )
}
export default TodoList