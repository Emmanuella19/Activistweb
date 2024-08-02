var factList = [
  "A study by WaterAid and UNICEF revealed that 1 in 3 girls in South Asia knew nothing about menstruation before their first period. In India, 71% of girls reported having no knowledge of menstruation before their first period",
  "The cost of menstrual products can be a significant financial burden. In Kenya, for instance, 65% of women and girls cannot afford sanitary pads. Additionally, a 2018 study estimated that women in the US spend an average of $150 annually on menstrual products", 
  "In Nepal, a traditional practice called 'Chhaupadi' which isolates menstruating women and girls, was outlawed in 2005, but it still continues in some areas, leading to severe health risks and sometimes death",
" Scotland became the first country in the world to provide free menstrual products to anyone who needs them, following the passing of the Period Products (Free Provision) (Scotland) Act in 2020",
"The average woman uses approximately 11,000 sanitary products in her lifetime, which underscores the ongoing need for affordable and sustainable menstrual products",
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
