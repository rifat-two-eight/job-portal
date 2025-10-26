/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const JobPost = () => {
    const jobData = [
        {
            title: 'Sr. UI/UX Designer',
            company: 'Design-Hill',
            location: 'California, United States',
            type: 'Full Time',
            remote: 'Remote',
            daysRemaining: '05 Days Remaining',
        },
        {
            title: 'Sr. UI/UX Designer',
            company: 'Design-Hill',
            location: 'California, United States',
            type: 'Full Time',
            remote: 'Remote',
            daysRemaining: '05 Days Remaining',
        },
        {
            title: 'Sr. UI/UX Designer',
            company: 'Design-Hill',
            location: 'California, United States',
            type: 'Full Time',
            remote: 'Remote',
            daysRemaining: '05 Days Remaining',
        },
        {
            title: 'Sr. UI/UX Designer',
            company: 'Design-Hill',
            location: 'California, United States',
            type: 'Full Time',
            remote: 'Remote',
            daysRemaining: '05 Days Remaining',
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="my-6">
                <h2 className="text-2xl font-bold">My Job Post</h2>
                <div className="flex space-x-4 mt-5 md:mt-5">
                    {/* Secondary Button */}
                    <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition">
                        Interview
                    </button>

                    {/* Secondary Button */}
                    <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition">
                        Short Listed
                    </button>

                    {/* Primary Button */}
                    <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                        Post Insight
                    </button>
                </div>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {jobData.map((job, index) => (
                    <Link href={'/my-job-details'} className="border border-gray-200 rounded-lg overflow-hidden bg-white" key={index}>
                        <div className="job-image">
                            <img src="cardpic.png" alt="Job" className="w-full h-auto" />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{job.title}</h3>
                            <p className="text-gray-600">{job.company}</p>
                            <p className="text-gray-600">{job.location}</p>
                            <div className="flex space-x-2 mt-2">
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                    {job.type}
                                </span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                    {job.remote}
                                </span>
                            </div>
                            <p className="text-orange-500 font-bold mt-2">{job.daysRemaining}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default JobPost;