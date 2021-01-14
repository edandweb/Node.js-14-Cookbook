const fs = require('fs/promises');
const path = require('path');
const filepath = path.join(process.cwd(), "hello.txt");

async function run() {
    try {
        const contents = await fs.readFile(filepath, "utf8");
        console.log("File Contents:", contents);

        const upperContents = contents.toUpperCase();
        await fs.writeFile(filepath, upperContents);
        console.log("File Updated");

    } catch (error) {
        console.log(error);
    }
}

run();

setInterval(() => process.stdout.write("**** \n"), 1).unref();
