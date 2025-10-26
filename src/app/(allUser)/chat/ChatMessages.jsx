/* eslint-disable @next/next/no-img-element */
import React from "react";
import { EllipsisVertical } from "lucide-react";
import FilePreview from "./FilePreview";

const ChatMessages = ({
    userMessages,
    selectedUser,
    loading,
    error,
    openMenuIndex,
    setOpenMenuIndex,
}) => {
    return (
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50 h-screen">
            {loading && <div className="text-center text-gray-600">Loading messages...</div>}
            {error && <div className="text-center text-red-500">{error}</div>}
            {selectedUser ? (
                userMessages.length === 0 ? (
                    <div className="text-center text-gray-400 mt-10">
                        No messages yet. Start a conversation!
                    </div>
                ) : (
                    <>
                        {userMessages.map((msg, i) => (
                            <div
                                key={i}
                                className={`mb-4 flex items-end ${msg.sender === "user" ? "justify-end" : "justify-start"
                                    } max-w-full`}
                            >
                                {msg.sender === "bot" && (
                                    <img
                                        src={selectedUser.avatar}
                                        alt="user"
                                        className="w-8 h-8 rounded-full mr-2 hidden sm:block"
                                    />
                                )}
                                <div className="relative group max-w-[80%] sm:max-w-[60%]">
                                    <div
                                        className={`p-3 rounded-lg shadow-sm ${msg.sender === "user"
                                            ? "bg-blue-500 text-white rounded-br-none"
                                            : "bg-gray-200 text-gray-800 rounded-bl-none"
                                            }`}
                                    >
                                        {msg.text && <p className="break-words">{msg.text}</p>}
                                        {msg.file && <FilePreview file={msg.file} />}
                                        <span className="block text-[10px] text-gray-300 mt-1">
                                            {msg.time}
                                        </span>
                                    </div>
                                    <div
                                        className={`absolute top-1 ${msg.sender === "user" ? "-left-6" : "-right-6"
                                            } opacity-0 group-hover:opacity-100 transition cursor-pointer`}
                                        onClick={() => setOpenMenuIndex(openMenuIndex === i ? null : i)}
                                    >
                                        <EllipsisVertical
                                            size={18}
                                            className="text-gray-400 hover:text-gray-600"
                                        />
                                    </div>
                                    {openMenuIndex === i && (
                                        <div
                                            className={`absolute top-5 z-10 bg-white border rounded-lg shadow-md text-sm text-gray-600 w-28 ${msg.sender === "user" ? "right-0 sm:-left-32" : "left-0 sm:-right-32"
                                                }`}
                                        >
                                            <ul className="p-2 space-y-1">
                                                <li className="hover:bg-gray-100 px-3 py-1 rounded cursor-pointer">
                                                    Edit
                                                </li>
                                                <li className="hover:bg-gray-100 px-3 py-1 rounded cursor-pointer">
                                                    Delete
                                                </li>
                                                <li className="hover:bg-gray-100 px-3 py-1 rounded cursor-pointer">
                                                    Copy
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                {msg.sender === "user" && (
                                    <img
                                        src="https://via.placeholder.com/40?text=Me"
                                        alt="me"
                                        className="w-8 h-8 rounded-full ml-2 hidden sm:block"
                                    />
                                )}
                            </div>
                        ))}
                    </>
                )
            ) : (
                <div className="text-center text-gray-400 mt-10">
                    Select a user to start chatting
                </div>
            )}
        </div>
    );
};

export default ChatMessages;