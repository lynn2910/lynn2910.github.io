import { lstatSync, readFileSync, readdirSync } from 'node:fs';

let files = 0;
let lines = {}

const NOT_ALLOWED_KEYWORDS = ["target", "git", "LICENSE", ".idea"]
const NOT_ALLOWED_EXTENSIONS = ["png", "jpeg", "jpg", "lock", "pdf"]

function count(dir) {
    readdirSync(dir).forEach(file => {
        const path = `${dir}/${file}`;

        if (NOT_ALLOWED_KEYWORDS.some(keyword => path.includes(keyword)))
            return;

        if (NOT_ALLOWED_EXTENSIONS.some(keyword => path.endsWith("." + keyword)))
            return;

        if ((/.+\.[a-zA-Z]+$/).test(file) || lstatSync(path).isFile()) {
            files++;
            const content = readFileSync(path, 'utf8');

            let extension = file.split('.').pop()
            if (lines[extension] === undefined) {
                lines[extension] = 0
            }

            lines[extension] += content.split('\n').length;
        } else if (file !== 'node_modules' && !NOT_ALLOWED_KEYWORDS.includes(file)) {
            count(path);
        }
    });
}

count('.');

console.log(`Total files: ${files}`);
console.log(`Total lines: ${Object.values(lines).reduce((a, b) => a + b)}`);
console.log(`Lines by extension:`);

for (const [key, value] of Object.entries(lines).sort((a, b) => b[1] - a[1])) {
    console.log(`\t${key}: ${value}`);
}