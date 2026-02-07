import "./ChatWindow.css";
import Chat from "./Chat.jsx";
import { MyContext } from "./MyContext.jsx";
import { useContext, useState, useEffect, useRef } from "react";
import { ScaleLoader } from "react-spinners";
import { useTheme } from "./ThemeContext.jsx";
import { useAuth } from "./AuthContext.jsx";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function ChatWindow() {
    const { prompt, setPrompt, reply, setReply, currThreadId, setPrevChats, setNewChat } = useContext(MyContext);
    const { theme, toggleTheme } = useTheme();
    const { user, logout, token } = useAuth();
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const getReply = async () => {
        setLoading(true);
        setNewChat(false);

        console.log("message ", prompt, " threadId ", currThreadId);
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                message: prompt,
                threadId: currThreadId
            })
        };

        try {
            const response = await fetch(`${API_BASE_URL}/api/chat`, options);
            const res = await response.json();
            console.log(res);
            setReply(res.reply);
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    }

    //Append new chat to prevChats
    useEffect(() => {
        if (prompt && reply) {
            setPrevChats(prevChats => (
                [...prevChats, {
                    role: "user",
                    content: prompt
                }, {
                    role: "assistant",
                    content: reply
                }]
            ));
        }

        setPrompt("");
    }, [reply]);


    const handleProfileClick = () => {
        setIsOpen(!isOpen);
    }

    const handleLogout = () => {
        logout();
        setIsOpen(false);
    }

    return (
        <div className="chatWindow">
            <div className="navbar">
                <span>IntuitraGPT <i className="fa-solid fa-chevron-down"></i></span>
                <div className="userIconDiv" onClick={handleProfileClick}>
                    <span className="userIcon">
                        {user?.name?.charAt(0).toUpperCase() || <i className="fa-solid fa-user"></i>}
                    </span>
                </div>
            </div>
            {
                isOpen &&
                <div className="dropDown" ref={dropdownRef}>
                    <div className="dropDownItem user-info">
                        <i className="fa-solid fa-user-circle"></i>
                        <span>{user?.name}</span>
                    </div>
                    <div className="dropDownItem" onClick={toggleTheme}>
                        <div className="themeToggle">
                            <span>
                                {theme === 'dark' ? (
                                    <><i className="fa-solid fa-sun"></i> Light Mode</>
                                ) : (
                                    <><i className="fa-solid fa-moon"></i> Dark Mode</>
                                )}
                            </span>
                        </div>
                    </div>
                    <div className="dropDownItem"><i className="fa-solid fa-gear"></i> Settings</div>
                    <div className="dropDownItem" onClick={handleLogout}>
                        <i className="fa-solid fa-arrow-right-from-bracket"></i> Log out
                    </div>
                </div>
            }
            <Chat></Chat>

            <div className="chatInput">
                {loading && (
                    <div className="loaderContainer">
                        <ScaleLoader color={theme === 'dark' ? '#fff' : '#333'} loading={loading} />
                    </div>
                )}
                <div className="inputBox">
                    <input placeholder="Ask anything"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' ? getReply() : ''}
                    >

                    </input>
                    <div id="submit" onClick={getReply}><i className="fa-solid fa-paper-plane"></i></div>
                </div>
                <p className="info">
                    IntuitraGPT can help you with anything. IntuitraGPT can make mistakes. Check important info.
                </p>
            </div>
        </div>
    )
}

export default ChatWindow;