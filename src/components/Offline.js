import React from 'react'

const Offline = () => {
    return (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    <div className="bg-red-500 rounded-full w-40 h-40"/>
                </div>
                <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                        You are in offline mode. Don't you worry, you still can do things.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Offline
