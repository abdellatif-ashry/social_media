import { useState } from "react"

const States = () => {

    let [state, set] = useState("ddmama")
    let ff = e =>
    {
        set(e)
    }
    return [state,ff]
}

export default States
