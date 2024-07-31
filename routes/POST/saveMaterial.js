const saveMaterial = require("express").Router();
const modelMaterial = require("../../models/material");

//initial imports

saveMaterial.post("/save_material", async (req, res) => {
    try {
        // The 'post' method requires authentication, where you provide a name, email, etc.
        console.log(req.body);
        const surovina = new modelMaterial({
            name: req.body.name
        });
        await surovina.save();
        return res.json({
            msg: `Doslo k uspesnemu ulozeni receptu ${JSON.stringify(surovina)}`
        });
    } catch (err) {
        return res.json({
            msg: "Bohuzel nedoslo k ulozeni"
        });
    }
});

saveMaterial.get("/save_material", (req,res) => {
    res.send("Ano, navbstivil jsi /save-material GETEM")
})

module.exports = saveMaterial;

//do postmana http://localhost:5000/save_material
