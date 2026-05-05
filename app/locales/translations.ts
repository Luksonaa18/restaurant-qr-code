export type Lang = "en" | "ru" | "tr" | "ge";
export type CategoryKey =
  | "drinks"
  | "sauces"
  | "alcohol"
  | "soups"
  | "salads"
  | "asorts"
  | "meat"
  | "snacks"
  | "pastry";
export type ItemKey =
  | "raspberry-lemonade"
  | "energy-drink"
  | "strawberry-lemonade"
  | "watermelon-lemonade"
  | "mint-lemonade"
  | "cold-coffee"
  | "cappuccino"
  | "fish-desk"
  | "americano"
  | "latte"
  | "espresso"
  | "tyemali"
  | "satsebeli"
  | "adjika"
  | "ketchup"
  | "mayonnaise"
  | "baje"
  | "barbecue-sauce"
  | "nasharab"
  | "chacha"
  | "chacha-peach"
  | "chacha-honey"
  | "absolut"
  | "nemiroff"
  | "finlandia"
  | "raki"
  | "efes-gold"
  | "whisky"
  | "jack-daniels"
  | "chivas-regal"
  | "red-label"
  | "jameson"
  | "karva"
  | "natakhtari"
  | "efes"
  | "heineken"
  | "corona"
  | "draft-beer"
  | "chicken-soup"
  | "mushroom-cream"
  | "mushroom-soup"
  | "kharcho"
  | "lentil-soup"
  | "ishkembe"
  | "chorba"
  | "yogurt-soup"
  | "red-bean"
  | "atom"
  | "choban-salad"
  | "zetisxili"
  | "season-salad"
  | "caesar-chicken"
  | "caesar-shrimp"
  | "cheese-asort"
  | "pickles-asort"
  | "phkhali-asort"
  | "kisir"
  | "fruit-asort"
  | "wawtermelon-melon"
  | "carrot-yogurt"
  | "europe-cheese"
  | "liver-bbq"
  | "lamb-bbq"
  | "lamb-ribs"
  | "adana-kebab"
  | "chicken-bbq"
  | "chicken-wings"
  | "smoked-lamb"
  | "family-lamb"
  | "salkhino"
  | "chabaka-chick"
  | "madam-bouvar"
  | "steak"
  | "beef-steak"
  | "ribs-ajika"
  | "family-chicken"
  | "sausage-desk"
  | "liver-withsauce"
  | "raw-beef1"
  | "orshtorvis-plate"
  | "kiev-coutlet"
  | "mixed-grill"
  | "kebab-pan"
  | "shrimp"
  | "french-fries"
  | "mexican"
  | "hatai"
  | "turkish-cheese"
  | "georgian-cheese"
  | "smoked-cheese"
  | "fkhali-asorti"
  | "green-bouqet"
  | "badrijani"
  | "spaghetti"
  | "carbonnara"
  | "penne-arabica"
  | "bolonezaa"
  | "4cheese"
  | "imerian-xaxhapuri"
  | "megrelian-xaxhapuri"
  | "royal"
  | "adjarian"
  | "mchadi"
  | "lobiani"
  | "kretian-cheece";
type UIKey = "clear-cart" | "product" | "total";

type TranslationSchema = {
  categories: Partial<Record<CategoryKey, string>>;
  items: Record<ItemKey, string>;
  ui: Partial<Record<UIKey, string>>;
};

export const translations: Record<Lang, TranslationSchema> = {
  en: {
    categories: {
      drinks: "Drinks",
      sauces: "Sauces",
      alcohol: "Alcoholic Drinks",
      soups: "Soups",
      salads: "Salads",
      asorts: "Assorted Plates",
      meat: "Meat Dishes",
      snacks: "Snacks",
      pastry: "Pastry & Pasta",
    },
    items: {
      "raspberry-lemonade": "Raspberry Lemonade",
      "energy-drink": "Energy Drink",
      "strawberry-lemonade": "Strawberry Lemonade",
      "watermelon-lemonade": "Watermelon Lemonade",
      "mint-lemonade": "Mint Lemonade",
      "cold-coffee": "Cold Coffee",
      cappuccino: "Cappuccino",
      americano: "Americano",
      latte: "Latte",
      espresso: "Espresso",

      tyemali: "Tkemali",
      satsebeli: "Satsebeli",
      adjika: "Adjika",
      ketchup: "Ketchup",
      mayonnaise: "Mayonnaise",
      baje: "Walnut Sauce (Baje)",
      "barbecue-sauce": "Barbecue Sauce",
      nasharab: "Pomegranate Sauce",

      chacha: "Chacha",
      "chacha-peach": "Peach Chacha",
      "chacha-honey": "Honey Chacha",
      absolut: "Absolut Vodka",
      nemiroff: "Nemiroff Vodka",
      finlandia: "Finlandia Vodka",
      raki: "Raki",
      whisky: "Whisky",
      "jack-daniels": "Jack Daniel's",
      "chivas-regal": "Chivas Regal",
      "red-label": "Johnnie Walker Red Label",
      jameson: "Jameson",

      karva: "Karva Beer",
      natakhtari: "Natakhtari Beer",
      efes: "Efes Beer",
      "efes-gold": "Efes Gold",
      heineken: "Heineken",
      corona: "Corona",
      "draft-beer": "Draft Beer",

      "chicken-soup": "Chicken Soup",
      "mushroom-cream": "Cream of Mushroom Soup",
      "mushroom-soup": "Mushroom Soup",
      kharcho: "Kharcho",
      "lentil-soup": "Lentil Soup",
      ishkembe: "Tripe Soup",
      chorba: "Chorba",
      "yogurt-soup": "Yogurt Soup",
      "red-bean": "Stewed Red Beans",
      atom: "Atom (Yogurt & Butter)",

      "choban-salad": "Shepherd Salad",
      zetisxili: "Chopped Olives",
      "season-salad": "Seasonal Salad",
      "caesar-chicken": "Caesar Salad (Chicken)",
      "caesar-shrimp": "Caesar Salad (Shrimp)",

      "cheese-asort": "Cheese Assortment",
      "pickles-asort": "Pickles Assortment",
      "phkhali-asort": "Pkhali Assortment",
      kisir: "Kisir",
      "fruit-asort": "Fruit Assortment",
      "wawtermelon-melon": "Watermelon & Melon",
      "carrot-yogurt": "Carrot with Yogurt",
      "europe-cheese": "European Cheese Platter",

      "liver-bbq": "Grilled Liver",
      "lamb-bbq": "Lamb BBQ",
      "lamb-ribs": "Lamb Ribs",
      "adana-kebab": "Adana Kebab",
      "chicken-bbq": "Chicken BBQ",
      "chicken-wings": "Chicken Wings",
      "smoked-lamb": "Braised Veal",
      "family-lamb": "Family Style Veal",
      salkhino: "Salkhino",
      "chabaka-chick": "Baby Chicken",
      "madam-bouvar": "Madam Bovary",
      steak: "Steak",
      "beef-steak": "Beef Steak",
      "ribs-ajika": "Ribs with Adjika",
      "family-chicken": "Family Chicken",
      "sausage-desk": "Sausage Platter",
      "liver-withsauce": "Liver with Sauce",
      "raw-beef1": "Raw Beef Balls",
      "orshtorvis-plate": "Orshtorvis Plate",
      "kiev-coutlet": "Chicken Kiev",
      "mixed-grill": "Mixed Grill",
      "kebab-pan": "Kebab on Pan",
      shrimp: "Shrimp",

      "french-fries": "French Fries",
      mexican: "Mexican Potatoes",
      hatai: "Hatay Potatoes",
      "turkish-cheese": "Turkish Cheese",
      "georgian-cheese": "Suluguni",
      "smoked-cheese": "Smoked Cheese",
      "fkhali-asorti": "Pkhali Assortment",
      "green-bouqet": "Herb Bouquet",
      badrijani: "Eggplant with Walnuts",

      spaghetti: "Spaghetti",
      carbonnara: "Carbonara",
      "penne-arabica": "Penne Arrabbiata",
      bolonezaa: "Bolognese",
      "4cheese": "Four Cheese Pasta",
      "imerian-xaxhapuri": "Imeretian Khachapuri",
      "megrelian-xaxhapuri": "Megrelian Khachapuri",
      royal: "Royal Khachapuri",
      adjarian: "Adjarian Khachapuri",
      mchadi: "Cornbread",
      lobiani: "Lobiani",
      "kretian-cheece": "Cretan Cheese Pasta",
      "fish-desk": "Fish-desk",
    },
    ui: {
      "clear-cart": "Clear Cart",
      product: "Product",
      total: "Total",
    },
  },

  ru: {
    categories: {
      drinks: "Напитки",
      sauces: "Соусы",
      alcohol: "Алкоголь",
      soups: "Супы",
      salads: "Салаты",
      asorts: "Ассорти",
      meat: "Мясные блюда",
      snacks: "Закуски",
      pastry: "Тесто и паста",
    },
    items: {
      "raspberry-lemonade": "Малиновый лимонад",
      "energy-drink": "Энергетик",
      "strawberry-lemonade": "Клубничный лимонад",
      "watermelon-lemonade": "Арбузный лимонад",
      "mint-lemonade": "Мятный лимонад",
      "cold-coffee": "Холодный кофе",
      cappuccino: "Капучино",
      americano: "Американо",
      latte: "Латте",
      espresso: "Эспрессо",

      tyemali: "Ткемали",
      satsebeli: "Сацебели",
      adjika: "Аджика",
      ketchup: "Кетчуп",
      mayonnaise: "Майонез",
      baje: "Баже",
      "barbecue-sauce": "Соус барбекю",
      nasharab: "Наршараб",

      chacha: "Чача",
      "chacha-peach": "Персиковая чача",
      "chacha-honey": "Медовая чача",
      absolut: "Абсолют",
      nemiroff: "Немирофф",
      finlandia: "Финляндия",
      raki: "Ракы",
      whisky: "Виски",
      "jack-daniels": "Джек Дэниелс",
      "chivas-regal": "Чивас Ригал",
      "red-label": "Ред Лейбл",
      jameson: "Джеймсон",

      karva: "Карва",
      natakhtari: "Натахтари",
      efes: "Эфес",
      "efes-gold": "Эфес Голд",
      heineken: "Хайнекен",
      corona: "Корона",
      "draft-beer": "Разливное пиво",

      "chicken-soup": "Куриный суп",
      "mushroom-cream": "Грибной крем-суп",
      "mushroom-soup": "Грибной суп",
      kharcho: "Харчо",
      "lentil-soup": "Чечевичный суп",
      ishkembe: "Суп из рубца",
      chorba: "Чорба",
      "yogurt-soup": "Йогуртовый суп",
      "red-bean": "Красная фасоль",
      atom: "Атом",

      "choban-salad": "Чобан салат",
      zetisxili: "Оливки",
      "season-salad": "Сезонный салат",
      "caesar-chicken": "Цезарь с курицей",
      "caesar-shrimp": "Цезарь с креветками",

      "cheese-asort": "Сырное ассорти",
      "pickles-asort": "Ассорти солений",
      "phkhali-asort": "Ассорти пхали",
      kisir: "Кысыр",
      "fruit-asort": "Фруктовое ассорти",
      "wawtermelon-melon": "Арбуз и дыня",
      "carrot-yogurt": "Морковь с йогуртом",
      "europe-cheese": "Европейские сыры",

      "liver-bbq": "Печень на гриле",
      "lamb-bbq": "Баранина на гриле",
      "lamb-ribs": "Рёбра баранины",
      "adana-kebab": "Адана кебаб",
      "chicken-bbq": "Курица на гриле",
      "chicken-wings": "Крылышки",
      "smoked-lamb": "Тушёная телятина",
      "family-lamb": "Телятина по-домашнему",
      salkhino: "Салхино",
      "chabaka-chick": "Цыплёнок",
      "madam-bouvar": "Мадам Бовари",
      steak: "Стейк",
      "beef-steak": "Говяжий стейк",
      "ribs-ajika": "Рёбра с аджикой",
      "family-chicken": "Домашняя курица",
      "sausage-desk": "Колбасная доска",
      "liver-withsauce": "Печень с соусом",
      "raw-beef1": "Сырое мясо",
      "orshtorvis-plate": "Тарелка Оршторвис",
      "kiev-coutlet": "Котлета по-киевски",
      "mixed-grill": "Микс гриль",
      "kebab-pan": "Кебаб на сковороде",
      shrimp: "Креветки",

      "french-fries": "Картофель фри",
      mexican: "Мексиканский картофель",
      hatai: "Картофель Хатай",
      "turkish-cheese": "Турецкий сыр",
      "georgian-cheese": "Сулугуни",
      "smoked-cheese": "Копчёный сыр",
      "fkhali-asorti": "Ассорти пхали",
      "green-bouqet": "Зелень",
      badrijani: "Баклажаны с орехами",

      spaghetti: "Спагетти",
      carbonnara: "Карбонара",
      "penne-arabica": "Пенне Аррабиата",
      bolonezaa: "Болоньезе",
      "4cheese": "4 сыра",
      "imerian-xaxhapuri": "Имерули хачапури",
      "megrelian-xaxhapuri": "Мегрули хачапури",
      royal: "Королевский хачапури",
      adjarian: "Аджарский хачапури",
      mchadi: "Мчади",
      lobiani: "Лобиани",
      "kretian-cheece": "Критская сырная паста",
      "fish-desk": "Ассорти морепродуктов",
    },
    ui: {
      "clear-cart": "Очистить корзину",
      product: "Товар",
      total: "Итого",
    },
  },

  tr: {
    categories: {
      drinks: "İçecekler",
      sauces: "Soslar",
      alcohol: "Alkollü İçecekler",
      soups: "Çorbalar",
      salads: "Salatalar",
      asorts: "Karışık Tabaklar",
      meat: "Et Yemekleri",
      snacks: "Atıştırmalıklar",
      pastry: "Hamur & Makarna",
    },
    items: {
      "raspberry-lemonade": "Ahududu Limonata",
      "energy-drink": "Enerji İçeceği",
      "strawberry-lemonade": "Çilekli Limonata",
      "watermelon-lemonade": "Karpuz Limonata",
      "mint-lemonade": "Naneli Limonata",
      "cold-coffee": "Soğuk Kahve",
      cappuccino: "Cappuccino",
      americano: "Americano",
      latte: "Latte",
      espresso: "Espresso",

      tyemali: "Tkemali",
      satsebeli: "Satsebeli",
      adjika: "Acıka",
      ketchup: "Ketçap",
      mayonnaise: "Mayonez",
      baje: "Ceviz Sosu",
      "barbecue-sauce": "Barbekü Sosu",
      nasharab: "Nar Sosu",

      chacha: "Çaça",
      "chacha-peach": "Şeftali Çaçası",
      "chacha-honey": "Bal Çaçası",
      absolut: "Absolut",
      nemiroff: "Nemiroff",
      finlandia: "Finlandia",
      raki: "Rakı",
      whisky: "Viski",
      "jack-daniels": "Jack Daniel's",
      "chivas-regal": "Chivas Regal",
      "red-label": "Red Label",
      jameson: "Jameson",

      karva: "Karva",
      natakhtari: "Natakhtari",
      efes: "Efes",
      "efes-gold": "Efes Gold",
      heineken: "Heineken",
      corona: "Corona",
      "draft-beer": "Fıçı Bira",

      "chicken-soup": "Tavuk Çorbası",
      "mushroom-cream": "Kremalı Mantar Çorbası",
      "mushroom-soup": "Mantar Çorbası",
      kharcho: "Kharcho",
      "lentil-soup": "Mercimek Çorbası",
      ishkembe: "İşkembe",
      chorba: "Çorba",
      "yogurt-soup": "Yoğurt Çorbası",
      "red-bean": "Kırmızı Fasulye",
      atom: "Atom",

      "choban-salad": "Çoban Salata",
      zetisxili: "Zeytin",
      "season-salad": "Mevsim Salata",
      "caesar-chicken": "Sezar Tavuk",
      "caesar-shrimp": "Sezar Karides",

      "cheese-asort": "Peynir Tabağı",
      "pickles-asort": "Turşu Tabağı",
      "phkhali-asort": "Pkhali Tabağı",
      kisir: "Kısır",
      "fruit-asort": "Meyve Tabağı",
      "wawtermelon-melon": "Karpuz ve Kavun",
      "carrot-yogurt": "Yoğurtlu Havuç",
      "europe-cheese": "Avrupa Peynirleri",

      "liver-bbq": "Izgara Ciğer",
      "lamb-bbq": "Kuzu Izgara",
      "lamb-ribs": "Kuzu Kaburga",
      "adana-kebab": "Adana Kebap",
      "chicken-bbq": "Tavuk Izgara",
      "chicken-wings": "Tavuk Kanadı",
      "smoked-lamb": "Dana Tandır",
      "family-lamb": "Ev Usulü Dana",
      salkhino: "Salkhino",
      "chabaka-chick": "Küçük Tavuk",
      "madam-bouvar": "Madam Bovari",
      steak: "Biftek",
      "beef-steak": "Dana Biftek",
      "ribs-ajika": "Acıkalı Kaburga",
      "family-chicken": "Ev Usulü Tavuk",
      "sausage-desk": "Sosis Tabağı",
      "liver-withsauce": "Soslu Ciğer",
      "raw-beef1": "Çiğ Et",
      "orshtorvis-plate": "Orshtorvis Tabağı",
      "kiev-coutlet": "Kiev Tavuk",
      "mixed-grill": "Karışık Izgara",
      "kebab-pan": "Tavada Kebap",
      shrimp: "Karides",

      "french-fries": "Patates Kızartması",
      mexican: "Meksika Patatesi",
      hatai: "Hatay Patatesi",
      "turkish-cheese": "Türk Peyniri",
      "georgian-cheese": "Sulguni",
      "smoked-cheese": "Füme Peynir",
      "fkhali-asorti": "Pkhali Tabağı",
      "green-bouqet": "Yeşillik",
      badrijani: "Cevizli Patlıcan",

      spaghetti: "Spagetti",
      carbonnara: "Carbonara",
      "penne-arabica": "Penne Arrabbiata",
      bolonezaa: "Bolonez",
      "4cheese": "4 Peynirli",
      "imerian-xaxhapuri": "İmereti Haçapuri",
      "megrelian-xaxhapuri": "Megrel Haçapuri",
      royal: "Kraliyet Haçapuri",
      adjarian: "Acar Haçapuri",
      mchadi: "Mısır Ekmeği",
      lobiani: "Lobiani",
      "kretian-cheece": "Girit Peynirli Makarna",
      "fish-desk": "Deniz Ürünleri Tabağı",
    },
    ui: {
      "clear-cart": "Sepeti Temizle",
      product: "Ürün",
      total: "Toplam",
    },
  },

  ge: {
    categories: {
      drinks: "სასმელები",
      sauces: "სოუსები",
      alcohol: "ალკოჰოლური სასმელები",
      soups: "წვნიანები",
      salads: "სალათები",
      asorts: "ასორტი",
      meat: "ხორცეული",
      snacks: "სნექები",
      pastry: "ცომეული",
    },
    items: {
      "raspberry-lemonade": "მალინის ლიმონათი",
      "energy-drink": "ენერგეტიკული სასმელი",
      "strawberry-lemonade": "მარწყვის ლიმონათი",
      "watermelon-lemonade": "საზამთროს ლიმონათი",
      "mint-lemonade": "პიტნის ლიმონათი",
      "cold-coffee": "ცივი ყავა",
      cappuccino: "კაპუჩინო",
      americano: "ამერიკანო",
      latte: "ლატე",
      espresso: "ესპრესო",

      tyemali: "ტყემალი",
      satsebeli: "საწებელი",
      adjika: "აჯიკა",
      ketchup: "კეტჩუპი",
      mayonnaise: "მაიონეზი",
      baje: "ბაჟე",
      "barbecue-sauce": "ბარბექიუს სოუსი",
      nasharab: "ნაშარაბი",

      chacha: "ჭაჭა",
      "chacha-peach": "ატმის ჭაჭა",
      "chacha-honey": "თაფლის ჭაჭა",
      absolut: "აბსოლუტი",
      nemiroff: "ნემიროფი",
      finlandia: "ფინლანდია",
      raki: "რაქი",
      whisky: "ვისკი",
      "jack-daniels": "ჯეკ დენიელსი",
      "chivas-regal": "ჩივას რეგალი",
      "red-label": "რედ ლეიბელი",
      jameson: "ჯეიმსონი",

      karva: "ქარვა",
      natakhtari: "ნატახტარი",
      efes: "ეფესი",
      "efes-gold": "ეფესი გოლდი",
      heineken: "ჰეინეკენი",
      corona: "კორონა",
      "draft-beer": "ჩამოსასხმელი ლუდი",

      "chicken-soup": "ქათმის სუპი",
      "mushroom-cream": "სოკოს კრემსუპი",
      "mushroom-soup": "სოკოს სუპი",
      kharcho: "ხარჩო",
      "lentil-soup": "ოსპის სუპი",
      ishkembe: "იშკემბე",
      chorba: "ჩორბა",
      "yogurt-soup": "მაწვნის სუპი",
      "red-bean": "წითელი ლობიო",
      atom: "ატომი",

      "choban-salad": "ჩობან სალათი",
      zetisxili: "ზეთისხილი",
      "season-salad": "სეზონური სალათი",
      "caesar-chicken": "ცეზარი ქათმით",
      "caesar-shrimp": "ცეზარი კრევეტით",

      "cheese-asort": "ყველის ასორტი",
      "pickles-asort": "მჟავეულის ასორტი",
      "phkhali-asort": "ფხალის ასორტი",
      kisir: "კისირი",
      "fruit-asort": "ხილის ასორტი",
      "wawtermelon-melon": "საზამთრო და ნესვი",
      "carrot-yogurt": "სტაფილო იოგურტით",
      "europe-cheese": "ევროპული ყველი",

      "liver-bbq": "ღვიძლის მწვადი",
      "lamb-bbq": "ცხვრის მწვადი",
      "lamb-ribs": "ცხვრის ნეკნი",
      "adana-kebab": "ადანა ქაბაბი",
      "chicken-bbq": "ქათმის მწვადი",
      "chicken-wings": "ქათმის ფრთები",
      "smoked-lamb": "ხბოს ჩაშუშული",
      "family-lamb": "ხბოს ოჯახური",
      salkhino: "სალხინო",
      "chabaka-chick": "ჭაბაკა წიწილა",
      "madam-bouvar": "მადამ ბოვარი",
      steak: "სტეიკი",
      "beef-steak": "საქონლის სტეიკი",
      "ribs-ajika": "ნეკნი აჯიკაში",
      "family-chicken": "ოჯახური ქათამი",
      "sausage-desk": "სოსისების დაფა",
      "liver-withsauce": "ღვიძლი სოუსით",
      "raw-beef1": "უმი ხორცი",
      "orshtorvis-plate": "ორშტორვის თეფში",
      "kiev-coutlet": "კიევური კატლეტი",
      "mixed-grill": "შერეული გრილი",
      "kebab-pan": "ქაბაბი კეცზე",
      shrimp: "კრევეტი",

      "french-fries": "ფრი",
      mexican: "მექსიკური კარტოფილი",
      hatai: "ჰატაის კარტოფილი",
      "turkish-cheese": "თურქული ყველი",
      "georgian-cheese": "სულგუნი",
      "smoked-cheese": "შებოლილი ყველი",
      "fkhali-asorti": "ფხალის ასორტი",
      "green-bouqet": "მწვანილი",
      badrijani: "ბადრიჯანი ნიგვზით",

      spaghetti: "სპაგეტი",
      carbonnara: "კარბონარა",
      "penne-arabica": "პენე არაბიკა",
      bolonezaa: "ბოლონეზა",
      "4cheese": "4 ყველით",
      "imerian-xaxhapuri": "იმერული ხაჭაპური",
      "megrelian-xaxhapuri": "მეგრული ხაჭაპური",
      royal: "სამეფო ხაჭაპური",
      adjarian: "აჭარული",
      mchadi: "მჭადი",
      lobiani: "ლობიანი",
      "kretian-cheece": "კრეტული ყველის პასტა",
      "fish-desk": "ზღვის პროდუქტების დაფა",
    },
    ui: {
      "clear-cart": "კალათის გასუფთავება",
      product: "პროდუქტი",
      total: "ჯამი",
    },
  },
};
