import React, { useState, useEffect } from 'react';
import { Trash2, ChevronUp, ChevronDown } from 'lucide-react';

export default function TodoList() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('studyzen_tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState('');

  useEffect(() => {
    localStorage.setItem('studyzen_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([{ id: Date.now(), text: input, priority: 'medium', done: false }, ...tasks]);
    setInput('');
  };

  const toggleDone = (id) => {
    setTasks(tasks.map(t => t.id === id ? {...t, done: !t.done} : t));
  };

  const changePriority = (id, p) => {
    setTasks(tasks.map(t => t.id === id ? {...t, priority: p} : t));
  };

  return (
    <div className="card">
      <h3>To-Do List</h3>
      <form onSubmit={addTask} style={{display: 'flex', gap: '10px', marginBottom: '20px'}}>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          placeholder="New task..." 
          style={{flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid var(--border)'}}
        />
        <button type="submit">Add</button>
      </form>
      <div style={{maxHeight: '300px', overflowY: 'auto'}}>
        {tasks.map(task => (
          <div key={task.id} className={`card ${'p-' + task.priority}`} style={{padding: '10px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between'}}>
            <div>
              <input type="checkbox" checked={task.done} onChange={() => toggleDone(task.id)} />
              <span style={{textDecoration: task.done ? 'line-through' : 'none', marginLeft: '10px'}}>{task.text}</span>
              <div style={{marginTop: '5px'}}>
                <button onClick={() => changePriority(task.id, 'high')} style={{fontSize: '10px', background: '#fee2e2'}}>High</button>
                <button onClick={() => changePriority(task.id, 'low')} style={{fontSize: '10px', background: '#dcfce7', marginLeft: '5px'}}>Low</button>
              </div>
            </div>
            <button onClick={() => setTasks(tasks.filter(t => t.id !== task.id))} style={{color: 'red'}}>×</button>
          </div>
        ))}
      </div>
    </div>
  );
}