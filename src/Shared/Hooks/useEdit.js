import { useReducer } from 'react'

import { editReducer } from '../Utils/EditReducer'


const useEdit = (initialState) => {
  const [state, dispatch] = useReducer(editReducer, initialState);

  const changeHandler = (e) => {
    dispatch({
      type: "MESSAGE_EDIT",
      payload: { value: e.target.value, name: e.target.name }
    });
  };

  const brightnessHandler = (x) => {
    dispatch({
      type: "BRIGHTNESS_EDIT",
      payload: x
    });
  };

  const colorHandler = (selectedColor) => {
    dispatch({
      type: "COLOR_EDIT",
      payload: selectedColor
    });
  };

  const frameHandler = () => {
    dispatch({
      type: "FRAME_EDIT",
      payload: { border: "1rem solid gray", borderStyle: "groove" }
    });
  };

  const coordsHandler = (coord, n) => {
    dispatch({
      type: "POSITION_EDIT",
      payload: { coord, n }
    });
  };

  const signCoordsHandler = (coord, n) => {
    console.log(coord);
    console.log(n);
    dispatch({
      type: "SIGN_POSITION",
      payload: { coord, n }
    });
  };

  const fontSizeHandler = (n) => {
    dispatch({
      type: "FONT-SIZE",
      n
    });
  };

  const blurHandler = (n) => {
    dispatch({
      type: "BLUR",
      n
    });
  }

  const bynHandler = () => {
    dispatch({
      type: "BYN"
    })
  }

  const sepiaHandler = () => {
    dispatch({
      type: "SEPIA"
    })
  }

  const opacityHandler = (x) => {
    dispatch({
      type: "OPACITY",
      payload: x
    });
  };

  const resetHandler = () => {
    dispatch({
      type: 'RESET'
    })
  }



  return [
    state,
    changeHandler,
    brightnessHandler,
    colorHandler,
    frameHandler,
    coordsHandler,
    fontSizeHandler,
    signCoordsHandler,
    blurHandler,
    bynHandler,
    sepiaHandler,
    opacityHandler,
    resetHandler
  ];
};

export default useEdit;
