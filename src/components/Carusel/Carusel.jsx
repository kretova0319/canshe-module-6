import { data } from "./data";
import { useState } from "react";

function Carusel() {
  const [word, setWord] = useState(0);
  const { id, english } = data[word];
  console.log(data[word]);

  const previous = () => {
    setWord((word) => {
      word--;
      if (word < 0) {
        word = data.length - 1;
      }
      return word;
    });
  };

  const next = () => {
    setWord((word) => {
      word++;
      if (word > data.length - 1) {
        word = 0;
      }
      return word;
    });
  };

  return (
    <div>
      <h2>Добавить слово в учебный модуль</h2>
      <div className="carusel-wrap">
        <button className="btn-carusel" onClick={previous}>
          Предыдущее
        </button>
        <div key={id} className="card-carusel">
          <div>
            <p className="word-carusel">{english}</p>
            <button className="btn-choose">Добавить</button>
          </div>
        </div>
        <button className="btn-carusel" onClick={next}>
          Следующее
        </button>
      </div>
    </div>
  );
}

export default Carusel;
