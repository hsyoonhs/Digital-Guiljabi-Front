import React from "react";

export const Category = ({ handleCategoryChange }) => {
    const categories = [
        "건강",
        "교통",
        "스마트폰 앱",
        "웹사이트",
        "자동차",
        "전자기기",
    ];
    return (
        <div>
            {categories.map((category, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => handleCategoryChange(category)}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
};
