import express from "express";
import fileUpload from "express-fileupload";
import { uploadFile, getFiles, getFile } from "./s3.js";

const app = express();

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads"
}));

app.get("/files", async (req, res) => {
    const result = await getFiles();
    res.json(result.Contents);
});

app.get("/files/:fileName", async (req, res) => {
    const result = await getFile(req.params.fileName);
    res.json(result);
});

app.post("/files", async (req, res) => {
    const result = await uploadFile(req.files.file)
    res.json({ result })
});

app.listen(3000)
console.log(`Server on port ${3000}`);