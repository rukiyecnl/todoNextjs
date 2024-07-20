"use client"
import { useState } from "react";
import { TodoContext } from "./context";

export default function TodoProvider({children}) {
    const [todos, setTodos] = useState([]);
    return (
        <TodoContext.Provider value={{todos, setTodos}}>{children}</TodoContext.Provider>
    )
}