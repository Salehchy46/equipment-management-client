import React from 'react';
import { useLottie, useLottieInteractivity } from 'lottie-react';
import welcome from '../../assets/lotties/welcome.json'
const style = {
  height : 500,
  width: 600,
};

const option = {
  animationData: welcome,
  autoplay: true,
}

const Lottie = () => {
  const lottieObj = useLottie(option, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0.1, 0.5],
        type: "seek",
        frames: [0, 233],
      },
    ],
  });

  return <div style={style}>{Animation}</div>;

};

export default Lottie;