function ovladacSekce() {
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