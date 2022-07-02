// To exend node modules
var add =  require('./add');

// add your new functionality
add.addP = function(a, b) {
    console.log("This is addP");
    return `${a} + ${b} = ${a + b}`;
};

add.nothing = function() {
    return "Nothing";
}
// export the module.

module.exports = add;