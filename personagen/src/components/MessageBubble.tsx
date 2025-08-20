// components/MessageBubble.jsx
type MessageBubbleProps = {
  text: string;
  sender: string;
};

export default function MessageBubble({ text, sender }: MessageBubbleProps) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex w-full mb-2 ${
        isUser ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`px-4 py-2 rounded-2xl max-w-[70%] ${
          isUser
            ? "bg-gray-200 text-black rounded-bl-none"
            : "bg-indigo-500 text-white rounded-br-none"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
