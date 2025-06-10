'use client'
import React from 'react';

export default function promptInputBox() {
    return (
        <input
            type="text"
            placeholder="What would you like to build?"
            className="col-span-1 px-2 py-2 text-sm border border-gray-300 rounded-md outline-none bg-white font-sans w-full"
        />
    )
}