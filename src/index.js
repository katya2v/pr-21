// Завдання 1
console.log('"10" + 5 =', "10" + 5, "тип:", typeof ("10" + 5));
console.log('"10" - 5 =', "10" - 5, "тип:", typeof ("10" - 5));
console.log('"10" * "2" =', "10" * "2", "тип:", typeof ("10" * "2"));
console.log("10 + true =", 10 + true, "тип:", typeof (10 + true));
console.log("10 + false =", 10 + false, "тип:", typeof (10 + false));
console.log(
  'Number("125 грн") =',
  Number("125 грн"),
  "тип:",
  typeof Number("125 грн"),
);
console.log('Number("") =', Number(""), "тип:", typeof Number(""));
console.log(
  'Boolean("false") =',
  Boolean("false"),
  "тип:",
  typeof Boolean("false"),
);
console.log('Boolean("") =', Boolean(""), "тип:", typeof Boolean(""));

// Завдання 2
const items = [ //масив товарів не змінюється тому const
  { name: "Товар 1", price: 600, quantity: 2 },
  { name: "Товар 2", price: 150, quantity: 3 },
  { name: "Товар 3", price: 700, quantity: 1 },
];

const VAT_RATE = 0.2; // ставка ПДВ фіксована тому const

function ItemCostCalculator(item) { // функція доступна у всьому файлі
  return item.price * item.quantity;
}

function OrderSumCalculator(order) {
  let total = 0; //змінна для накопичення суми змінюється під час циклу тому let
  let vatArray = []; // масив для результатів пдв також змінюється тому теж let

  for (let item of order) { // let бо кожна ітерація має свою змінну item
    const cost = ItemCostCalculator(item);
    const vat = cost * VAT_RATE;
    total += cost + vat;

    vatArray.push({ name: item.name, vat: vat });
  }

  console.log("Загальна вартість замовлення:", total);
  console.log("ПДВ по товарах:", vatArray);

  return total;
}

OrderSumCalculator(items);
