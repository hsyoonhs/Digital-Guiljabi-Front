import React, { useState } from "react";
import { BookmarkItem } from "./BookmarkItem";
import { WritingItem } from "./WritingItem";

export const UserContent = ({ bookmarks, writings }) => {
    const [activeTab, setActiveTab] = useState("bookmark");

    const tabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div>
                <button onClick={() => tabClick("bookmark")}>Bookmark</button>
                <button onClick={() => tabClick("writing")}>Writing</button>
            </div>
            {activeTab === "bookmark" && (
                <ul>
                    {bookmarks.map((bookmark, index) => (
                        <BookmarkItem key={index} bookmark={bookmark} />
                    ))}
                </ul>
            )}
            {activeTab === "writing" && (
                <ul>
                    {writings.map((writing, index) => (
                        <WritingItem key={index} writing={writing} />
                    ))}
                </ul>
            )}
        </div>
    );
};
