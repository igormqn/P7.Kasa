import { useState } from 'react'

import "../utils/css/style.css"
import arrowDown from "../assets/images/arrow_down.png"
import arrowUp from "../assets/images/arrow_up.png"



function Subside(setTypeofSubside) {
    const [isClose, setIsClose] = useState(true)
    return isClose ? (
      <div class ="subside-block">
        <button class ="subside-btn" onClick={() => setIsClose(false)}>{setTypeofSubside.name}<img class="arrowDown" src={arrowDown} alt="Arrow Down"></img></button>
      </div>
    ) : (
        <div class ="subside-block">
        <button class ="subside-btn" onClick={() => setIsClose(true)}>{setTypeofSubside.name}<img class="arrowUp" src={arrowUp} alt="Arrow Up"></img></button>
        <div class ="subside-text">{setTypeofSubside.description}</div>
      </div>
    )
}
export default Subside ;