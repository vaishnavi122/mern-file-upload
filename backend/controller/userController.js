const { avatarUpload, galleryUpload } = require("../utils/upload")
const user = require("./../models/user")

exports.addAvatar = async (req, res) => {
    try {
        avatarUpload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "multer error" + err
                })
            }
            // console.log(req.body);
            // console.log(req.file.filename);
            const result = await user.create({
                ...req.body,
                profile: `profile/${req.file.filename}`
            })
            res.json({
                success: true,
                message: "avatar add succesfully"
            })
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: " error" + error
        })
    }
}


exports.getAllAvatar = async (req, res) => {
    try {
        const result = await user.find()
        res.json({
            success: true,
            message: "avatar fetched succesfully",
            result
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: " error" + error
        })
    }
}


// mutiple files
exports.addToGallary = async (req, res) => {
    try {
        galleryUpload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "multer error" + err
                })
            }
            console.log(req.body);
            console.log(req.files);
            const d = []
            for (let i = 0; i < req.files.length; i++) {
                d.push(`gallery/${req.files[i].filename}`)
            }
            console.log(d);
            const result = await user.create({
                ...req.body,
                docs: d
            })
            res.json({
                success: true,
                message: "doc add succesfully"
            })
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: " error" + error
        })
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const result = await user.find()
        res.json({
            success: true,
            message: "users fetched succesfully",
            result
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: " error" + error
        })
    }
}




// 5th