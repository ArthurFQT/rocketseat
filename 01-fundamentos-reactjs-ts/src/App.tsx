import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import "./global.css";



const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/ArthurFQT.png",
      name: "Arthur Filipe",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-07-01 20:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/EnoqueBSF.png",
      name: "Enoque Belmiro",
      role: "Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-06-30 20:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.warpper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
              key={post.id}
              post={post}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
