import React, { useEffect, useState } from 'react';
import './DateTime.scss';
function formatDateTime(date = new Date()) {
  const weekday = date.toLocaleString('en-US', { weekday: 'short' });
  const month = date.toLocaleString('en-US', { month: 'short' });
  const day = date.getDate();

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12 || 12; // convert to 12-hour format, show 12 for midnight/noon

  return `${weekday} ${month} ${day} ${hours}:${minutes}:${seconds}${ampm}`;
}

export default function DateTime({ className, updateInterval = 1000 }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), updateInterval);
    return () => clearInterval(id);
  }, [updateInterval]);

  return (
   <div className="date-time">


    <span className={className} id="date" aria-live="polite">
      {formatDateTime(now)}
    </span>
       </div>
  );
}

