import React from "react";

const Select = ({placeHolder, value, options, onChange}) => {

    if (Array.isArray(options) && options.length > 0) {
        return (
            <div>
                <select onChange={onChange}>
                    {options.map((item) => (
                        <option value={item.value} className="select-item"> {item.label}</option>
                    ))}
                </select>
            </div>
        );
    }
    else {
        return (<div>
            <select>
                <option className="select-item">{placeHolder}</option>
            </select>
        </div>);
    }

};

export default Select;