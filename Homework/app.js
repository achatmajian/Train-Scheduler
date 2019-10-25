$(document).ready(function() {
    $('#output-table').DataTable( {
        columnDefs: [ {
            orderable: false,
            className: 'select-checkbox',
            targets:   0
        } ],
        select: {
            style:    'os',
            selector: 'td:first-child'
        },
        order: [[ 1, 'asc' ]]
    } );
} );


// Make each train entry an object, with variables as info

let train = {
    trainName: "",
    destination: "",
    trainTime: "",
    frequency: "",
};

// Make an empty array for train entries to go into

let trainArray = [];

// Have train object data populate in empty div for train info in output field

function pushOject(train){
    train.push(trainArray)
};

// For each subsequent train that the user adds, append to child the new train object into output field
// Onclick function for submit button

$("#submit-button").click(function(){
    document.getElementById("#input-field").submit();
    $("#text1").append(trainName);
    $("#text2").append(destination);
    $("#text3").append(trainTime);
    $("#text4").append(frequency);
}

// Onclick function for cancel button

$("#cancel-button").click(function(){
    document.getElementById("input-field").reset();
}

// Onclick function for clear selected button

$("#clear-selected-button").click(function(){

}

// Onclick function for clear all button

$("#clear-all-button").click(function(){

}

// Submit fields to local storage