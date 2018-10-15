const database = () => (
  {
    days: [
      {
        id: "40ad3562-dfec-49ae-9489-f6fef9cb45af",
        date: "2018-10-14",
        label: "breakfast",
        meal: "c324eae4-3fe9-45f3-af69-a762aed0d8f6"
      },
      {
        id: "be2bd573-3761-463d-8c82-64661a0c4b2b",
        date: "2018-10-14",
        label: "lunch",
        meal: "be2bd573-3761-463d-8c82-64661a0c4b2b"
      },
      {
        id: "2edf043d-107c-4933-9a79-1e58a4501aae",
        date: "2018-10-14",
        label: "dinner",
        meal: "66c7fa9d-de67-4f64-8f78-a8adeaccced1"
      },
    ],
    meals: {
      "c324eae4-3fe9-45f3-af69-a762aed0d8f6": {
        name: "bacon",
      },
      "be2bd573-3761-463d-8c82-64661a0c4b2b": {
        name: "sandwich",
      },
      "66c7fa9d-de67-4f64-8f78-a8adeaccced1": {
        name: "pizza",
      },
    },
    food: {
      bacon: {
        ingredients: [
          "bacon"
        ],
        recipe: "bake at 200 degrees for 15 mins",
      },
      pizza: {
        ingredients: [
          "flour",
          "yeast",
          "water",
          "cheese",
          "tomato sauce",
          "pepperoni",
        ],
        recipe: "mix flour, yeast and water; let rise; bake at 350 degrees for 20 mins."
      },
      sandwich: {
        ingredients: [
          "bread",
          "peanut butter",
          "jelly",
        ],
        recipe: "peanut butter jelly time!",
      }
    },
    drink: {
      water: {
        ingredients: [
          "h2o"
        ],
        recipe: "tap or bottled",
      },
      coffee: {
        ingredients: [
          "roasted coffee beans",
          "water"
        ],
        recipe: "grind beans and pour 190 degree water over grinds",
      }
    }
  }
);

export default database;