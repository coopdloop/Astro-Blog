import { h } from "preact";
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
export default function Greeting({ messages }: { messages: string[] }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div className="flex gap-2 text-xl tracking-wide leading-snug">
      <h1 className="font-bold animate-pulse">
        {greeting}! Welcome to my blog🚀
      </h1>
      <button onClick={() => setGreeting(randomMessage())}>
        <ReloadIcon height={40} width={40} className="hover:animate-spin" />
      </button>
    </div>
  );
}
