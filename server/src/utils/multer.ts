import { mkdir } from "fs/promises";
import multer from "multer";
import path from "path";


const limits = {
    fileSize: 5 * 1024 * 1024
}

const uploadDir = path.join(process.cwd(), "upload", "products");

async function ensureFolderExists(dir: string) {

    await mkdir(dir, { recursive: true });
}

const storage = multer.diskStorage({
    destination(req, file, callback) {

        callback(null, uploadDir);

    },
    filename(req, file, callback) {
        const fileSuffix = Date.now() + "-" + file.filename;
        callback(null, file.fieldname + fileSuffix);
    },
})

function fileFilter() {

}

export const upload = multer({ storage, limits, fileFilter })