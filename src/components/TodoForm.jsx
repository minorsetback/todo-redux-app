import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import React from 'react';

const schema = yup.object({
    title: yup.string().required().min(5),
}).required();

function TodoForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const dispatch = useDispatch()
    const onSubmit = data => dispatch({ type: 'SET_NEW_TODO', payload: data });

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
                <Form.Label>Tile</Form.Label>
                <Form.Control {...register("title")} type="text" placeholder="Title" />
                <Form.Text bg="primary" className="text-muted">
                    {errors.title?.message}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control {...register("description")} as="textarea" rows={3} placeholder="Description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check {...register("done")} type="checkbox" label="Done?" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add ToDo
            </Button>
        </Form>
    );
}

export default TodoForm