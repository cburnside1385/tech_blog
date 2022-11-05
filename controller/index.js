const router = require("express").Router();

//add code later




router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;

