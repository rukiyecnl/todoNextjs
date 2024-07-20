"use client"
import { Stack, Input, Button } from "@mui/material";
import useTodoContext from "../store/context";
import { useState } from "react";

export const InputArea = () => {
    const {todos, setTodos} = useTodoContext();

    console.log(todos);
    const handleForm = (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));

        const newTodo = {
          todo: formData.todo
        }

        setTodos([...todos, newTodo]);
        
        e.target.reset();
    }

    return (
        <form
          onSubmit={(e) => handleForm(e)}
        >
          <Stack spacing={1}>
            <Input placeholder="Add Todos" name="todo"  required />
            <Button type='submit'>Submit</Button>
          </Stack>
        </form>
      );
}