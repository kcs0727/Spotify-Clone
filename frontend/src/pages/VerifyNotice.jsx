import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function VerifyNotice() {
    const location = useLocation();
    const navigate = useNavigate();

    const message = location.state?.message || "Please check your email for verification instructions.";

    return (
        <div className="flex justify-center items-center h-screen bg-black text-white">
            <div className="bg-[#1DB954]/5 p-4 sm:p-8 rounded-lg w-md max-w-[90vw] shadow-lg shadow-green-600 border-t-2 border-green-600/50 text-center">
                <h1 className="text-3xl font-bold mb-6">Email Verification</h1>
                <p className="text-lg mb-6">{message}</p>
                <p className="text-sm text-gray-400 mb-6">
                    Note: If you're unable to find the email in your inbox, kindly check your <span className="font-medium text-gray-300">Spam</span> folder.
                </p>
                <button
                    onClick={() => navigate("/login")}
                    className="bg-[#9d3434] text-gray-300 font-semibold py-2 px-6 rounded-lg cursor-pointer"
                >
                    Back to Login
                </button>
            </div>
        </div>
    );
};
