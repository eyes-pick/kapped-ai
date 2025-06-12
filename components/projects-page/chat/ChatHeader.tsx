'use client'
import { Button } from "@/components/ui/button"

export default function ChatHeader() {
    return (
        <>
            <Button className="w-[50%] justify-center items-center bg-gray-500 hover:bg-gray-900 my-2 text-sm">
                Chat
            </Button>
            <Button className="w-[50%] justify-center items-center bg-gray-500 hover:bg-gray-900 my-2 text-sm">
                Code
            </Button>
        </>
    );
}