import React, { useContext } from "react";
import { useParams } from "react-router";

import Image from "../Components/Image";
import EditBox from "../Components/EditBox";
import useFetch from "../Shared/Hooks/useFetch";
import useEdit from "../Shared/Hooks/useEdit";
import Button from '../Shared/UI/Button'
import Spinner from "../Shared/UI/Spinner";
import { Language } from '../Shared/Context'
import Inputs from "../Components/Inputs";

import './SingleImage.scss'

const SingleImage = ({ history }) => {

  const eng = useContext(Language).english;


  const id = useParams().id;

  const [
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
  ] = useEdit({
    opacity: 1,
    grayscale: 0,
    blur: 0,
    message: "",
    autor: "",
    brillo: 100,
    color: "black",
    frame: {
      frame: false,
      border: "none",
      borderStyle: "none",
      scale: 1,
      padding: "2rem"
    },
    translateCords: { x: 0, y: 0 },
    fontSize: 20,
    signTranslateCords: { x: 0, y: 0 }
  });

  const url = `https://pixabay.com/api/?key=17350352-f1cf078978a263f4da596de4c&id=${id}&image_type=photo`;

  const imagen = useFetch(url, "single");



  const volverHandler = () => {
    history.push("/");
  };

  const printHandler = () => {
    window.print();
  };



  if (imagen.data) {

    if (imagen.data[0]) {
      const urlImage = imagen.data[0].webformatURL;
      return (
        <>
          <div className="actions printing">
            <Button clicked={volverHandler}>{eng ? "Back" : "Volver"}</Button>
            <Button clicked={printHandler}>{eng ? "Print" : "Imprimir"}</Button>
          </div>
          <div className="edition"> {/* singleImage */}
            <div className="edition__image">
              <Image
                urlImage={urlImage}
                opacity={state.opacity}
                sepia={state.sepia}
                grayscale={state.grayscale}
                blur={state.blur}
                alt={imagen.data[0].tags}
                brillo={state.brillo} //
                border={state.frame.border}
                borderStyle={state.frame.borderStyle}
                scale={state.frame.scale}
                padding={state.frame.padding}
                color={state.color}
                message={state.message}
                translateCords={state.translateCords}
                autor={state.autor}
                webformatWidth={imagen.data[0].webformatWidth}
                webformatHeight={imagen.data[0].webformatHeight}
                fontSize={state.fontSize}
                signTranslateCords={state.signTranslateCords}
              />
            </div>
            <div className="edition__inputs"> {/* inputs-image */}
              <Inputs
                changeHandler={changeHandler}
                message={state.message}
                autor={state.autor}
              />

            </div>
            <div className="edition__toolbox">
              <EditBox
                brightnessHandler={brightnessHandler}
                colorHandler={colorHandler}
                frameHandler={frameHandler}
                coordsHandler={coordsHandler}
                fontSizeHandler={fontSizeHandler}
                frame={state.frame.frame}
                signCoordsHandler={signCoordsHandler}
                blurHandler={blurHandler}
                bynHandler={bynHandler}
                sepiaHandler={sepiaHandler}
                opacityHandler={opacityHandler}
                resetHandler={resetHandler}
                sepia={state.sepia}
                grayscale={state.grayscale}
              />
            </div>
          </div>

        </>
      );
    }

  }

  return <Spinner />;
};

export default SingleImage;
