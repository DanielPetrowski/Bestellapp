let menu = {
    "Pizza": [
        { name: "Pizza Salami", price: 4.76, description: "Klassische Pizza mit würziger Salami und Mozzarella." },
        { name: "Pzza Funghi", price: 5.23, description: "Pizza mit frischen Champignons und cremigem Käse." },
        { name: "Pizza Texas", price: 4.80, description: "Herzhafte Pizza mit BBQ-Sauce, Bacon und Zwiebeln." },
        { name: "Pizza Sushi", price: 5.90, description: "Experimentelle Pizza mit Fisch, Wasabi und Sesam – nur für Mutige!" },
        { name: "Pizza Rolling Thunder", price: 7.43, description: "Extra-scharfe Pizza mit Jalapeños, Chorizo und Chili-Käse." },
    ],
    "Burger": [
        { name: "Cheeseburger", price: 2.70, description: "Klassischer Rindfleischburger mit geschmolzenem Käse." },
        { name: "BBQ-Burger", price: 2.95, description: "Burger mit rauchiger BBQ-Sauce und knusprigem Bacon." },
        { name: "Veggie-Burger", price: 2.85, description: "Vegetarischer Burger mit pflanzlichem Patty und frischem Gemüse." },
        { name: "Pulled-Pork-Burger", price: 3.78, description: "Saftiges Pulled Pork in BBQ-Sauce auf einem weichen Bun." },
        { name: "Fischburger", price: 3.95, description: "Knusprig panierter Fischburger mit Remoulade und Salat." },
    ],
    "Pasta": [
        { name: "Spaghetti", price: 5.76, description: "Spaghetti mit Tomatensauce und frischen Kräutern." },
        { name: "Penne", price: 5.43, description: "Penne in cremiger Sahnesauce mit Pilzen." },
        { name: "Fusilli", price: 5.22, description: "Fusilli mit Pesto Genovese und geriebenem Parmesan." },
        { name: "Tagliatelle", price: 5.78, description: "Breite Bandnudeln mit einer kräftigen Bolognese-Sauce." },
        { name: "Farfalle", price: 5.12, description: "Schmetterlingsnudeln mit Käsesauce und Brokkoli." }
    ],
    "Deutsche Kuche": [
        { name: "Schnitzel", price: 10.42, description: "Paniertes Schweineschnitzel mit Zitronenscheibe und Beilage." },
        { name: "Currywurst", price: 9.76, description: "Bratwurst in pikanter Currysauce mit Pommes." },
        { name: "Bratkartoffeln mit Speck", price: 8.56, description: "Knusprige Bratkartoffeln mit Speck und Zwiebeln." },
        { name: "Labskaus", price: 7.42, description: "Norddeutsche Spezialität aus gepökeltem Fleisch, Kartoffeln und Roter Bete." },
        { name: "Sauerbraten", price: 5.98, description: "Eingelegter Rinderbraten in kräftiger Sauce mit Knödeln." },
    ],
    "Getränke 2L": [
        { name: "Cola ", price: 4.89, description: "Erfrischende Cola in der 2-Liter-Flasche." },
        { name: "Fanta ", price: 4.86, description: "Spritzige Orangenlimonade – perfekt gekühlt genießen." },
        { name: "Sprite ", price: 4.99, description: "Zitronenlimonade mit prickelnder Frische." },
        { name: "Apfelsaft ", price: 3.42, description: "Naturtrüber Apfelsaft ohne Zuckerzusatz." },
        { name: "Tee ", price: 2.89, description: "Hausgemachter Eistee mit einem Hauch Zitrone." },
    ]
}

let cart = {}