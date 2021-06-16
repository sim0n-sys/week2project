function finding() {

    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sartuday"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", " Afua", "Ama"];
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    var CC = parseInt(document.getElementById("num").value);
    var YY = parseInt(document.getElementById("year").value);
    var MM = parseInt(document.getElementById("int").value);
    var DD = parseInt(document.getElementById("day").value);


    var gender = document.querySelector('input[name="gender"]:checked').value;
    var dayOfTheWeek = parseInt(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7




    if (gender === "male") {
        if (dayOfTheWeek === 0) {
            alert("The day you were born was on a: "+ day[0]);
            alert("Your Akan name is: " + maleNames[0]);
        } else if (dayOfTheWeek === 1) {
            alert("The day you were born was on a: "+ day[1]);
            alert("Your Akan name is: " + maleNames[1]);
        } else if (dayOfTheWeek === 2) {
            alert( "The day you were born was on a: "+ day[2]);
            alert("Your Akan name is: " + maleNames[2]);
        } else if (dayOfTheWeek === 3) {
            alert("The day you were born was on a: "+ day[3]);
            alert("Your Akan name is: " + maleNames[3]);
        } else if (dayOfTheWeek === 4) {
            alert( "The day you were born was on a: "+ day[4]);
            alert("Your Akan name is: " + maleNames[4]);
        } else if (dayOfTheWeek === 5) {
            alert( "The day you were born was on a: "+ day[5]);
            alert("Your Akan name is: " + maleNames[5]);
        } else if (dayOfTheWeek === 6) {
            alert("The day you were born was on a: " + day[6]);
            alert("Your Akan name is: " + maleNames[6]);
        }

    } else {
        if (dayOfTheWeek === 0) {
            alert("The day you were born was on a: " + day[0]);
            alert("Your Akan name is: " + femaleNames[0]);
        } else if (dayOfTheWeek === 1) {
            alert( "The day you were born was on a: "+ day[1]);
            alert("Your Akan name is: " + femaleNames[1]);
        } else if (dayOfTheWeek === 2) {
            alert( "The day you were born was on a: "+ day[2]);
            alert("Your Akan name is: " + femaleNames[2]);
        } else if (dayOfTheWeek === 3) {
            alert( "The day you were born was on a: " + day[3]);
            alert("Your Akan name is: " + femaleNames[3]);
        } else if (dayOfTheWeek === 4) {
            alert("The day you were born was on a: " + day[4]);
            alert("Your Akan name is: " + femaleNames[4]);
        } else if (dayOfTheWeek === 5) {
            alert( "The day you were born was on a: "+ day[5]);
            alert("Your Akan name is: " + femaleNames[5]);
        } else if (dayOfTheWeek === 6) {
            alert("The day you were born was on a: "+ day[6]);
            alert("Your Akan name is: " + femaleNames[6]);
        }
    }

}