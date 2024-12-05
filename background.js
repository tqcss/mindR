import { Reminder } from './scripts/classes.js'

function getNextAlarmTime(reminder) {
    let nextAlarmTime = null;

    for (let day of reminder.targetDays) {
        let alarmTime = new Date(now);

        if (day < currentDay || (day === currentDay && (currentHour > targetHour || (currentHour === targetHour && currentMinute >= targetMinute)))) {
            alarmTime.setDate(now.getDate() + ((day + 7 - currentDay) % 7)); // Schedule for next week if already passed today
        } else if (day === currentDay && currentHour <= targetHour) {
            alarmTime.setDate(now.getDate());
        }

        alarmTime.setHours(targetHour, targetMinute, 0, 0); // Set time to 9:00 PM on the target day
        nextAlarmTime = Math.max(nextAlarmTime || 0, alarmTime.getTime());
    }

    return nextAlarmTime;
}