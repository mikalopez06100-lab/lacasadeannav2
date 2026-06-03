import fs from "fs";

const html = fs.readFileSync(
  "c:/Users/ppmpc/Desktop/MasterPrompt/analyse/la casa de anna/V2/lacasadeanna-landing-v4.html",
  "utf8"
);

const stripped = html
  .replace(/src="data:image[^"]+"/g, 'src="/assets/img/placeholder.jpg"')
  .replace(/<script[\s\S]*?<\/script>/gi, "")
  .replace(/<style>[\s\S]*?<\/style>/, "");

const bodyStart = stripped.indexOf("<body>");
const bodyEnd = stripped.lastIndexOf("</body>");
const body = stripped.slice(bodyStart, bodyEnd + 7);

fs.writeFileSync(
  "c:/Users/ppmpc/lacasadeanna2/scripts/body-stripped.html",
  body
);
console.log("Written body-stripped.html", body.length, "chars");
