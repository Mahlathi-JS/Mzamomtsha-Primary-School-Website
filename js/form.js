//Input fields
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var tel = document.getElementById("tel");
var address = document.getElementById("adress");
var country = document.getElementById("country");

funtion validateFirstName() {
  //Check if it is empty
   if (firstName == Null || firstName == "") {
       alert("First name is required");
       return false;
    }
}
funtion validateLastName() {
  //Check if it is empty
   if (lastName == Null || lastName == "") {
      alert("Last name is required");
      return false;
   }
 }
 funtion validateTel() {
//Check if it is empty
if ( tel == Null || tel == "") {
   alert("Phone number is required");
   return false;
if (checkIfEmpty)(telephone)) return;
//Must be of certain length
function meetLength(value, minLength, maxLength) {
  if (field.value.length == 10);
  return true; {
    else if (field.value.length <> 10)
     setInvalid(field, ''${field.name} must be 10 characters long');
     return false;
  }
}
funtion validateEmail(mail) {
  if (/^W+([]\.-]))?\W+)*@W+([\.-]?\W+)*(\.\W{2'3})+$/.test(MyForm.emailAddr.value))
  {
    return true;
  }
  alert("You have entered an invalid email address!")
  return false;
}
  funtion validateAdress() {
  {
var a = document.form.address.value;
    if (a =="")
  {
    alert("Please enter your details here");
    document.form.address.focus();
    return false;
  }
  if((a.length < 20) || a.length >100)
  {
    alert("Your textarea must be 20 to 100 characters");
    document.form.address.select();
    return false;
  }
  $scope.GetSelectedCountry = funtion () { //Get the selected Country
   $scope .strCountry = document.getElementById("country").value;
