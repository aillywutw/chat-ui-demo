import { useState } from "react";

function App() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello 👋" },
    { id: 2, text: "Hi!" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;

    const newMessage = {
      id: Date.now(),
      text: input
    };

    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Chat UI Demo</h2>

      <div style={{ border: "1px solid #ccc", padding: 10, height: 200, overflow: "auto" }}>
        {messages.map((msg) => (
          <div key={msg.id}>{msg.text}</div>
        ))}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type message..."
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;