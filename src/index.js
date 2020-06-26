import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Checkbox() {

    const [checked, setChecked] = useState(false)
    useEffect(() => {
        alert(`checked: ${checked.toString()}`)
    })
    return(

        <>
            <input
                type="checkbox"
                value={checked}
                onClick={() => setChecked(checked => !checked) }
            />
            {checked ? "Checked" : "Not Checked"}
        </>

    )
}

ReactDOM.render(

    <Checkbox />,

    document.getElementById('root')
);