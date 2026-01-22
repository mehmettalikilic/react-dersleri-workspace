import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8 }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Yeni görev..."
        style={{ flex: 1, padding: 10 }}
      />
      <button type="submit" style={{ padding: "10px 14px" }}>
        Ekle
      </button>
    </form>
  );
}
