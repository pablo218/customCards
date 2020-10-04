import React from 'react'

import './Image.scss'

const Image = ({ urlImage,
  opacity,
  brillo, //
  border,
  borderStyle,
  scale,
  padding,
  color,
  message,
  autor,
  translateCords,
  webformatWidth,
  webformatHeight,
  fontSize,
  signTranslateCords,
  blur,
  grayscale,
  sepia }) => {

  const { x, y } = translateCords;

  let filtro;

  if (sepia > 0) {
    filtro = `sepia(${sepia}%)`
  }
  else {
    filtro = `grayscale(${grayscale}%)`
  }

  return (
    <div className="image">
      <div className="image__container">
        <img src={urlImage} style={{
          filter: `brightness(${brillo}%) blur(${blur}px) ${filtro}`,
          opacity: opacity
        }} />
        <div className="image__container__text" > {/*style={{ fontSize: `${fontSize}px` }}*/}
          <p className="image__container__text--message"
            style={{
              transform: `translate(${x}%, ${y}%)`,
              color: color,
              //fontSize: `${fontSize}px`
            }}

          >{message}</p>
          <p className="image__container__text--autor"
            style={{
              color: color,
              transform: `translate(${signTranslateCords.x}%, ${signTranslateCords.y}%)`,
            }}>{autor}</p>
        </div>
      </div>
    </div >
  )
}


export default Image