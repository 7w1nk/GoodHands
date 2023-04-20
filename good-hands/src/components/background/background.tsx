import React, { CSSProperties, useEffect, useRef, useState } from "react";
import Paw from "../../img/PawBG.svg";
import PawTransperant from "../../img/PawBGtransperant.svg";

const BackgroundPow = () => {
    type SizeOfBlock = {
        height: number;
        width: number;
    };

    const sizeBG = useRef(null);
    useEffect(() => {
        if (sizeBG.current)
            setDimensions({
                height: sizeBG.current["clientHeight"],
                width: sizeBG.current["clientWidth"],
            });
    }, []);

    const [dimensions, setDimensions] = useState<SizeOfBlock>({
        height: 0,
        width: 0,
    });

    const ImageLeftTopTransperant = () => {
        const Style: CSSProperties = {
            position: "absolute",
            top: Math.floor((Math.random() * dimensions.height) / 7),
            left: Math.floor((Math.random() * dimensions.width) / 2 - 54),
            transform: `rotateZ(${Math.random() *
                360}deg) scale(${Math.random() * 0.5 + 1})`,
            zIndex: -999999,
        };
        return (
            <img src={PawTransperant} alt="/" style={Style} className="dfds" />
        );
    };

    const ImageRightTopTransperant = () => {
        const Style: CSSProperties = {
            position: "absolute",
            top: Math.floor((Math.random() * dimensions.height) / 7),
            left: Math.floor(
                (Math.random() * dimensions.width) / 2 +
                    dimensions.width / 2 -
                    54
            ),
            transform: `rotateZ(${Math.random() *
                360}deg) scale(${Math.random() * 0.5 + 1})`,
            zIndex: -999999,
        };
        return (
            <img src={PawTransperant} alt="/" style={Style} className="dfds" />
        );
    };

    const ImageLeftTop = () => {
        const Style: CSSProperties = {
            position: "absolute",
            top: Math.floor((Math.random() * dimensions.height) / 2),
            left: Math.floor((Math.random() * dimensions.width) / 2 - 54),
            transform: `rotateZ(${Math.random() *
                360}deg) scale(${Math.random() * 0.5 + 1})`,
            zIndex: -999999,
        };
        return <img src={Paw} alt="/" style={Style} />;
    };
    const ImageRightTop = () => {
        const Style: CSSProperties = {
            position: "absolute",
            top: Math.floor((Math.random() * dimensions.height) / 2),
            left: Math.floor(
                (Math.random() * dimensions.width) / 2 +
                    dimensions.width / 2 -
                    54
            ),
            transform: `rotateZ(${Math.random() *
                360}deg) scale(${Math.random() * 0.5 + 1})`,
            zIndex: -999999,
        };
        return <img src={Paw} alt="/" style={Style} />;
    };
    const ImageLeftBot = () => {
        const Style: CSSProperties = {
            position: "absolute",
            top: Math.floor(
                (Math.random() * dimensions.height) / 2 + dimensions.height / 2
            ),
            left: Math.floor((Math.random() * dimensions.width) / 2 - 54),
            transform: `rotateZ(${Math.random() *
                360}deg) scale(${Math.random() * 0.5 + 1}) `,
            zIndex: -999999,
        };
        return <img src={Paw} alt="/" style={Style} />;
    };
    const ImageRightBot = () => {
        const Style: CSSProperties = {
            position: "absolute",
            top: Math.floor(
                (Math.random() * dimensions.height) / 2 + dimensions.height / 2
            ),
            left: Math.floor(
                (Math.random() * dimensions.width) / 2 +
                    dimensions.width / 2 -
                    54
            ),
            transform: `rotateZ(${Math.random() *
                360}deg) scale(${Math.random() * 0.5 + 1})`,
            zIndex: -999999,
        };
        return <img src={Paw} alt="/" style={Style} />;
    };

    const ImageLeftBotTransperant = () => {
        const Style: CSSProperties = {
            position: "absolute",
            top: Math.floor(
                (Math.random() * dimensions.height) / 2 + dimensions.height / 2
            ),
            left: Math.floor((Math.random() * dimensions.width) / 2 - 54),
            transform: `rotateZ(${Math.random() *
                360}deg) scale(${Math.random() * 0.5 + 1}) `,
            zIndex: -999999,
        };
        return <img src={PawTransperant} alt="/" style={Style} />;
    };
    const ImageRightBotTransperant = () => {
        const Style: CSSProperties = {
            position: "absolute",
            top: Math.floor(
                (Math.random() * dimensions.height) / 2 + dimensions.height / 2
            ),
            left: Math.floor(
                (Math.random() * dimensions.width) / 2 +
                    dimensions.width / 2 -
                    54
            ),
            transform: `rotateZ(${Math.random() *
                360}deg) scale(${Math.random() * 0.5 + 1})`,
            zIndex: -999999,
        };
        return <img src={PawTransperant} alt="/" style={Style} />;
    };
    return (
        <div ref={sizeBG} className="background">
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
