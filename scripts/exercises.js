// QUESTION ONE
// Show me how to calculate the average price of all items. Please console.log the average.
// The output should be "The average price is $23.63"

var etsyPrice;
var total = 0;
var avg = 0;

etsyItems.forEach(function(item){
  total = total += item.price;
});
console.log(total / etsyItems.length);

avg = Math.round((total / etsyItems.length) * 100) / 100;


// QUESTION TWO
// Show me how to get an array of items that cost between $14.00 and $18.00 USD
// The output should be the three objects, which will look something like:
//
// "Items that cost between $14.00 USD and $18.00 USD:"
// [
//   {
//      title: "1970s Coors Banquet Glass Beer Pitcher",
//      ...
//   },
//   {
//      title: "The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug",
//      ...
//   },
//   {
//      title: "Hand Painted Colorful Feather Glass",
//      ...
//   }
// ]



var result = etsyItems.filter(function(range){
   return range.price > 14 && range.price < 18;

});
console.log(result);


// QUESTION THREE
// Show me how find the item with a "GBP" curreny code and print its name and price. Please console.log the one you find.
// The output should be "1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18"

var gbp = etsyItems.filter(function(currency){
  return currency.currency_code == 'GBP';
});


console.log(gbp[0].title, gbp[0].price)
;
// QUESTION FOUR
// Show me how to find which items are made of wood. Please console.log the ones you find.
// The output should be:
//
// SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
// Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
// Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
// Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
// Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.

var wood = etsyItems.filter(function(material){
  return material.materials.indexOf('wood') != -1;

})

console.log(wood[0].title, "is made of wood")


// QUESTION FIVE
// Show me how to find which items are made of eight or more materials. Please console.log the ones you find.
//

var matLength = 0;

var greaterEight = etsyItems.forEach(function(long) {
  if (long.materials.length >= 8) {
    console.log(long.title + ' has ' + long.materials.length + ' materials ' + long.materials);
  }
});


// console.log(greaterEight[].materials)
// var greaterThan = itemsLength.filter(function(sort) {
// })



// The output should be:
// Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
// wall mount bottle opener
// wedding
// man cave
// christmas gift
// guy gift
// fathers day
// home bar
// beer
// bar
//
//
// The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:
// glass
// sandblast cabinet
// vinyl
// beer glass
// pint glass
// etched pint glass
// etched glass
// etched beer glass
// 16 oz pint
// beer gift
// etched harry potter glass
// the three broomsticks glass
// personalized harry potter glass


// QUESTION 6
// Show me how to calculate how many items were made by their sellers
// The output should be "18 were made by their sellers"


var made = etsyItems.filter(function(maker){
  return maker.who_made == 'i_did';
})



console.log(made.length," were made by their sellers")
