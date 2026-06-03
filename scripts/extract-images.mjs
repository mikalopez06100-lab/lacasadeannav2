import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath =
  process.env.SOURCE_HTML ??
  "c:/Users/ppmpc/Desktop/MasterPrompt/analyse/la casa de anna/V2/lacasadeanna-landing-v4.html";
const outDir = path.join(root, "public/assets/img");

fs.mkdirSync(outDir, { recursive: true });

const html = fs.readFileSync(htmlPath, "utf8");
const re = /src="(data:image\/(png|jpeg|webp);base64,[^"]+)"/g;

const map = {
  logo: "logo.png",
  studio: "studio.jpg",
  "proj-1": "loft-pringy.jpg",
  "proj-2": "sous-les-toits.jpg",
  "proj-3": "comme-a-l-hotel.jpg",
  "proj-4": "la-foret.jpg",
  "proj-5": "l-escalier.jpg",
  "proj-6": "chambre-anna.jpg",
  "proj-7": "le-detail.jpg",
  "press-1": "press-1.jpg",
  "press-2": "press-2.jpg",
};

const keys = Object.keys(map);
let m;
let i = 0;

while ((m = re.exec(html)) !== null) {
  const key = keys[i] ?? `extra-${i}`;
  const ext = m[2] === "png" ? "png" : "jpg";
  const filename = map[key] ?? `img-${String(i + 1).padStart(2, "0")}.${ext}`;
  const buf = Buffer.from(m[1].split(",")[1], "base64");
  fs.writeFileSync(path.join(outDir, filename), buf);
  i++;
}

console.log(`Extracted ${i} images to ${outDir}`);
