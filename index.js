// Write your code here
class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

class Lunch {
  constructor(salad, soup, drink) {
    this.soup = soup;
    this.salad = salad;
    this.drink = drink;
  }
}

class Dinner {
  constructor(salad, soup, entree, dessert) {
    this.entree = entree;
    this.salad = salad;
    this.soup = soup;
    this._dessert = dessert;
  }
}
