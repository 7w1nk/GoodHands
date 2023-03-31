import { CSSProperties } from "react";
import Paw from "../../img/PawBG.svg";
import PawTransperant from "../../img/PawBGtransperant.svg";

const ImageLeftTopTransperant = () => {
  const Style: CSSProperties = {
    position: "absolute",
    top: Math.floor((Math.random() * window.innerHeight) / 7),
    left: Math.floor((Math.random() * window.innerWidth) / 2 - 54),
    transform: `rotateZ(${Math.random() * 360}deg) scale(${
      Math.random() * 0.5 + 1
    })`,
    zIndex: -999999,
  };
  return <img src={PawTransperant} alt="/" style={Style} className="dfds" />;
};

const ImageRightTopTransperant = () => {
  const Style: CSSProperties = {
    position: "absolute",
    top: Math.floor((Math.random() * window.innerHeight) / 7),
    left: Math.floor(
      (Math.random() * window.innerWidth) / 2 + window.innerWidth / 2 - 54
    ),
    transform: `rotateZ(${Math.random() * 360}deg) scale(${
      Math.random() * 0.5 + 1
    })`,
    zIndex: -999999,
  };
  return <img src={PawTransperant} alt="/" style={Style} className="dfds" />;
};

const ImageLeftTop = () => {
  const Style: CSSProperties = {
    position: "absolute",
    top: Math.floor((Math.random() * window.innerHeight) / 2),
    left: Math.floor((Math.random() * window.innerWidth) / 2 - 54),
    transform: `rotateZ(${Math.random() * 360}deg) scale(${
      Math.random() * 0.5 + 1
    })`,
    zIndex: -999999,
  };
  return <img src={Paw} alt="/" style={Style} />;
};
const ImageRightTop = () => {
  const Style: CSSProperties = {
    position: "absolute",
    top: Math.floor((Math.random() * window.innerHeight) / 2),
    left: Math.floor(
      (Math.random() * window.innerWidth) / 2 + window.innerWidth / 2 - 54
    ),
    transform: `rotateZ(${Math.random() * 360}deg) scale(${
      Math.random() * 0.5 + 1
    })`,
    zIndex: -999999,
  };
  return <img src={Paw} alt="/" style={Style} />;
};
const ImageLeftBot = () => {
  const Style: CSSProperties = {
    position: "absolute",
    top: Math.floor(
      (Math.random() * window.innerHeight) / 2 + window.innerHeight / 2
    ),
    left: Math.floor((Math.random() * window.innerWidth) / 2 - 54),
    transform: `rotateZ(${Math.random() * 360}deg) scale(${
      Math.random() * 0.5 + 1
    }) `,
    zIndex: -999999,
  };
  return <img src={Paw} alt="/" style={Style} />;
};
const ImageRightBot = () => {
  const Style: CSSProperties = {
    position: "absolute",
    top: Math.floor(
      (Math.random() * window.innerHeight) / 2 + window.innerHeight / 2
    ),
    left: Math.floor(
      (Math.random() * window.innerWidth) / 2 + window.innerWidth / 2 - 54
    ),
    transform: `rotateZ(${Math.random() * 360}deg) scale(${
      Math.random() * 0.5 + 1
    })`,
    zIndex: -999999,
  };
  return <img src={Paw} alt="/" style={Style} />;
};

const BackgroundPow = () => {
  return (
    <div className="background">
      <ImageLeftTopTransperant />
      <ImageLeftTopTransperant />
      <ImageLeftTopTransperant />

      <ImageRightTopTransperant />
      <ImageRightTopTransperant />
      <ImageRightTopTransperant />

      <ImageLeftTop />
      <ImageLeftTop />
      <ImageLeftTop />

      <ImageRightTop />
      <ImageRightTop />
      <ImageRightTop />

      <ImageLeftBot />
      <ImageLeftBot />
      <ImageLeftBot />

      <ImageRightBot />
      <ImageRightBot />
      <ImageRightBot />
    </div>
  );
};

export default BackgroundPow;
