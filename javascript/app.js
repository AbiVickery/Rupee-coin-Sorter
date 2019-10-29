function rupeeSorter (green = 0, blue = 0, yellow = 0, red = 0, purple = 0, orange = 0, silver = 0, gold = 0) {
    var rupees = {
        greenRupee: green,
        blueRupee: blue,
        yellowRupee: yellow,
        redRupee: red,
        purpleRupee: purple,
        orangeRupee: orange,
        silverRupee: silver,
        goldRupee: gold
    }

    console.log(rupees);
    document.write(rupees);

    for(let rupee in rupees) {
        console.log(rupees[rupee]);
        document.write(rupees[rupee]);
    }
}


rupeeSorter(1, 5, 10, 20, 50, 100, 200, 300);