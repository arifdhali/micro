import fs from "fs";
import path from "path";

const root = process.cwd();

const snapshotId = process.argv[2];

if (!snapshotId) {
    console.error(" Please provide a snapshot ID");
    console.error("Example: npm run rollback -- snapshot-001");
    process.exit(1);
}

const snapshotsDir = path.join(root, "deployment", "snapshots");
const activeSnapshotPath = path.join(
    root,
    "deployment",
    "active.json"
);

const snapshotPath = path.join(
    snapshotsDir,
    `${snapshotId}.json`
);


// Check snapshot exists
if (!fs.existsSync(snapshotPath)) {
    console.error(`❌ Snapshot not found: ${snapshotId}`);
    process.exit(1);
}


// Read snapshot
const snapshot = JSON.parse(fs.readFileSync(snapshotPath, "utf-8"));


// Update active snapshot
fs.writeFileSync(
    activeSnapshotPath,
    JSON.stringify(
        {
            snapshot: snapshot.id,
        },
        null,
        2
    )
);

console.log(`  Rollback successful`);
console.log(`Active snapshot: ${snapshot.id}\n`);

console.log("Applications:");

for (const [app, build] of Object.entries(snapshot.applications)) {
    console.log(`  ${app} → ${build}`);
}

console.log("");