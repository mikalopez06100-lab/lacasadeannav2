import { execSync } from "child_process";

const ports = [3000, 3001];

for (const port of ports) {
  try {
    const out = execSync(
      `netstat -ano | findstr :${port}`,
      { encoding: "utf8", stdio: ["pipe", "pipe", "ignore"] }
    );
    const pids = new Set();
    for (const line of out.split("\n")) {
      const parts = line.trim().split(/\s+/);
      const pid = parts[parts.length - 1];
      if (pid && /^\d+$/.test(pid)) pids.add(pid);
    }
    for (const pid of pids) {
      try {
        execSync(`taskkill /F /PID ${pid}`, { stdio: "ignore" });
        console.log(`Port ${port} : processus ${pid} arrêté`);
      } catch {
        /* déjà terminé */
      }
    }
  } catch {
    /* aucun processus sur ce port */
  }
}
