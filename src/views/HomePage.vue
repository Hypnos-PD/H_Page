<template>
  <div id="home-page-placer-one"></div>
  <div class="home-page-container">
    <div class="home-page-one">
      <img src="@/assets/pictures/hypnos.png" alt="hypnos" />
      <span class="home-page-one-description">
        <text>Hypnos </text>
        <span class="superscript-box">
          <p class="sub">Paradise</p>
          <p>P.</p>
        </span>
        <text>D.</text>
        <p id="home-page-one-description-p">
          不知所云之人。
          <br />
          欢迎来到图书室，请保持安静。
          <br />
          或许你能找到你所求之物。
          <br>
          祝你好运。
        </p>
      </span>
      <span class="home-page-one-chat home-page-one-underline-effect">
        Thou wolde not findan aniþing mid meninge on thes desolatus placea.
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style>
@font-face {
  font-family: "Latin Modern Roman 10";
  src: url(../assets/fonts/latinmodernroman10regular.woff);
}
@font-face {
  font-family: "FZ ShuSong";
  src: url(../assets/fonts/方正书宋简体.TTF) format("truetype");
}
@property --offset {
  syntax: "<length>";
  inherits: false;
  initial-value: 0;
}
#home-page-placer-one{
  display: block;
  position: relative;
  height: 10vh;
}

.home-page-container {
  display: flex;
  width: calc(100vw - 18px);
  height: 200vh;
}

.home-page-one {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100vh;
  max-width: calc(100vw - 18px);
  margin: 100px;
  font-family: "Latin Modern Roman 10";
  font-size: 50px;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #eee;
}
.home-page-one > img {
  grid-row: 1;
  grid-column: 1;
  justify-self: end;
  margin-right: 5vw;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  filter: drop-shadow(0 0 30px #00787069) drop-shadow(0 0 25px #95cdc920)
    drop-shadow(0 0 5px #39c5bc20) drop-shadow(0 0 15px #39c5bc20)
    drop-shadow(0 0 25px #315a5720) drop-shadow(0 0 10px #39c5bc20)
    drop-shadow(0 0 25px #1a423f20) drop-shadow(0 0 10px #39c5bb);
}
.home-page-one-description {
  position: relative;
  left: 2rem;
  top: 3rem;
  text-align: start;
  font-family: "Georgia", sans-serif;
  font-weight: 500;
  font-size: 35px;
  color: #39c5bb;
  white-space: nowrap;
}
.superscript-box {
  display: inline-flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;
  padding: 0;
  margin: 0.5rem;
  position: relative;
  top: -6rem;
}
.superscript-box :first-child {
  font-size: 1.5rem;
  position: relative;
  top: 3rem;
  color: #39c5bb00;
  transition: 0.5s ease-in-out;
}
.superscript-box:hover :first-child {
  color: #39c5bb;
}
#home-page-one-description-p {
  position: relative;
  top: -4rem;
  left:0rem;
  font-family: "FZ ShuSong", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: start;
}

.home-page-one-chat {
  grid-row: 2;
  grid-column: 1 / 3;
}
.home-page-one > span {
  text-underline-offset: 1px;
  text-decoration-line: underline;
  text-decoration-color: #000;
  transition: all 0.3s;
}
.home-page-one .home-page-one-underline-effect:hover {
  text-decoration-color: #00b5b5;
  text-underline-offset: 10px;
  color: #00b5b5;
}
</style>
