/* eslint-disable */
import React, { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "서면 초밥 맛집",
    "리액트 독학",
  ]);

  let [최고, 최고변경] = useState(0);
  let [modal, modal변경] = useState(true);
  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      {글제목.map(function (글, i) {
        return (
          <div className="list" key={i}>
            <h3
              onClick={() => {
                누른제목변경(i);
              }}
            >
              {글}{" "}
              <span
                onClick={() => {
                  최고변경(최고 + 1);
                }}
              >
                👨
              </span>{" "}
              {최고}{" "}
            </h3>
            <p>11월 1일 발행</p>
            <hr />
          </div>
        );
      })}

      <div className="publish">
        <input
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let arrayCopy = [...글제목];
            arrayCopy.unshift(입력값);
            글제목변경(arrayCopy);
          }}
        >
          저장
        </button>
      </div>

      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        열고닫기
      </button>

      {modal === true ? (
        <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날씨</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
