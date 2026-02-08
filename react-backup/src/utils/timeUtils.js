/**
 * Time utility functions for Last War Alliance website
 */

/**
 * Get current UTC time
 * @returns {Date} Current UTC time
 */
export const getCurrentUTCTime = () => {
    return new Date();
};

/**
 * Format UTC time as HH:MM:SS
 * @param {Date} date - Date object
 * @returns {string} Formatted time string
 */
export const formatUTCTime = (date) => {
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
};

/**
 * Get current day of week in UTC (0 = Monday, 6 = Sunday)
 * @returns {number} Day of week (0-6)
 */
export const getCurrentDayOfWeek = () => {
    const now = new Date();
    const utcDay = now.getUTCDay();
    // Convert Sunday (0) to 6, and shift Monday-Saturday to 0-5
    return utcDay === 0 ? 6 : utcDay - 1;
};

/**
 * Get day name from day number
 * @param {number} dayNum - Day number (0-6, Monday-Sunday)
 * @returns {string} Day name
 */
export const getDayName = (dayNum) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days[dayNum];
};

/**
 * Calculate time remaining until next Arms Race (4-hour block)
 * Arms Race blocks: 00:00, 04:00, 08:00, 12:00, 16:00, 20:00 UTC
 * @returns {object} Object with hours, minutes, seconds remaining
 */
export const getTimeUntilNextArmsRace = () => {
    const now = new Date();
    const currentHour = now.getUTCHours();
    const currentMinute = now.getUTCMinutes();
    const currentSecond = now.getUTCSeconds();

    // Calculate current 4-hour block (0, 4, 8, 12, 16, 20)
    const currentBlock = Math.floor(currentHour / 4) * 4;
    const nextBlock = (currentBlock + 4) % 24;

    // Calculate time until next block
    let hoursRemaining = nextBlock - currentHour;
    if (hoursRemaining <= 0) {
        hoursRemaining += 24;
    }
    hoursRemaining -= 1; // Subtract 1 because we're counting from current minute

    const minutesRemaining = 59 - currentMinute;
    const secondsRemaining = 59 - currentSecond;

    return {
        hours: hoursRemaining,
        minutes: minutesRemaining,
        seconds: secondsRemaining,
        totalSeconds: (hoursRemaining * 3600) + (minutesRemaining * 60) + secondsRemaining
    };
};

/**
 * Format countdown time as HH:MM:SS
 * @param {number} hours - Hours
 * @param {number} minutes - Minutes
 * @param {number} seconds - Seconds
 * @returns {string} Formatted countdown string
 */
export const formatCountdown = (hours, minutes, seconds) => {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};
