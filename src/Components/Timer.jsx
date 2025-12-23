import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

export default function Timer() {
  const [seconds, setSeconds] = useState(1500);
  const [isActive, setIsActive] = useState(false);

  const circumference = 2 * Math.PI * 90; // ~565
  const progress = ((1500 - seconds) / 1500) * circumference;

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => setSeconds(s => s - 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const format = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  return (
    <div className="card" style={{textAlign: 'center'}}>
      <h3>Timer</h3>
      <div style={{position: 'relative', display: 'inline-block'}}>
        <svg className="timer-svg">
          <circle cx="100" cy="100" r="90" className="circle-bg" />
          <circle cx="100" cy="100" r="90" className="circle-progress" 
            style={{ strokeDasharray: circumference, strokeDashoffset: circumference - progress }} 
          />
        </svg>
        <div style={{position: 'absolute', top: '40%', left: '30%', fontSize: '32px', fontWeight: 'bold'}}>
          {format(seconds)}
        </div>
      </div>
      <div style={{marginTop: '20px'}}>
        <button onClick={() => setIsActive(!isActive)}>{isActive ? <Pause /> : <Play />}</button>
        <button onClick={() => {setSeconds(1500); setIsActive(false);}}><RotateCcw /></button>
      </div>
    </div>
  );
}