"use client";
import { Card, CardHeader, CardContent, CardAction, CardDescription } from "@components/ui/card";
import { Avatar, AvatarFallback } from "@components/ui/avatar";

export default function ChatMessages() {
  return (
    <div className="grid grid-rows-1 h-auto w-full bg-gray-800">
      <div className="h-full w-full max-h-[300px] min-h-[250px] overflow-scrollable grid grid-cols[repeat(3_1fr)] bg-gray-800 scroll-auto rounded-none text-black text-lg">
        <Card className="flex flex-1 bg-gray-600 p-1 mx-3 my-1 mb-4 border-0">
          <CardHeader>
            <Avatar>
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            <CardAction>View Commit</CardAction>
          </CardHeader>
          <CardContent>
            <CardDescription>*AI RESPONSE GOES HERE*</CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
