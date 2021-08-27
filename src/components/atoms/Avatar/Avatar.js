import React from "react";
import { Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Avatar = ({ image }) => {
  console.log(image);

  return (
    <Image
      className="p-4"
      src={
        !image
          ? "https://react.semantic-ui.com/images/wireframe/square-image.png"
          : image
      }
      size="small"
      circular
    />
  );
};

export default Avatar;
