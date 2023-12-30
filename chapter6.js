function ISO_numeric_date(date) {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 ? 7 : dayOfWeek;
  }

  const dt = new Date('2023, 12, 30');
  console.log(ISO_numeric_date(dt));
  
 // Alternative solution
 const dayOfWeekToNumber = {Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6, Sunday: 7};
  const options = { weekday: "long" };
console.log('Day Of Week :: ' + dayOfWeekToNumber[new Intl.DateTimeFormat("en-US", options).format(dt)]);