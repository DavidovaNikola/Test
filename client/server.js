const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const dbConnect = require("./database/connect"); // Correct the path to your connect.js file

dbConnect(); // Call the exported connect method

app.get("/", (req, res) => {
    res.send("Toto je jina stranka ");
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