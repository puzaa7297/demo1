const os = require('os');
function getUptime() {
    const uptimeSeconds = os.uptime(); 
    const days = Math.floor(uptimeSeconds / (24 * 3600));
    const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);

    return `${days} days, ${hours} hours, ${minutes} minutes`;
}
console.log(`System Uptime: ${getUptime()}`);
