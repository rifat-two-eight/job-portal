"use client";

import React from "react";
import { Menu } from "lucide-react";

const Sidebar = ({
    users,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    selectedUserId,
    handleUserSelect,
    isSidebarOpen,
    setIsSidebarOpen,
    chats,
}) => {
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div
            className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg border-r transform transition-transform duration-300 ease-in-out z-10
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:static md:translate-x-0 md:w-1/4 md:min-w-[200px] md:max-w-[300px]`}
        >
            <div className="p-4 border-b flex items-center justify-between">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-2 border rounded focus:outline-blue-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    className="md:hidden text-gray-600"
                    onClick={() => setIsSidebarOpen(false)}
                >
                    <Menu size={24} />
                </button>
            </div>

            <div className="overflow-y-auto h-[calc(100vh-60px)]">
                {loading && <div className="p-4 text-gray-600">Loading users...</div>}
                {error && <div className="p-4 text-red-500">{error}</div>}
                {filteredUsers.map((user) => (
                    <div
                        key={user.id}
                        className={`flex items-center p-3 cursor-pointer hover:bg-gray-100 transition ${selectedUserId === user.id ? "bg-blue-50" : ""
                            }`}
                        onClick={() => handleUserSelect(user.id)}
                    >
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-10 h-10 rounded-full mr-3"
                        />
                        <div className="flex-1 min-w-0">
                            <div className="font-semibold truncate">{user.name}</div>
                            <div className="text-sm text-gray-500 truncate">
                                {chats[user.id]?.slice(-1)[0]?.text || "No messages yet"}
                            </div>
                        </div>
                        {user.status === "online" && (
                            <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;