import { useState } from "react";

export default function Clock() {

    const [time, setTime] = useState(new Date().getTime());

    return (
        <div>
            {time}
        </div>
    )
}