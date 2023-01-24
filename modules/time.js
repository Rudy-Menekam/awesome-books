import { DateTime } from './luxon.js';

class Time {
    static now = () => {
      const timeElement = document.getElementById('time');
      const currentTime = DateTime.now();
      const formatt = DateTime.DATETIME_MED_WITH_SECONDS;
      timeElement.innerHTML = currentTime.toLocaleString(formatt);
  
      setInterval(Time.now, 1000);
    }
  }
  
  export default Time;
  