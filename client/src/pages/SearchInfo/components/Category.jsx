import React from "react";

export const Category = ({ handleCategoryChange, categories }) => {
    return (
        <div>
            {categories.map((category) => (
                <button
                    key={category.px}
                    onClick={() => handleCategoryChange(category.pk)}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};
