"use client";
import Image from "next/image";
import Header from "@/components/Header";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TextareaWithButton } from "@/components/TextArea";
import {ChatArea} from "@/components/ChatArea";
import { useState } from "react";


export default function Home() {
    const [messages, setMessages] = useState([
        {text: "Hey! Ask me something", sender: "ai"},
    ])

    const handleSend = async (newMessage: any) => {
    // Add user msg
    setMessages((prev) => [...prev, { text: newMessage, sender: "user" }]);

    // Call your API for AI response
    const aiResponse = "This will come from API 🚀"; // Replace with fetch(...)
    setMessages((prev) => [...prev, { text: aiResponse, sender: "ai" }]);
  };

  return (
    <div className="bg-background text-foreground flex flex-col h-screen">
      <Header />
      <h1 className="text-blue-600/100 dark:text-sky-400/100 text-2xl font-bold text-center mt-2">
        CHAI AUR CHITCHAT
      </h1>
      <div className="flex-1">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 p-4">
        <Card className="col-span-1 bg-[#a7aeeb] shadow-lg shadow-indigo-500/50">
          <CardHeader>
            <CardTitle>Ask Something to Hitesh Chaudhary</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-blue-600/100">
              Tech Tutor and Educator
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="col-span-1 bg-[#a7aeeb] shadow-lg shadow-indigo-500/50">
          <CardHeader>
            <CardTitle>Ask Something to Piyush Garg</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-blue-600/100">
              Tech Tutor and Educator
            </CardDescription>
          </CardContent>
        </Card>
        
      </div>
      </div>
      <div className="col-span-full mt-2 p-4 pt-0">
        <ChatArea messages={messages} />
      </div>
      <div className="col-span-full shadow-lg shadow-indigo-500/50 p-4 pt-0">
          <TextareaWithButton onSend={handleSend} />
        </div>
    </div>
  );
}
