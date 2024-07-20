import Image from "next/image";
import styles from "./page.module.css";
import TodoProvider from "./store/provider";
import { InputArea } from "./components/InputArea";
import Todos from "./components/Todos";

export default function Home() {
  return (
    <TodoProvider>
      <main className={styles.main}>
        <InputArea />
        <Todos />
      </main>
    </TodoProvider>
  );
}
