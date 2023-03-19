const express = require("express");
const Room = require("../modules/room");
const router = express.Router();

// output list of all rooms
router.get("/list", async (req, res) => {
    try {
        let rooms = await Room.find();
        res.json({data: rooms});
    } catch (err) {
        throw err;
    }
});

// output a single room by roomId
router.get("/:roomId", async (req, res) => {
    try {
        let room = await Room.findOne({_id: req.params.roomId});
        if (room) {
            res.json({data: room});
        }
    } catch (err) {
        throw err;
    }
});

module.exports = router;