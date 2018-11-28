/**
 *  Here we define the calendar data that is going to be used. 
 */
const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const weekdayLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
// Determines number of characters in weekday name.
const weekdayLength = 3;
const weekdayCasing = 'title';
const monthLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthLength = 0;
const monthCasing = 'title';

/**
 *  This is a helper function for labels. 
 * @param string  label 
 * @param integer length 
 * @param string  casing 
 */
const transformLabel = (label, length, casing) => {
  label = length <= 0 ? label : label.substring(0, length);
  if (casing.toLowerCase() === 'lower') return label.toLowerCase();
  if (casing.toLowerCase() === 'upper') return label.toUpperCase();
  return label;
};

/**
 *  This is the current days data. 
 */
const today = new Date();
const todayComps = {
  year: today.getFullYear(),
  month: today.getMonth() + 1,
  day: today.getDate()
};