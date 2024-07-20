"use client"
import * as React from 'react';
import { List, ListItem, ListItemButton, IconButton, Add, Delete } from '@mui/material';
import useTodoContext from '../store/context';

export default function Todos() {
    const {todos} = useTodoContext();
  return (
    <List marker={"decimal"}  sx={{ maxWidth: 300}}>
        {todos.map((todo, index) => {
            return (
                <ListItem marker="circle" key={index} >
                    {todo.todo}
                </ListItem>
            )
        })}

    </List>
  );
}
