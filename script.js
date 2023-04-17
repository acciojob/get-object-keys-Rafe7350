//your JS code here. If required.
// create the student object
const student = {
    name: "John Doe",
  };
  
  // add a getKeys() method to the Object prototype
  Object.prototype.getKeys = function() {
    return Object.keys(this);
  };
  
  // test the getKeys() method on the student object
  console.log(student.getKeys()); // output: ["name"]
  