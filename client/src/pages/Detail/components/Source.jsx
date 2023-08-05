import React from "react";

export const Source = ({ contents }) => {
    return (
        <div>
            <label>
                {contents.name} : {contents.url}
            </label>
        </div>
    );
};
