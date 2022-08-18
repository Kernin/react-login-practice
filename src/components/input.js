import React from "react";

const InputField = (props) => {
  return (
    <div className="textfield">
      <label className="textfield__label label--big" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className="textfield__input"
        type={props.type}
        id={props.id}
        onChange={props.onChange}
        value={props.value}
        name={props.name}
      />
    </div>
  );
};

export default InputField;
