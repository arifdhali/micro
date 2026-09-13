import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const apps = ["host-mf", "product-mf", "cart-mf"];

const root = process.cwd();

const releasesDir = path.join(root, "deployment", "releases");
const snapshotsDir = path.join(root, "deployment", "snapshots");

fs.mkdirSync(releasesDir, { recursive: true });
fs.mkdirSync(snapshotsDir, { recursive: true });


// Generate unique deployment ID
const timestamp = new Date()
  .toISOString()
  .replace(/[-:T.Z]/g, "")
  .slice(0, 14);

const deploymentId = `build-${timestamp}`;

console.log(`\nDeploying: ${deploymentId}\n`);


// 1. Build every application
for (const app of apps) {
  console.log(`Building ${app}...`);

  execSync("npm run build", {
    cwd: path.join(root, "apps", app),
    stdio: "inherit",
  });
}


// 2. Copy each dist into immutable release directory
const snapshot = {};

for (const app of apps) {
  const appReleaseDir = path.join(
    releasesDir,
    app,
    deploymentId
  );

  fs.mkdirSync(appReleaseDir, {
    recursive: true,
  });

  const distDir = path.join(
    root,
    "apps",
    app,
    "dist"
  );

  fs.cpSync(distDir, appReleaseDir, {
    recursive: true,
  });

  snapshot[app] = deploymentId;
}


// 3. Find next snapshot number
const existingSnapshots = fs
  .readdirSync(snapshotsDir)
  .filter(file => file.startsWith("snapshot-"))
  .filter(file => file.endsWith(".json"));

const nextNumber = existingSnapshots.length + 1;

const snapshotName = `snapshot-${String(nextNumber).padStart(3, "0")}.json`;


// 4. Write snapshot
const snapshotPath = path.join(snapshotsDir, snapshotName);

fs.writeFileSync(
  snapshotPath,
  JSON.stringify(
    {
      id: snapshotName.replace(".json", ""),
      createdAt: new Date().toISOString(),
      applications: snapshot,
    },
    null,
    2
  )
);

const activeSnapshotPath = path.join(root, "deployment", "active.json");

fs.writeFileSync(activeSnapshotPath, JSON.stringify({
  snapshot: snapshotName.replace(".json", ""),
}, null, 2));

console.log(`\n✅ Deployment created`);
console.log(`Snapshot: ${snapshotName}`);
console.log(`Deployment: ${deploymentId}\n`);
console.log(`Active snapshot: ${snapshotName}\n`);