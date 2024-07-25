import { data } from "../Carusel/data";
import { useState } from "react";
import "../Cards.css";

export function Cards() {
  const [words, setWords] = useState(data);

  const removeWord = (id) => {
    let newWords = words.filter((word) => word.id !== id);
    setWords(newWords);
  };

  return (
    <div>
      <h1>{words.length} cлов учебного модуля</h1>
      <div className="main">
        {words.map((word) => {
          const { id, english, transcription, russian } = word;
          return (
            <div className="card">
              <div className="card__main">
                <p className="word">{english}</p>
                <p className="trans">{transcription}</p>
              </div>

              <button className="btn" onClick={() => setWords(russian)}>
                Проверить
              </button>

              <button className="btn-remove" onClick={() => removeWord(id)}>
                Удалить
              </button>
            </div>
          );
        })}
      </div>
      <button className="btn-del" onClick={() => setWords([])}>
        Удалить все
      </button>
    </div>
  );
}
