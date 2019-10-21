$(document).ready(function(){
    var allergenObj = {
        allergens: []
    };
    $("#submit").click(function(){
        allergenObj.allergens.push($("#myAllergens").val());
        $("ul").append("<li>" + $("#myAllergens").val() + "</li>");
    });
    console.log(allergenObj);
    var allergenJSON = JSON.stringify(allergenObj);
    console.log(allergenJSON);
})