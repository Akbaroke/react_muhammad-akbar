import { useState, useEffect } from 'react';

const TimeDisplay = ({ time, className, isTimeOnly }) => {
  const [formattedTime, setFormattedTime] = useState(InitialDate(time));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date(time * 1000);
      const currentTime = Math.floor(Date.now() / 1000);
      const difference = currentTime - time;

      if (difference >= 31536000) {
        // Lebih dari 1 tahun
        const formattedDate = date.toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        });
        setFormattedTime(formattedDate);
      } else if (difference >= 604800) {
        // Lebih dari 1 minggu
        const formattedDate = date.toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'short',
        });
        setFormattedTime(formattedDate);
      } else if (difference >= 86400) {
        // Lebih dari 1 hari
        const dayName = date.toLocaleDateString('id-ID', {
          weekday: 'short',
        });
        setFormattedTime(dayName);
      } else if (difference >= 60) {
        // Lebih dari 1 menit
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        setFormattedTime(`${hours}:${minutes}`);
      } else {
        setFormattedTime(`Now`);
      }
    }, 500); // Update every second

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTimeOnly, time]);

  return <p className={className}>{formattedTime}</p>;
};

export default TimeDisplay;

const InitialDate = (time) => {
  const date = new Date(time * 1000);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};
