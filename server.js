const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const dbConnect = require("./database/connect"); // Correct the path to your connect.js file
const getMaterial = require("./routes/GET/getMaterial");
const saveMaterial = require("./routes/POST/saveMaterial");
dbConnect(); // Call the exported connect method

/**
 * Routy - GET
 */

app.use("/",getMaterial); //tady to davame jenom s lomitkem at je to lehci a prehlednejsi
/**
 * 
 * Routy - POST
 */

/**
 * posilame tam postmenem - Middleware
 * povolujeme oprijmat JSON z frontENDU
 */
app.use(express.json({exptended:false})); //nebo express treba text
app.use("/", saveMaterial);
app.get("/", (req, res) => {
    res.send("Jsi na hlavni strance");
});


app.listen(PORT, () => {
    console.log(`Server bezi na ${PORT}!`);
});



/*function ovladacSekce() {
    const obrazekSekce = document.getElementById("profilovy-obrazek");
    const sekce = document.getElementById("platno-sekce");

    sekce.addEventListener("mouseover", function() {
        obrazekSekce.style.border = "3px solid pink"; // Apply pink border
    });

    sekce.addEventListener("mouseleave", function() {
        obrazekSekce.style.border = "3px solid white"; // Apply white border
    });
}

// Call the function to set up the event listeners
ovladacSekce();
*/