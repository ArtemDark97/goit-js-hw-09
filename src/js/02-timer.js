const datePicker = flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const selectedDate = selectedDates[0];
      if (selectedDate <= new Date()) {
        window.alert("Please choose a date in the future");
        document.getElementById("start-button").classList.add("disabled");
      } else {
        document.getElementById("start-button").classList.remove("disabled");
      }
    },
  });

  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", startTimer);

  function startTimer() {
    const selectedDate = datePicker.selectedDates[0];
    const countdownInterval = setInterval(() => {
      const currentDate = new Date();
      const timeRemaining = selectedDate.getTime() - currentDate.getTime();

      if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        updateTimerUI({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const { days, hours, minutes, seconds } = convertMs(timeRemaining);
      updateTimerUI({ days, hours, minutes, seconds });
    }, 1000);

    startButton.classList.add("disabled");
  }

  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }

  function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
  }

  function updateTimerUI({ days, hours, minutes, seconds }) {
    document.querySelector("[data-days]").textContent = addLeadingZero(days);
    document.querySelector("[data-hours]").textContent = addLeadingZero(hours);
    document.querySelector("[data-minutes]").textContent = addLeadingZero(minutes);
    document.querySelector("[data-seconds]").textContent = addLeadingZero(seconds);
  }