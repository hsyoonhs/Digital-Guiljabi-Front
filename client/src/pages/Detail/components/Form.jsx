import React from "react";

export const Form = ({ contents }) => {
    return (
        <div>
            <h3>{contents.subtitle}</h3>
            <img src={contents.photo} alt="" />
            <p>{contents.text}</p>
        </div>
    );
};
