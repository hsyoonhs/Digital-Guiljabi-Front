import React from "react";

export const Category = ({ handleCategoryChange }) => {
    const categories = {
        건강: "1",
        교통: "2",
        "스마트폰 앱": "3",
        웹사이트: "4",
        자동차: "5",
        전자기기: "6",
    };
    return (
        <div>
            {Object.keys(categories).map((category, index) => {
                return (
                    <button
                        key={index}
                        onClick={() =>
                            handleCategoryChange(categories[category])
                        }
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
};
