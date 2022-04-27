import react from "react";
import {useRef, useSpring, animated, useChain} from 'react-spring';


const WelcomeScreen = () => { 
    const logoRef = useRef();

    const logoStyle = useAnimation(logoRef);

    useChain([logoRef]);

    const useAnimation = (ref) => { 
        const spring = useSpring({
            from: { 
                opacity: 0,
            },
            to: { 
                opacity: 1,
            },
            ref: logoRef,
        });
        return spring;
    }

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-red-900 ">
            <animated.img style={logoStyle}>
            <img
                className="logo object-cover w-40 h-fit mb-4 cursor-pointer"
                src={require("../../../images/logo-dark.png")}
                alt="logo"
            />
            </animated.img>
            <animated.img style={logoStyle}>
            <img
                className="logo object-cover w-40 h-fit mb-4 cursor-pointer"
                src={require("../../../images/logo-dark.png")}
                alt="logo"
            />
            </animated.img>
            <animated.img style={logoStyle}>
            <img
                className="logo object-cover w-40 h-fit mb-4 cursor-pointer"
                src={require("../../../images/logo-dark.png")}
                alt="logo"
            />
            </animated.img>
        </div>
    )
}

export default WelcomeScreen;