 const day = document.querySelector('[data-testid="currentDayOfTheWeek"]');
 const time = document.querySelector('[data-testid="currentUTCTime"]');
 const days = [
     'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ]
    const date = new Date();
 const weekDay = days[date.getDay()];
 day.textContent = weekDay;
 function timer() {
     const date = new Date();
     time.textContent = date.getTime();
 }
 timer();
 setInterval(timer, 1);
