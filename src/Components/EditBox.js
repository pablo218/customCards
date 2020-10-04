import React, { useContext } from "react";
import { Language } from "../Shared/Context";
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '../Shared/UI/Button'
import './EditBox.scss'

const EditBox = ({
  brightnessHandler,
  colorHandler,
  coordsHandler,
  signCoordsHandler,
  blurHandler,
  bynHandler,
  sepiaHandler,
  opacityHandler,
  resetHandler,
  sepia,
  grayscale }) => {

  const eng = useContext(Language).english;

  return (

    <div className="edit-box printing">

      <div className="edit-box__tool moreLessControllers">
        <h6 className="moreLessControllers__text">{eng ? "opacity" : "Opacidad"}</h6>
        <AddCircleOutlineIcon
          className="moreLessControllers__more"
          style={{ fontSize: "50px" }}
          onClick={() => { opacityHandler(0.2) }} />
        <RemoveCircleOutlineIcon
          className="moreLessControllers__less"
          style={{ fontSize: "50px" }}
          onClick={() => { opacityHandler(-0.2) }} />
      </div>

      <div className="edit-box__tool moreLessControllers">
        <h6 className="moreLessControllers__text">{eng ? "Blur" : "Desenfoque"}</h6>
        <AddCircleOutlineIcon
          className="moreLessControllers__more"
          style={{ fontSize: "50px" }}
          onClick={() => { blurHandler(2) }} />
        <RemoveCircleOutlineIcon
          className="moreLessControllers__less"
          style={{ fontSize: "50px" }}
          onClick={() => { blurHandler(-2) }} />
      </div>


      <div className="edit-box__tool moreLessControllers">
        <h6 className="moreLessControllers__text">{eng ? "Brightness" : "Brillo"}</h6>
        <AddCircleOutlineIcon
          className="moreLessControllers__more"
          style={{ fontSize: "50px" }}
          onClick={() => { brightnessHandler(2) }} />
        <RemoveCircleOutlineIcon
          className="moreLessControllers__less"
          style={{ fontSize: "50px" }}
          onClick={() => { brightnessHandler(-2) }} />
      </div>

      <div className="edit-box__tool text-color">
        <div className="text-color__color text-color__color--0" onClick={() => colorHandler("yellow")}></div>
        <div className="text-color__color text-color__color--1" onClick={() => colorHandler("orangered")}></div>
        <div className="text-color__color text-color__color--2" onClick={() => colorHandler("yellowgreen")}></div>
        <div className="text-color__color text-color__color--3" onClick={() => colorHandler("blueviolet")}></div>
        <div className="text-color__color text-color__color--4" onClick={() => colorHandler("palevioletred")}></div>
        <div className="text-color__color text-color__color--5" onClick={() => colorHandler("royalblue")}></div>
        <div className="text-color__color text-color__color--6" onClick={() => colorHandler("goldenrod")}></div>
        <div className="text-color__color text-color__color--7" onClick={() => colorHandler("crimson")}></div>
        <div className="text-color__color text-color__color--8" onClick={() => colorHandler("darkslategray")}></div>
        <div className="text-color__color text-color__color--10" onClick={() => colorHandler("black")}></div>
        <div className="text-color__color text-color__color--11" onClick={() => colorHandler("gray")}></div>
        <div className="text-color__color text-color__color--9" onClick={() => colorHandler("white")}></div>
      </div>



      <div className="edit-box__tool byn">
        <div className="edit-tool__box">
          <h6 className="edit-tool">{eng ? "Black & White" : "Blanco y Negro"}</h6>
        </div>
        <div className="byn__check-layout">
          <label htmlFor="selectbyn" className="frame__label">
            <input
              checked={grayscale > 0 && true}
              name="filtro"
              type="radio"
              id="selectbyn"
              className="byn__label--input"
              onChange={() => { }}
            />
            <span
              onClick={bynHandler}
              className="byn__label--check-icon"
            ></span>
            <span
              onClick={bynHandler}
              className="byn__label--check-icon byn__label--check-icon--checked"
            ></span>
          </label>
        </div>
      </div>


      <div className="edit-box__tool frame">
        <div className="edit-tool__box">
          <h6 className="edit-tool">Sepia</h6>
        </div>
        <div className="frame__check-layout">
          <label htmlFor="sepia" className="frame__label">
            <input
              checked={sepia > 0 && true}
              name="filtro"
              type="radio"
              id="sepia"
              className="frame__label--input"
              onChange={() => { }}
            />
            <span
              onClick={sepiaHandler}
              className="frame__label--check-icon"
            ></span>
            <span
              onClick={sepiaHandler}
              className="frame__label--check-icon frame__label--check-icon--checked"
            ></span>
          </label>
        </div>
      </div>

      <div className="edit-box__tool joystick">
        <h6 className="joystick__text">{eng ? "move signature" : "Mover firma"}</h6>
        <div onClick={() => signCoordsHandler("y", -50)} className="joystick__up">
          <div onClick={() => signCoordsHandler("y", -50)} className="joystick__up__inner"></div>
        </div>

        <div onClick={() => signCoordsHandler("x", 2)} className="joystick__ri">
          <div onClick={() => signCoordsHandler("x", 2)} className="joystick__ri__inner"></div>
        </div>

        <div onClick={() => signCoordsHandler("x", -2)} className="joystick__le">
          <div onClick={() => signCoordsHandler("x", -2)} className="joystick__le__inner"></div>
        </div>

        <div onClick={() => signCoordsHandler("y", 50)} className="joystick__bo">
          <div onClick={() => signCoordsHandler("y", 50)} className="joystick__bo__inner"></div>
        </div>
      </div>



      <div className="edit-box__tool joystick">
        <h6 className="joystick__text">{eng ? "move message" : "Mover mensaje"}</h6>
        <div onClick={() => coordsHandler("y", -5)} className="joystick__up">
          <div onClick={() => coordsHandler("y", -5)} className="joystick__up__inner"></div>
        </div>

        <div onClick={() => coordsHandler("x", 2)} className="joystick__ri">
          <div onClick={() => coordsHandler("x", 2)} className="joystick__ri__inner"></div>
        </div>

        <div onClick={() => coordsHandler("x", -2)} className="joystick__le">
          <div onClick={() => coordsHandler("x", -2)} className="joystick__le__inner"></div>
        </div>

        <div onClick={() => coordsHandler("y", 5)} className="joystick__bo">
          <div onClick={() => coordsHandler("y", 5)} className="joystick__bo__inner"></div>
        </div>
      </div>

      <div className="edit-box__tool reset">
        <Button clicked={resetHandler} >{eng ? "Reset" : "Restaurar"}</Button>
      </div>



    </div>
  );
};

export default EditBox;
