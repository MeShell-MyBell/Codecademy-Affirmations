const { affirmations } = require('./data.js');

const delay = 5;

const item = affirmations[Math.floor(Math.random() * affirmations.length)];

function sleep(delay) {
    // Sleep for delay milliseconds
    return new Promise(resolve => setTimeout(resolve, delay));
}

console.log(`\n🌸 Your Positive Affirmation 🌸\n`);
console.log(`${item.affirmation}\n`);

pauseForReflection(item);

async function pauseForReflection(item) {
    process.stdout.write(`Take a moment to reflect... ${delay} seconds\r`);

    for (let i = 0; i < delay; i++) {
        await sleep(1000);
        process.stdout.write(`Take a moment to reflect... ${delay - i - 1} seconds   \r`);
    }

    console.log(`\n\nCategory: ${item.category}`);
    console.log(`\n✨ Remember: You are doing better than you think. ✨\n`);
}