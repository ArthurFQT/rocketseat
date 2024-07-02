import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.Comment}>
      <Avatar hasBorder={false} src="https://github.com/EnoqueBSF.png" />

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

            <button title="Deletar comentáio">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Arthur, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>03</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
