import React from 'react'

export default function Premium() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-6 py-5">

            <div className="p-6 bg-gray-900 rounded-lg text-white w-80 shadow-lg">
                <h3 className="text-xl font-bold">Free Plan</h3>
                <div className="my-2">
                    <span className="text-4xl font-bold">₹0</span>
                    <span className="text-gray-300">/month</span>
                </div>
                <p className="text-gray-300 mb-6">Ideal for casual listeners starting out.</p>

                <ul className="space-y-1.5 mb-6 text-sm">
                    <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-400">Access to all public songs and albums</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-400">Basic audio quality (128 kbps)</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-400">Limited skips (5 per day)</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-400">No offline listening</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-400">Standard streaming speed</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-400">No mobile app support</span>
                    </li>
                </ul>

                <button className="w-full py-2 px-4 bg-blue-500 rounded hover:bg-blue-600 transition-colors text-sm cursor-pointer">
                    Get Started
                </button>
            </div>

            <div className="p-6 bg-gray-900 rounded-lg text-white w-80 shadow-lg relative">
                <p className="absolute px-3 text-sm -top-3.5 left-3.5 py-1 bg-[#8789FB] rounded-full">Most Popular</p>
                <h3 className="text-xl font-bold">Monthly Plan</h3>
                <div className="my-2">
                    <span className="text-4xl font-bold">₹149</span>
                    <span className="text-gray-300">/month</span>
                </div>
                <p className="text-gray-300 mb-6">Ideal for ad-free experience.</p>

                <ul className="space-y-1.5 mb-6 text-sm">
                    <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-400">Ad-free uninterrupted streaming</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-400">High-quality audio (320 kbps)</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-400">Download songs for offline playback</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-400">Create and share custom playlists</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-400">Early access to new albums</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-400">Priority email support</span>
                    </li>
                </ul>

                <button className="w-full py-2 px-4 bg-blue-500 rounded hover:bg-blue-600 transition-colors text-sm cursor-pointer">
                    Get Started
                </button>
            </div>

            <div className="p-6 bg-gray-900 rounded-lg text-white w-80 shadow-lg">
                <h3 className="text-xl font-bold">Yearly Plan</h3>
                <div className="my-2">
                    <span className="text-4xl font-bold">₹1,499</span>
                    <span className="text-gray-300">/month</span>
                </div>
                <p className="text-gray-300 mb-6">Ideal for dedicated music lovers.</p>

                <ul className="space-y-1.5 mb-6 text-sm">
                    <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-400">Everything in Monthly Plan, plus:</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-400">2 months free (save 15%)</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-400">Access to limited-edition albums</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-400">AI music recommendations</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-400">Sync across multiple devices</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-400">Dedicated premium support channel</span>
                    </li>
                </ul>

                <button className="w-full py-2 px-4 bg-blue-500 rounded hover:bg-blue-600 transition-colors text-sm cursor-pointer">
                    Get Started
                </button>
            </div>

        </div>
    )
}