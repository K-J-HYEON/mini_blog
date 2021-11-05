/* eslint-disable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "서면 우동 맛집",
    "리액트 독학",
  ]);
  let [최고, 최고변경] = useState(0);

  let [modal, modal변경] = useState(false);

  let [누른제목, 누른제목변경] = useState(0);

  function 제목바꾸기() {
    let newArray = [...글제목];
    newArray[0] = "여자 코트 추천";
    글제목변경(["여자 코트 추천", "서면 우동 맛집", "리액트 독학"]);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>

      {글제목.map(function (글, i) {
        return (
          <div className="list">
            <h3
              onClick={() => {
                누른제목변경(i);
              }}
            >
              {" "}
              {글}{" "}
              <span
                onClick={() => {
                  최고변경(최고 + 1);
                }}
              >
                🤟
              </span>
              {최고}
            </h3>
            <p>2월 18일 발행</p>
            <hr />
          </div>
        );
      })}

      {/* <button
        onClick={() => {
          누른제목변경(0);
        }}
      >
        버튼1
      </button>
      <button
        onClick={() => {
          누른제목변경(1);
        }}
      >
        버튼2
      </button>
      <button
        onClick={() => {
          누른제목변경(2);
        }}
      >
        버튼3
      </button> */}

      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        버튼
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
      <h2> {props.글제목[props.누른제목]} </h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
