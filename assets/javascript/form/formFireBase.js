
// Initialize Firebase
var config = {
apiKey: "AIzaSyB-nT8TXB2uqJxoBMEibCYxKDp0dtjQ4S8",
authDomain: "petzone-cf2ea.firebaseapp.com",
databaseURL: "https://petzone-cf2ea.firebaseio.com",
projectId: "petzone-cf2ea",
storageBucket: "petzone-cf2ea.appspot.com",
messagingSenderId: "400389968690"
};

firebase.initializeApp(config);

// stores firebase  location to variable.
var database = firebase.database();

// establish empty variables for form info
var name = "";
var email;
var userLocation;
var animalType;
var phone;
var people;
var petReason;
var livingType;

// When the submit button is pressed, it assigns values to the variables:
$("#formSubmit").on("click", function(){
	event.preventDefault();
	var phoneLength;
	var emailCheck;
	name = $("#nameInput").val().trim();
	email = $("#emailInput").val().trim();
	userLocation = $("#locationInput").val().trim();
	phone = $("#phoneInput").val().trim();
	people = $("#peopleInput").val().trim();
	animalType = $("input[name=group1]:checked").val();
	petReason = $("input[name=group2]:checked").val();
	livingType = $("input[name=group3]:checked").val();
	phoneLength = phone.length;
	// Checks the position/existence of the necessary components of an email address:
	var pos1 = email.indexOf("@");
	var pos2 = email.lastIndexOf(".");
	if (pos1 < 1 || pos2 < pos1 + 2 || pos2 >= email.length){
			emailCheck = false;
		}

	// prevents the form from submitting if a field is incomplete/inaccurate.
	if (name === "" || userLocation === "" || people === "" || phoneLength != 12 || people === "" || emailCheck === false) {
		alert("Please fill out all fields correctly.")
	} else {
		fireBasePush();
	}
});
	// Checks to make sure the email provided makes sense:
	// function validateEmail(email) {
	// 	var pos1 = email.indexOf("@");
	// 	var pos2 = email.lastIndexOf(".");
	// 	if (pos1 < 1 || pos2 < pos1 + 2 || pos2 >= email.length){
	// 		fieldAlert();
	// 		}
	// 	}
	// adds the form information to firebase:
	function fireBasePush() {
		database.ref().push({
		name: name,
		email: email,
		location: userLocation,
		phone: phone,
		peopleInHousehold: people,
		animalType: animalType,
		livingType: livingType,
		reasonForPet: petReason,
		})
		$("#nameInput").val("");
		$("#emailInput").val("");
		$("#locationInput").val("");
		$("#phoneInput").val("");
		$("#peopleInput").val("");
		$("#petTypeInput").val("");
		$("#relationshipInput").val("");
	};
