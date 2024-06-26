const multer = require('multer');
const sharp = require('sharp');
const { v4: uuidv4 } = require('uuid');;
const path = require('path');

const storage = multer.memoryStorage();
const upload = multer({
    storage:storage,
    limits:{
        fileSize: 4 * 1024* 1024,
    },
});

class Resize {
    constructor(folder){
        this.folder = folder;
    }

    async save(buffer){
        const filename = Resize.filename();
        const filepath = this.filepath(filename);

        await sharp(buffer)
            .resize({width: 300, height: 300, fit: sharp.fit.inside, withoutEnlargement:true })
            .toFile(filepath);

            return(filename);
    }


    static filename() {
        return `${uuidv4()}.png`
    }

    filepath(filename){
        return path.resolve(`${this.folder}/${filename}`);

    }
}

module.exports = {upload, Resize};