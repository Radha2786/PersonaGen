import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

import { useState } from "react";

export function TextareaWithButton({ onSend }: { onSend: (text: string) => void }) {
    const [text, setText] = useState("");
    const handleSubmit = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };
  return (
    <div className="grid w-full gap-1 h-full ">
      <Textarea placeholder="Type your message here." value={text} onChange={(e) => setText(e.target.value)} />
      <Button onClick={handleSubmit}>Send message</Button>
    </div>
  )
}
