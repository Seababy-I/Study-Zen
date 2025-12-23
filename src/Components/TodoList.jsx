import React, { useState, useEffect } from 'react';
import { Trash2 } from 'lucide-react';

export default function TodoList() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('studyzen_tasks');
    return saved ? JSON.parse(saved) : [
      { id: 1, text: "Start React project", done: true },
      { id: 2, text: "Finish StudyZen", done: false }
    ];
  });

  const [input, setInput] = useState('');

  useEffect(() => {
    localStorage.setItem('studyzen_tasks', JSON.stringify(todos));
  }, [todos]);

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([{ id: Date.now(), text: input, done: false }, ...todos]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div className="card">
      <h3>To-Do List</h3>
      <form onSubmit={addTask} style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="New task..." 
          style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid var(--border)' }}
        />
        <button type="submit">Add</button>
      </form>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span 
              onClick={() => toggleTodo(todo.id)} 
              style={{ textDecoration: todo.done ? 'line-through' : 'none', cursor: 'pointer' }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} style={{ color: 'red', border: 'none', background: 'none' }}>
              <Trash2 size={16} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}