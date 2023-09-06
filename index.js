//console.log($(".increment"));

/* for (let i = 0; i < $(".increment").length; i++) {
    let count = 0;


} */

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;

// 1 //

$("#inc-1").click(function() {

    if (count1 >= 0 && count1 <= 8) {
        count1 += 1;
    } else {
        count1 = 0;
    }

    $("#num-1").text(count1);

});

$("#dec-1").click(function () {

    if (count1 >= 1 && count1 <= 9) {
        count1 -= 1;
    } else {
        count1 = 9;
    }

    $("#num-1").text(count1);
    
});

// 2 //

$("#inc-2").click(function() {

    if (count2 >= 0 && count2 <= 8) {
        count2 += 1;
    } else {
        count2 = 0;
    }

    $("#num-2").text(count2);

});

$("#dec-2").click(function () {

    if (count2 >= 1 && count2 <= 9) {
        count2 -= 1;
    } else {
        count2 = 9;
    }

    $("#num-2").text(count2);
    
});

// 3 //

$("#inc-3").click(function() {

    if (count3 >= 0 && count3 <= 8) {
        count3 += 1;
    } else {
        count3 = 0;
    }

    $("#num-3").text(count3);

});

$("#dec-3").click(function () {

    if (count3 >= 1 && count3 <= 9) {
        count3 -= 1;
    } else {
        count3 = 9;
    }

    $("#num-3").text(count3);
    
});

// 4 //

$("#inc-4").click(function() {

    if (count4 >= 0 && count4 <= 8) {
        count4 += 1;
    } else {
        count4 = 0;
    }

    $("#num-4").text(count4);

});

$("#dec-4").click(function () {

    if (count4 >= 1 && count4 <= 9) {
        count4 -= 1;
    } else {
        count4 = 9;
    }

    $("#num-4").text(count4);
    
});

// 5 //

$("#inc-5").click(function() {

    if (count5 >= 0 && count5 <= 8) {
        count5 += 1;
    } else {
        count5 = 0;
    }

    $("#num-5").text(count5);

});

$("#dec-5").click(function () {

    if (count5 >= 1 && count5 <= 9) {
        count5 -= 1;
    } else {
        count5 = 9;
    }

    $("#num-5").text(count5);
    
});

// 6 // 

$("#inc-6").click(function() {

    if (count6 >= 0 && count6 <= 8) {
        count6 += 1;
    } else {
        count6 = 0;
    }

    $("#num-6").text(count6);

});

$("#dec-6").click(function () {

    if (count6 >= 1 && count6 <= 9) {
        count6 -= 1;
    } else {
        count6 = 9;
    }

    $("#num-6").text(count6);
    
});

// 7 //

$("#inc-7").click(function() {

    if (count7 >= 0 && count7 <= 8) {
        count7 += 1;
    } else {
        count7 = 0;
    }

    $("#num-7").text(count7);

});

$("#dec-7").click(function () {

    if (count7 >= 1 && count7 <= 9) {
        count7 -= 1;
    } else {
        count7 = 9;
    }

    $("#num-7").text(count7);
    
});


// log timeline //

$("#log-data").click(function() {
    let divergence =" " + count1 + "" + "." + count2 + "" + count3 + "" + count4 + "" + count5 + "" + count6 + "" + count7 + " " + "|";
    $("h3").append(divergence);
})