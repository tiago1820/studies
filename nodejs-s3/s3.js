import { S3Client, PutObjectCommand, ListObjectsCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { AWS_BUCKET_REGION, AWS_PUBLIC_KEY, AWS_SECRET_KEY, AWS_BUCKET_NAME } from "./config.js";
import fs from "fs";

const client = new S3Client({
    region: AWS_BUCKET_REGION,
    credentials: {
        accessKeyId: AWS_PUBLIC_KEY,
        secretAccessKey: AWS_SECRET_KEY

    }
});

export async function uploadFile(file) {
    const stream = fs.createReadStream(file.tempFilePath);
    const uploadParams = {
        Bucket: AWS_BUCKET_NAME,
        Key: file.name,
        Body: stream
    }

    const command = new PutObjectCommand(uploadParams);
    const result = await client.send(command);
    console.log(result);
}

export async function getFiles() {
    const command = new ListObjectsCommand({
        Bucket: AWS_BUCKET_NAME
    });
    const result = await client.send(command);
    return result;
}

export async function getFile(fileName) {
    const command = new GetObjectCommand({
        Bucket: AWS_BUCKET_NAME,
        Key: fileName
    });

    return await client.send(command);
}

export async function downloadFile(fileName) {
    const command = new GetObjectCommand({
        Bucket: AWS_BUCKET_NAME,
        Key: fileName
    });

    const result = await client.send(command);
    console.log(result);
    result.Body.pipe(fs.createWriteStream(`./images/${fileName}`));
}











