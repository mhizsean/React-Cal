import React from 'react';
import '../../../../styles/styles.css';

const KeypadRow = (props) => (
    <div className="keypad-row">
        {props.children}
    </div>
)
export default KeypadRow;