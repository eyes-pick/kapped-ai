'use client'
import { Card, CardHeader, CardContent, CardAction, CardDescription, } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function chatStream() {
    return (
        <>
            <div className="h-full w-full max-h-[300px] min-h-[250px] overflow-scrollable grid grid-cols[repeat(3 1fr)] bg-inherit scroll-auto rounded-none text-black text-lg">
                <Card className="flex flex-1 bg-gray-600 p-1 mx-3 my-2 mb-4 border-0">
                    <div>
                        <CardHeader>
                            <Avatar>
                                <AvatarFallback>AI</AvatarFallback>
                            </Avatar>
                            <CardAction>View Commit</CardAction>
                        </CardHeader>
                    </div>
                    <div>
                        <CardContent>
                            <CardDescription>
                                *AI RESPONSE GOES HERE*
                            </CardDescription>
                        </CardContent>
                    </div>
                </Card>
            </div>
        </>
    )
}
