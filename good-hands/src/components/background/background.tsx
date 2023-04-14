import { CSSProperties, useRef, useState } from "react";
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

const ImageLeftBotTransperant = () => {
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
    return <img src={PawTransperant} alt="/" style={Style} />;
};
const ImageRightBotTransperant = () => {
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
    return <img src={PawTransperant} alt="/" style={Style} />;
};

const BackgroundPow = () => {
    const targetSize = useRef();
    const [dimensions, setDimensions] = useState({});

    let currentTimer = null;
    const RESET_TIMER = 100;

    const testDimensions = () => {
        if (targetSize.current) {
            setDimensions({ width: targetSize.current });
        }
    };
    return (
        <div ref={targetSize} className="background">
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

            <ImageLeftBotTransperant />
            <ImageLeftBotTransperant />
            <ImageLeftBotTransperant />

            <ImageRightBotTransperant />
            <ImageRightBotTransperant />
            <ImageRightBotTransperant />
        </div>
    );
};

export default BackgroundPow;
