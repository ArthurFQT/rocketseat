import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommeetProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommeetProps) {
  function handleDeleteCmment() {
    onDeleteComment(content);
  }

  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.Comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/EnoqueBSF.png"
        alt=""
        onClick={() => alert("Hello Word")}
      />

      <div className={styles.CommentBox}>
        <div className={styles.CommentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Enoque Belmiro</strong>
              <time
                title="27 de Junho ás  18:12h"
                dateTime="2024-06-27 18:12:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteCmment} title="Deletar comentáio">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
