"use client"; // Add this directive at the top of the file

import ResumeContent from "@/components/resume/ResumeContent";
import React from "react";

function Page() {
    // State to manage the visibility of the interview schedule
    const [showInterviewSchedule, setShowInterviewSchedule] = React.useState(false);

    return (
        <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
            <div className="flex flex-col items-end">
                <button className="flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                    Download
                </button>
            </div>
            <div><ResumeContent /></div>
            <div>
                <section className="pt-5">
                    <div className="flex justify-center items-center space-x-4 mb-4">
                        <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg">Short Listed</button>
                        <button
                            className="bg-green-700 text-white px-6 py-2 rounded-lg"
                            onClick={() => setShowInterviewSchedule(true)}
                        >
                            Interview
                        </button>
                        <button className="bg-red-600 text-white px-6 py-2 rounded-lg">Reject</button>
                    </div>
                    <div className="flex justify-center">
                        <button type="text" placeholder="Message" className="border-2 border-blue-500 text-blue-700 px-4 py-2 rounded-lg w-96">
                            Message
                        </button>
                    </div>
                </section>
            </div>

            {/* Conditionally render the interview schedule module */}
            {showInterviewSchedule && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <div className="flex justify-end">
                            <button
                                className="text-gray-500 hover:text-gray-700"
                                onClick={() => setShowInterviewSchedule(false)}
                            >
                                &times;
                            </button>
                        </div>
                        <h2 className="text-xl font-bold mb-4">Interview Schedule</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Date</label>
                                <input
                                    type="text"
                                    value="01 Oct 2025"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Time</label>
                                <input
                                    type="text"
                                    value="09:00 AM"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Interview Type</label>
                                <div className="mt-1 flex space-x-4">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="interviewType"
                                            value="onsite"
                                            defaultChecked
                                            className="form-radio text-blue-600"
                                        />
                                        <span className="ml-2">Onsite</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="interviewType"
                                            value="remote"
                                            className="form-radio text-blue-600"
                                        />
                                        <span className="ml-2">Remote</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Note</label>
                                <textarea
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                    placeholder="Type Here"
                                ></textarea>
                            </div>
                            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Page;