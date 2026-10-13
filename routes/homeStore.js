const fs = require("fs");
const path = require("path");

const homesFile = path.join(__dirname, "..", "data", "homes.json");

function readHomes() {
    try {
        const homes = JSON.parse(fs.readFileSync(homesFile, "utf8"));
        return Array.isArray(homes) ? homes : [];
    } catch (error) {
        if (error.code === "ENOENT") {
            return [];
        }
        throw error;
    }
}

function addHome(houseName) {
    const homes = readHomes();
    const home = { houseName };
    homes.push(home);
    fs.mkdirSync(path.dirname(homesFile), { recursive: true });
    fs.writeFileSync(homesFile, `${JSON.stringify(homes, null, 2)}\n`, "utf8");
    return home;
}

module.exports = { readHomes, addHome };
