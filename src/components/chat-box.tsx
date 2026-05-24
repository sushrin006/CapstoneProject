import { useState } from "react";

const Chatbox = () => {
  const [input, setInput] = useState<string>("");
  const [text, setText] = useState<string[]>([]);

  const handleSend = () => {
    setText((prev) => [...prev, input]);
    setInput("");
  };
  console.log(input, "sd");

  return (
    <div className="flex-1 p-4 relative">
      <div className="absolute right-2 flex flex-col gap-2 items-end max-h-[70dvh] overflow-y-auto">
        {text &&
          text.map((d) => (
            <p className="p-2 bg-gray-800 text-white rounded-lg w-fit max-w-[50dvw] wrap-break-word whitespace-pre-wrap">
              {d}
            </p>
          ))}
      </div>
        
      <div className="flex gap-1 absolute bottom-5 left-30">
        <input
          className="border w-[60dvw] h-[50px] resize-none rounded-3xl py-2 px-6"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && input != "") {
              handleSend();
            }
          }}
        />

        <button
          onClick={handleSend}
          className="px-4 py-2 bg-black text-white rounded-full"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
