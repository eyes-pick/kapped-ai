"use client";
import {
  Card,
  CardHeader,
  CardContent,
  CardAction,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function chatStream() {
  return (
    <>
      <Card className="flex flex-1 min-h-[250px] bg-slate-600 p-1 mx-3 my-2 mb-4 border-0">
        <div>
          <CardHeader className="p-4 mx-auto">
            <Avatar className="bg-slate-300">
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            <CardAction>View Commit</CardAction>
          </CardHeader>
        </div>
        <div>
          <CardContent>
            <CardDescription>*AI RESPONSE GOES HERE*</CardDescription>
          </CardContent>
        </div>
      </Card>
    </>
  );
}
