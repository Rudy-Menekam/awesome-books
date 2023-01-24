import { DateTime } from './luxon.js';

export class Time {
    static now = () => {
      const timeElement = document.getElementById('date');
      const currentTime = DateTime.now();
      const formatt = DateTime.DATETIME_MED_WITH_SECONDS;
      timeElement.innerHTML = currentTime.toLocaleString(formatt);
  
      setInterval(Time.now, 1000);
    }
  }
  
  