import React from 'react';

function Home({ homeDatas }) {
  return (
    <div class="bgi" >
      <div class="logo">
        <img src="./logo.png" alt="logo" />
      </div>
      <hr />
      <div class="header">
        <ul class="nav">
          {homeDatas.list.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
        <img class="menu-bar " src="./menu-bar.png" alt="menubar" />
        <hr />
      </div>
      <div class="text">
        <h4>{homeDatas.text1}</h4>
        <h1>{homeDatas.text2}</h1><br />
        <h5>{homeDatas.text3} <br /> {homeDatas.text4} <br />{homeDatas.text5}</h5><br />
        <button class="btn-1">{homeDatas.btn1}</button>
      </div>
    </div>
  );
}

export default Home;