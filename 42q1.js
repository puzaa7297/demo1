const os = require('os');

function getMemoryUsage() {
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const usedMemory = totalMemory - freeMemory;

    const freeMemoryPercent = (freeMemory / totalMemory) * 100;

    return {
        totalMemory,
        usedMemory,
        freeMemory,
        freeMemoryPercent
    };
}
function displayMemoryUsage() {
    setInterval(() => {
        const { totalMemory, usedMemory, freeMemory, freeMemoryPercent } = getMemoryUsage();
        console.log(`Total Memory: ${(totalMemory / (1024 ** 3)).toFixed(2)} GB`);
        console.log(`Used Memory: ${(usedMemory / (1024 ** 3)).toFixed(2)} GB`);
        console.log(`Free Memory: ${(freeMemory / (1024 ** 3)).toFixed(2)} GB`);
        console.log(`Free Memory Percentage: ${freeMemoryPercent.toFixed(2)}%`);
        console.log('-------------------------------');
    }, 10000);
}
displayMemoryUsage();

