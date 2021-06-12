const express = require("express");

const {authors: ctrl} = require("../controllers");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getOne);

router.post("/", express.json(), ctrl.add);

router.put("/:id", express.json(), ctrl.update);

router.patch("/:id", express.json(), ctrl.updateStatus);

router.delete("/:id", ctrl.del);

module.exports = router;
