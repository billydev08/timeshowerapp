import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const HomePage = () => {
  const [isShowing, setIsShowing] = useState(true);
  const [timer, setTimer] = useState(new Date());
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTimer(new Date());
      setDate(new Date());
    }, 1000);

    clearInterval();
  }, []);

  const showHandler = () => {
    if (!isShowing) {
      setIsShowing(true);
    } else {
      setIsShowing(false);
    }
  };

  return (
    <div>
      <h1>Check time now</h1>
      {!isShowing && <button onClick={showHandler}> Hide time</button>}
      {isShowing && <button onClick={showHandler}> Show time</button>}

      {isShowing ? (
        ''
      ) : (
        <div className='timebox'>
          <p className='date'>
            {date.toLocaleDateString(undefined, {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
          </p>
          <p className='time'>{timer.toLocaleTimeString()}</p>
        </div>
      )}
    </div>
  );
};

export default dynamic(() => Promise.resolve(HomePage), { ssr: false }); //To avoid hydration I added this feature
