"use client";

import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import MessageInput from "./MessageInput";

// Mock data
const initialUsers = [
    { id: 1, name: "Dawn Teague", status: "online", avatar: "https://via.placeholder.com/40" },
    { id: 2, name: "David Johnson", status: "", avatar: "https://via.placeholder.com/40" },
    { id: 3, name: "Andrew Gilbert", status: "", avatar: "https://via.placeholder.com/40" },
    { id: 4, name: "Tyrone Derby", status: "", avatar: "https://via.placeholder.com/40" },
    { id: 5, name: "Susan Liles", status: "", avatar: "https://via.placeholder.com/40" },
];

const initialChats = {
    1: [
        { sender: "user", text: "Hey Dawn, how’s everything going?", time: "10:10 AM" },
        { sender: "bot", text: "All good here! How about you?", time: "10:12 AM" },
    ],
    2: [
        { sender: "user", text: "Hey David, saw your email.", time: "9:40 AM" },
        { sender: "bot", text: "Perfect, let’s sync after lunch.", time: "9:41 AM" },
    ],
    3: [
        { sender: "bot", text: "Hey Andrew! Did you check the project files?", time: "Yesterday" },
    ],
};

const ChatInterface = () => {
    const [users, setUsers] = useState(initialUsers);
    const [chats, setChats] = useState(initialChats);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [newMessage, setNewMessage] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [openMenuIndex, setOpenMenuIndex] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fileInputRef = useRef(null);
    const messagesEndRef = useRef(null);

    const selectedUser = users.find((u) => u.id === selectedUserId);
    const userMessages = chats[selectedUserId] || [];


    // Fetch users (mock)
    const fetchUsers = async () => {
        try {
            setLoading(true);
            setUsers(initialUsers);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Fetch chats (mock)
    const fetchChats = async (userId) => {
        try {
            setLoading(true);
            setChats((prev) => ({ ...prev, [userId]: initialChats[userId] || [] }));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Fetch users on mount
    useEffect(() => {
        fetchUsers();
    }, []);

    // Fetch chats when user selected
    useEffect(() => {
        if (selectedUserId) fetchChats(selectedUserId);
    }, [selectedUserId]);


    const handleUserSelect = (id) => {
        setSelectedUserId(id);
        setOpenMenuIndex(null);
        setIsSidebarOpen(false);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) setSelectedFile(file);
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!newMessage.trim() && !selectedFile) return;

        const newMsg = {
            sender: "user",
            text: newMessage,
            file: selectedFile
                ? {
                    name: selectedFile.name,
                    url: URL.createObjectURL(selectedFile),
                    type: selectedFile.type,
                }
                : null,
            time: "Now",
        };

        try {
            setLoading(true);
            setChats((prev) => {
                const updatedChats = {
                    ...prev,
                    [selectedUserId]: [...(prev[selectedUserId] || []), newMsg],
                };
                return updatedChats;
            });

            setNewMessage("");
            setSelectedFile(null);
            if (fileInputRef.current) fileInputRef.current.value = "";

            setTimeout(() => {
                setChats((prev) => ({
                    ...prev,
                    [selectedUserId]: [
                        ...(prev[selectedUserId] || []),
                        {
                            sender: "bot",
                            text: selectedFile ? "Received your file!" : "Got your message 👍",
                            time: "Just now",
                        },
                    ],
                }));
            }, 1000);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    const handleVideoCall = () => {
        alert(`Starting video call with ${selectedUser.name}...`);
    }

    return (
        <div className="flex min-h-screen/2 bg-gray-100 max-w-7xl mx-auto">
            <Sidebar
                users={users}
                loading={loading}
                error={error}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedUserId={selectedUserId}
                handleUserSelect={handleUserSelect}
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                chats={chats}
            />
            <div
                className={`flex-1 flex flex-col transition-all duration-300 ${selectedUserId ? "block" : "hidden"
                    } md:block`}
            >
                <ChatHeader
                    selectedUser={selectedUser}
                    setIsSidebarOpen={setIsSidebarOpen}
                    handleVideoCall={handleVideoCall}
                />
                <div className="relative flex-1">
                    <ChatMessages
                        userMessages={userMessages}
                        selectedUser={selectedUser}
                        loading={loading}
                        error={error}
                        openMenuIndex={openMenuIndex}
                        setOpenMenuIndex={setOpenMenuIndex}
                    />
                    <div ref={messagesEndRef} />
                </div>
                <MessageInput
                    newMessage={newMessage}
                    setNewMessage={setNewMessage}
                    handleSendMessage={handleSendMessage}
                    handleFileChange={handleFileChange}
                    fileInputRef={fileInputRef}
                    loading={loading}
                    selectedUser={selectedUser}
                />
            </div>
        </div>
    );
};

export default ChatInterface;