const fs = require('fs/promises');
const path = require('path');

const filepath = path.join(process.cwd(), "hello.txt");

fs.readFile(filepath, "utf8").then((contents) => {
    console.log("File Contents:", contents);

    const upperContents = contents.toUpperCase();
    setTimeout(() => updateFile(filepath, upperContents), 10);
}).catch((err) => {
    return console.log(err);
});

function updateFile(filePath, contents) {
    fs.writeFile(filepath, contents).then(() => {
        console.log("File Updated");
    }).catch((err) => {
        throw err;
    });
}

setInterval(() => process.stdout.write("**** \n"), 1).unref();
