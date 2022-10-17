import React from "react";
import { useState } from "react";
import Button from "../../components/Button/Button";
import { introText } from "../../hooks/local_text_de";

function IntroSection() {
  const [width, setWidth] = useState(window.innerWidth);
  function resizeListener() {
    setWidth(window.innerWidth);
  }
  window.addEventListener("resize", resizeListener);

  return (
    <div id="intro">
      <div className="container">
        <div className="platform">
          <h2>
            {introText.title}
            <span className={width > 759 ? "textGreen" : ""}>
              {introText.titleGreen}
            </span>
          </h2>
          <h1>
            {introText.subTitle}
            <span className={width > 759 ? "textGreen" : ""}>
              {introText.subTitleGreen}
            </span>
          </h1>
          <Button
            label={introText.findButton}
            type={`btn-defult${width > 759 ? "" : "-invert"}`}
          />
        </div>
        <div className="btnList">
          <div className="btnWrapper">
            {introText.listButtons.map((item, index) => {
              return (
                <Button
                  label={item}
                  type={`btn-primary${width > 759 ? "" : "-invert"}`}
                  key={index}
                />
              );
            })}
          </div>
          <div className="searchWrapper">
            <div className="searchIcon textGreen">☌</div>
            <div className="searchText">{introText.searchText}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
