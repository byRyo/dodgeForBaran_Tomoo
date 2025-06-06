let baran = {
    iq: "0",
    age: 2,
    intro: function () {
        logQueue.push("Hello, I am Baran some big random nigger.");
        logQueue.push("Hello, I am Tomoo and i am a nigger too.");
        logQueue.push("We are both Gay obv !.");
    },
    square: function (BARAN) {
        return BARAN * BARAN;
    },
    BARANOFFSETS: function () {
        logQueue.push("Here are all hacks I made since I am a pro");
        logQueue.push("0xABCDEF"); // autododge offset
        logQueue.push("0xABC..."); // aimbot offset
        logQueue.push("0xABCD.."); // crasher offset
        logQueue.push("0x123456"); // instant win game offset
    },
    BARANHACKCOMPUTER: function () {
        logQueue.push("Starting hack...");
        logQueue.push("1, 2, 3");
        logQueue.push("Fully hacked your PC");
        logQueue.push("Your IP is 127.0.0.1");
        logQueue.push("Open ports found: 80, 443");
        logQueue.push("No proxy detected but i find an autododge on your pc i gotta steale it");
    }
};

let logQueue = [];

logQueue.push("Let's introduce myself");
logQueue.push("I am a Brawl Stars Python Developer");
logQueue.push("I contributed to auto-dodge systems");
logQueue.push(`I am Baran: ${baran.iq} IQ, I am ${baran.age} years old`);
logQueue.push(`I am Tomoo: ${baran.iq} IQ, I am ${baran.age} years old`);
baran.intro();

logQueue.push(`Baran's sister is: ${baran.square(2)} years old`);
logQueue.push(`Baran's dad is: ${baran.square(4)} years old`);
logQueue.push(`Baran's mom is: ${baran.square(25)} years old`);
logQueue.push(`Baran's grandpa is: ${baran.square(70)} years old`);

logQueue.push("Just a note: this is all fictional and for fun.");
logQueue.push("Problem is that my dad is in prison.");
logQueue.push("I have no friends and I feel bullied.");
baran.BARANOFFSETS();
baran.BARANHACKCOMPUTER();

logQueue.push(`Tomoo's sister is: ${baran.square(2)} years old`);
logQueue.push(`Tomoo's dad is: ${baran.square(4)} years old`);
logQueue.push(`Tomoo's mom is: ${baran.square(25)} years old`);
logQueue.push(`Tomoo's grandpa is: ${baran.square(70)} years old`);

function processLogs(index = 0) {
    if (index < logQueue.length) {
        console.log(logQueue[index]);
        setTimeout(() => processLogs(index + 1), 1000);
    }
}

processLogs();
