import { useReducer } from "react"
import { toggleReducer } from "./reducers";

const Toggle = ({ reducer = toggleReducer }) => {
    const [currentState, dispatch] = useReducer(reducer, { clicks: 0, on: false })
    const { clicks, on } = currentState;

    const handleClick = () => {
        dispatch({
            type: "toggle"
        })
    }

    return <button className={`toggle-btn`} onClick={handleClick}>
        {on ? "ON" : "OFF"} Clicks {clicks}
    </button>
}

export default Toggle