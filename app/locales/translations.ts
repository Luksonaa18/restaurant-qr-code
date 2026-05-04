export type Lang = "en" | "ru" | "tr" | "ka";
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
  items: Partial<Record<ItemKey, string>>;
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
      "choban-salad": "Shepherd Salad",
      "season-salad": "Seasonal Salad",
      "caesar-chicken": "Caesar Salad (Chicken)",
      "caesar-shrimp": "Caesar Salad (Shrimp)",
      "cheese-asort": "Cheese Assortment",
      "pickles-asort": "Pickles Assortment",
      "phkhali-asort": "Pkhali Assortment",
      "fruit-asort": "Fruit Assortment",
      "liver-bbq": "Grilled Liver",
      "lamb-bbq": "Lamb BBQ",
      "lamb-ribs": "Lamb Ribs",
      "adana-kebab": "Adana Kebab",
      "chicken-bbq": "Chicken BBQ",
      "chicken-wings": "Chicken Wings",
      steak: "Steak",
      "beef-steak": "Beef Steak",
      "french-fries": "French Fries",
      mexican: "Mexican Potatoes",
      "turkish-cheese": "Turkish Cheese",
      "georgian-cheese": "Suluguni Cheese",
      spaghetti: "Spaghetti",
      carbonnara: "Carbonara",
      "penne-arabica": "Penne Arrabbiata",
      bolonezaa: "Bolognese",
      "4cheese": "Four Cheese Pasta",
      "imerian-xaxhapuri": "Imeretian Khachapuri",
      "megrelian-xaxhapuri": "Megrelian Khachapuri",
      adjarian: "Adjarian Khachapuri",
      lobiani: "Lobiani",
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
      baje: "Баже (ореховый соус)",
      "barbecue-sauce": "Соус барбекю",
      nasharab: "Наршараб (гранатовый соус)",
      chacha: "Чача",
      "chacha-peach": "Персиковая чача",
      "chacha-honey": "Медовая чача",
      absolut: "Водка Абсолют",
      nemiroff: "Водка Немирофф",
      finlandia: "Водка Финляндия",
      raki: "Ракы",
      whisky: "Виски",
      "jack-daniels": "Джек Дэниелс",
      "chivas-regal": "Чивас Ригал",
      "red-label": "Джонни Уокер Рэд Лейбл",
      jameson: "Джеймсон",
      karva: "Пиво Карва",
      natakhtari: "Пиво Натахтари",
      efes: "Пиво Эфес",
      heineken: "Хайнекен",
      corona: "Корона",
      "draft-beer": "Разливное пиво",
      "chicken-soup": "Куриный суп",
      "mushroom-cream": "Крем-суп из грибов",
      "mushroom-soup": "Грибной суп",
      kharcho: "Харчо",
      "lentil-soup": "Чечевичный суп",
      ishkembe: "Суп из рубца",
      chorba: "Чорба",
      "yogurt-soup": "Суп с йогуртом",
      "choban-salad": "Чобан салат",
      "season-salad": "Сезонный салат",
      "caesar-chicken": "Цезарь с курицей",
      "caesar-shrimp": "Цезарь с креветками",
      "cheese-asort": "Сырное ассорти",
      "pickles-asort": "Ассорти из маринадов",
      "phkhali-asort": "Ассорти из пхали",
      "fruit-asort": "Фруктовое ассорти",
      "liver-bbq": "Шашлык из печени",
      "lamb-bbq": "Шашлык из баранины",
      "lamb-ribs": "Бараньи рёбра",
      "adana-kebab": "Адана кебаб",
      "chicken-bbq": "Куриный шашлык",
      "chicken-wings": "Куриные крылышки",
      steak: "Стейк",
      "beef-steak": "Говяжий стейк",
      "french-fries": "Картофель фри",
      mexican: "Мексиканский картофель",
      "turkish-cheese": "Турецкий сыр",
      "georgian-cheese": "Сулугуни",
      spaghetti: "Спагетти",
      carbonnara: "Карбонара",
      "penne-arabica": "Пенне Аррабиата",
      bolonezaa: "Болоньезе",
      "4cheese": "Паста четыре сыра",
      "imerian-xaxhapuri": "Имерули хачапури",
      "megrelian-xaxhapuri": "Мегрули хачапури",
      adjarian: "Аджарский хачапури",
      lobiani: "Лобиани",
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
      baje: "Ceviz Sosu (Baje)",
      "barbecue-sauce": "Barbekü Sosu",
      nasharab: "Nar Sosu",
      chacha: "Çaça",
      "chacha-peach": "Şeftali Çaçası",
      "chacha-honey": "Bal Çaçası",
      absolut: "Absolut Votka",
      nemiroff: "Nemiroff Votka",
      finlandia: "Finlandia Votka",
      raki: "Rakı",
      whisky: "Viski",
      "jack-daniels": "Jack Daniel's",
      "chivas-regal": "Chivas Regal",
      "red-label": "Johnnie Walker Red Label",
      jameson: "Jameson",
      karva: "Karva Bira",
      natakhtari: "Natakhtari Bira",
      efes: "Efes Bira",
      heineken: "Heineken",
      corona: "Corona",
      "draft-beer": "Fıçı Birası",
      "chicken-soup": "Tavuk Çorbası",
      "mushroom-cream": "Mantar Kreması Çorbası",
      "mushroom-soup": "Mantar Çorbası",
      kharcho: "Kharcho",
      "lentil-soup": "Mercimek Çorbası",
      ishkembe: "İşkembe Çorbası",
      chorba: "Çorba",
      "yogurt-soup": "Yoğurt Çorbası",
      "choban-salad": "Çoban Salatası",
      "season-salad": "Mevsim Salatası",
      "caesar-chicken": "Sezar Tavuk",
      "caesar-shrimp": "Sezar Karides",
      "cheese-asort": "Peynir Tabağı",
      "pickles-asort": "Turşu Tabağı",
      "phkhali-asort": "Pkhali Tabağı",
      "fruit-asort": "Meyve Tabağı",
      "liver-bbq": "Izgara Karaciğer",
      "lamb-bbq": "Kuzu Izgara",
      "lamb-ribs": "Kuzu Kaburga",
      "adana-kebab": "Adana Kebap",
      "chicken-bbq": "Tavuk Izgara",
      "chicken-wings": "Tavuk Kanadı",
      steak: "Biftek",
      "beef-steak": "Dana Biftek",
      "french-fries": "Patates Kızartması",
      mexican: "Meksika Patatesi",
      "turkish-cheese": "Türk Peyniri",
      "georgian-cheese": "Sulguni Peyniri",
      spaghetti: "Spagetti",
      carbonnara: "Carbonara",
      "penne-arabica": "Penne Arrabbiata",
      bolonezaa: "Bolonez",
      "4cheese": "Dört Peynirli Makarna",
      "imerian-xaxhapuri": "İmereti Haçapuri",
      "megrelian-xaxhapuri": "Megrel Haçapuri",
      adjarian: "Acar Haçapuri",
      lobiani: "Lobiani",
    },
    ui: {
      "clear-cart": "Sepeti Temizle",
      product: "Ürün",
      total: "Toplam",
    },
  },

  ka: {
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

      "choban-salad": "ჩობან სალათი",
      "season-salad": "სეზონური სალათი",
      "caesar-chicken": "ცეზარი ქათმით",
      "caesar-shrimp": "ცეზარი კრევეტით",

      "cheese-asort": "ყველის ასორტი",
      "pickles-asort": "მჟავეულის ასორტი",
      "phkhali-asort": "ფხალის ასორტი",
      "fruit-asort": "ხილის ასორტი",

      "liver-bbq": "ღვიძლის მწვადი",
      "lamb-bbq": "ცხვრის მწვადი",
      "lamb-ribs": "ცხვრის ნეკნი",
      "adana-kebab": "ადანა ქაბაბი",
      "chicken-bbq": "ქათმის მწვადი",
      "chicken-wings": "ქათმის ფრთები",

      steak: "სტეიკი",
      "beef-steak": "საქონლის სტეიკი",

      "french-fries": "ფრი",
      mexican: "მექსიკური კარტოფილი",
      "turkish-cheese": "თურქული ყველი",
      "georgian-cheese": "სულგუნი",

      spaghetti: "სპაგეტი",
      carbonnara: "კარბონარა",
      "penne-arabica": "პენე არაბიკა",
      bolonezaa: "ბოლონეზა",
      "4cheese": "4 ყველით",
      "imerian-xaxhapuri": "იმერული ხაჭაპური",
      "megrelian-xaxhapuri": "მეგრული ხაჭაპური",
      adjarian: "აჭარული",
      lobiani: "ლობიანი",
    },
    ui: {
      "clear-cart": "კალათის გასუფთავება",
      product: "პროდუქტი",
      total: "ჯამი",
    },
  },
};
