
export const editReducer = (state, action) => {
    switch (action.type) {
        case "MESSAGE_EDIT":
            return { ...state, [action.payload.name]: action.payload.value };

        case "BRIGHTNESS_EDIT":
            const brillo = state.brillo;
            return { ...state, brillo: brillo + action.payload };

        case "COLOR_EDIT":
            return { ...state, color: action.payload };

        case "FRAME_EDIT":
            if (state.frame.border === "none") {
                return {
                    ...state,
                    frame: {
                        ...state.frame,
                        frame: true,
                        border: action.payload.border,
                        borderStyle: action.payload.borderStyle,
                        scale: ".95",
                        padding: "5rem"
                    }
                };
            }
            return {
                ...state,
                frame: {
                    ...state.frame,
                    frame: false,
                    border: "none",
                    borderStyle: "none",
                    scale: 1,
                    padding: "2rem"
                }
            };

        case "POSITION_EDIT":
            if (action.payload.coord === "x") {
                return {
                    ...state,
                    translateCords: {
                        ...state.translateCords,
                        [action.payload.coord]: state.translateCords.x + action.payload.n
                    }
                };
            } else {
                return {
                    ...state,
                    translateCords: {
                        ...state.translateCords,
                        [action.payload.coord]: state.translateCords.y + action.payload.n
                    }
                };
            }

        case "FONT-SIZE":
            return { ...state, fontSize: state.fontSize + action.n };

        case "SIGN_POSITION":
            if (action.payload.coord === "x") {
                return {
                    ...state,
                    signTranslateCords: {
                        ...state.signTranslateCords,
                        [action.payload.coord]:
                            state.signTranslateCords.x + action.payload.n
                    }
                };
            } else {
                return {
                    ...state,
                    signTranslateCords: {
                        ...state.signTranslateCords,
                        [action.payload.coord]:
                            state.signTranslateCords.y + action.payload.n
                    }
                };
            }

        case "BLUR":
            const blur = state.blur
            if (blur === 0 && action.n < 0) {
                return state
            }
            return {
                ...state,
                blur: blur + action.n
            }

        case "BYN":
            if (state.grayscale === 100) {
                return {
                    ...state,
                    grayscale: 0
                }
            }
            return {
                ...state,
                grayscale: 100,
                sepia: 0
            }

        case "SEPIA":
            if (state.sepia === 100) {
                return {
                    ...state,
                    sepia: 0
                }
            }
            return {
                ...state,
                sepia: 100,
                grayscale: 0

            }

        case "OPACITY":
            const opacity = state.opacity;
            console.log('REDUCER OPACIDAD', opacity)
            console.log('REDUCER OPACIDAD', action.payload)
            if (opacity <= 0 && action.payload < 0) {
                return state
            }
            if (opacity >= 1 && action.payload > 0) {
                return state
            }

            return { ...state, opacity: opacity + action.payload };

        case "RESET":
            return {
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
                fontSize: 2,
                signTranslateCords: { x: 0, y: 0 }
            }

        default:
            return state;
    }
};