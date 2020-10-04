import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Language } from "../Shared/Context";

import Button from '../Shared/UI/Button'

import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import './error.scss'

export const Error = () => {

    const history = useHistory()

    const eng = useContext(Language).english

    const volverHandler = () => {
        history.push('/')
    }

    return (
        <div className="error">
            <div className="error__emoji"><SentimentVeryDissatisfiedIcon style={{ fontSize: "150px" }} /></div>
            <h1 className="error__message">{eng ? "Something went wrong, please try later..." : "Algo salio mal, por favor intente mas tarde..."}</h1>
            <div className="error__button">
                <Button clicked={volverHandler} >Volver</Button>
            </div>
        </div>
    )
}
