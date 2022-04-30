import React from 'react'
import PropTypes from 'prop-types'

function ToggleButton({name, label, isActive, onToggle, labelOff}) {
    return (
        <div className={`togglebutton-wrapper ${isActive ? 'togglebutton-checked' : '' }`}>
            <label htmlFor={name}>
                {isActive ? <span className="togglebutton-label">{labelOff}</span> : <span className="togglebutton-label">{ label }</span>}
                <span className="tooglebutton-box"></span>
            </label>
            <input id={name} type="checkbox" name={name} value={isActive} onChange={onToggle} />
        </div>
    )
}

ToggleButton.propTypes = {
    name: PropTypes.string,
    isActive: PropTypes.bool,
    onToggle: PropTypes.func,
    label: PropTypes.string,
    labelOff: PropTypes.string,
}

ToggleButton.defaultProps = {
    label: "Add",
    name: "steelblue"
}

export default ToggleButton
