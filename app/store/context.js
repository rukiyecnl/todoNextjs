import { createContext, useContext } from "react";

export const TodoContext = createContext();

export default function useTodoContext() {
    const context = useContext(TodoContext);

    if (!context) {
        throw new Error("context could not found in the scope");
    }

    return context;
}