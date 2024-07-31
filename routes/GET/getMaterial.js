const express = require("express");
const router = express.Router();
const material = require("../../models/material");

router.get("/get-materials", async (req, res) => {
    try {
        const docs = await material.find({});
        return res.json({
            msg: "Úspěšně se nám podařilo získat suroviny",
            documents: docs
        });
    } catch (err) {
        return res.json({
            msg: "Bohužel se nepodařilo získat žádné dokumenty",
            documents: []
        });
    }
});

module.exports = router;

    //const getMaterial = express.Router();
    /*try {
        const docs = await materials.find({});
        return res.json({
            msg: "Úspěšně se nám podařilo získat suroviny",
            documents: docs
        });
    } catch (err) {
        console.error(err);
        return res.json({
            msg: "Bohužel se nepodařilo získat žádné dokumenty",
            documents: []
        });
    }
});
    /**res.json({
        msg: "Successfully obtained materials",
        seznamSuroviny: [
            { surovina: "Mrkev" },
            { surovina: "Celer" },
            { surovina: "Brambora" }
        ]
    });
});
**/


