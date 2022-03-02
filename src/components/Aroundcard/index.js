import React from "react";
import "./index.css";

export default function AroundCards(props) {
  return (
    <>
      <div id="around-Main-Div">
        <div className="around-Div-Flex">
          <div id="around-Div">
            <div id="image-Zoom">
              <figure>
                <img id="around-Image" src={props.Img} />
              </figure>
            </div>
          </div>
        </div>
        <p id="around-Card-Text">{props.Text}</p>
      </div>
    </>
  );
}
