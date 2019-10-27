let train = {
    trainName: $("#train-name-input").val(),
    destination: $("#destination-input").val(),
    trainTime: $("#train-time-input").val(),
    frequency: $("#frequency-input").val(),
}

console.log(trainName);
console.log(destination);
console.log(trainTime);
console.log(frequency);


// For each subsequent train that the user adds, append to child the new train object into output field
// Onclick function for submit button
function submitButton(){
$("#submit-button").click(function(){
    $(trainName).appendTo("#train-name-output");
    $(destination).appendTo("#desintation-output");
    $(trainTime).appendTo("#train-time-output");
    $(frequency).appendTo("#frequency-output");
});
};

// Onclick function for cancel button

$("#cancel-button").click(function(){
    $("#train-name-input")[0].reset();
    $("#destination-input")[0].reset();
    $("#train-time-input")[0].reset();
    $("#frequency-input")[0].reset();
});


// Onclick function for clear selected button

//$("#clear-selected-button").click(function(){
//}

// Onclick function for clear all button

$("#clear-all-button").click(function(){
    $("#train-name-output")[0].reset();
    $("#destination-output")[0].reset();
    $("#train-time-output")[0].reset();
    $("#frequency-output")[0].reset();
});

// Submit fields to local storage