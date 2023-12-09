import fs from 'fs';
import path from 'path';
// import matter from "gray-matter";

export function getFileList(dirPath) {
    const fileDirectory = path.join(process.cwd(), dirPath);
    const mdFileNames = fs.readdirSync(fileDirectory);

    return mdFileNames;
}

export function getFileData(filename, dirPath) {
    const fileDirectory = path.join(process.cwd(), dirPath);

    // removes the file extension
    const filePath = path.join(fileDirectory, `${filename}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // const { data, content } = matter(fileContent);

    const fileData = {
        slug: filename,
        // ...data,
        content: fileContent,
    };

    // console.log('fileData: ', fileData);

    return fileData;
}
