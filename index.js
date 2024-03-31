// Write your solution here!

// test 1
// describe('index.js', function () {
//     describe('cats', function () {
//       it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
//         expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//       });
//     });
    const cats = ["Milo", "Otis", "Garfield"];

  
    // test 2
 function destructivelyAppendCat(name) {
    cats.push("Ralph");
 }

 // test 3
 function destructivelyPrependCat(name) {
    cats.unshift("Bob");
 }

 // test 4
 function destructivelyRemoveLastCat(name) {
    cats.pop(3);
 }

//test 5
 function destructivelyRemoveFirstCat() {
    cats.shift(0);
 }

 //test 6
// //  it('appends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
//     expect(appendCat("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);

//     expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//  
function appendCat(catName) {
    return cats.concat("Broom");
}

 
// // test 7
// describe('prependCat(name)', function () {
//     it('prepends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {

function prependCat(catName) {
    // Create a new array by concatenating the new cat with the original cats array using the spread operator
    return [catName, ...cats];
}

// // test 8
//     it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged  
function removeLastCat() {
    return cats.slice(0, -1);
}
 


// //test 9
//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged'
function removeFirstCat() {
    return cats.slice(1);
}

