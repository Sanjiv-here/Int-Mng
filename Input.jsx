import React, { useState } from 'react';

function Input(props) {

  return (
    <div className="w-full p-2">
      <label htmlFor={props.id} className="block mb-0 text-left text-white">
        {props.detail}
      </label>
      <input
        className="w-full rounded border border-sky-500 border-gray-800 border-1 outline-1 outline-blue-500 p-1"
        type={props.typ}
        maxLength="50"
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
