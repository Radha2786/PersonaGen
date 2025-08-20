import { Textarea } from "@/components/ui/textarea"
import MessageBubble from "./MessageBubble";

// export function TextareaDemo() {
//   return <Textarea className="min-h-90"  placeholder="" />
// }


// components/ChatArea.jsx
type Message = {
  text: string;
  sender: string;
};

interface ChatAreaProps {
  messages: Message[];
}

export function ChatArea({ messages }: ChatAreaProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((msg, index) => (
        <MessageBubble
          key={index}
          text={msg.text}
          sender={msg.sender}
        />
      ))}
    </div>
  );
}

