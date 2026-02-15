import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILE_PATH = path.join(__dirname, "../../data/badges-history.json");

function loadFile() {
  if (!fs.existsSync(FILE_PATH)) {
    return {};
  }

  return JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
}

function saveFile(data) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
}

export function getUserBadges(username) {
  const data = loadFile();
  return data[username]?.badges || [];
}

export function saveUserBadges(username, badges) {
  const data = loadFile();

  data[username] = {
    lastCheck: new Date().toISOString(),
    badges
  };

  saveFile(data);
}