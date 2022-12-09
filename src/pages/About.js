import React from 'react';

function About({aboutDatas}) {
  return (
    <div className="page2">
    <div className="title">
      <h1>{aboutDatas.titleText1}</h1><br/>
      <h4>{aboutDatas.titleText2}</h4>
    </div>
    <div>
      <div className="list">
        {aboutDatas.btnLists.map((item) => (
          <button className={`${item.name === "All Menu" ?  "btn-2" : " " }`}>{item.name}</button>
        ))}
      </div>
      <div className="menu-list">
        <div className="flex-1">
          {aboutDatas.flex1Data.map((item) => (
          <div className={item.className1}>
            <div className={item.className2}>
              <h4>{item.menuName}</h4>
              <h4>&#x20B9;{item.price}</h4>
            </div><br/>
            <p>{item.paragraph}</p>
          </div>
          ))}
        </div>
        
        <div className="flex-2">
          {aboutDatas.flex2Data.map((item) => (
          <div className={item.className1}>
            <div className={item.className2}>
              <h4>{item.menuName}</h4>
              <h4>&#x20B9;{item.price}</h4>
            </div><br/>
            <p>{item.paragraph}</p>
          </div>
          ))}
        </div>  
      </div>
    </div>
  </div>
  );
}

export default About;