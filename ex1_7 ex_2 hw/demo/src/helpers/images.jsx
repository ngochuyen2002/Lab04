import React from "react";

const Images = (props) => {
  return (
    <div>
      <img
        src={props.src}
        className={props.className}
        alt=""
        allowFullScreen
        style={{ height: "70px", width: "70px" }}
      />
    </div>
  );
};

export default Images;
