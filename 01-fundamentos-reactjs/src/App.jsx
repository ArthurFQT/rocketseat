import { Post } from "./components/Post";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.warpper}>
        <Sidebar />
        <main>
          <Post
            author="Arthur F"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />

          <Post author="Filipe Q." content="Um novo poste legal" />
        </main>
      </div>
    </>
  );
}
