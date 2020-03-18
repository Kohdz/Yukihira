import { Dish } from "./dish";

export const DISHES: Dish[] = [
  {
    id: "0",
    name: "Soft Turtle Burger",
    image: "/assets/images/burger.png",
    category: "Main Course",
    featured: false,
    label: "Hot",
    price: "2.99",
    // tslint:disable-next-line:max-line-length
    description:
      "A dish that is both richly infused with the flavors of the soft-shelled turtle and strongly emphasized the gleatinous nature of the meat to simulate the soft palate",
    comments: [
      {
        rating: 4,
        comment: "Just 1 word, Amazing!",
        author: "Timmy Turner",
        date: "2012-10-16T17:57:28.556094Z"
      }
    ]
  },
  {
    id: "1",
    name: "Chinese Ramen",
    image: "/assets/images/ramen.png",
    category: "Main Course",
    featured: true,
    label: "",
    price: "6.99",
    description:
      "Chinese wheat noodles served in a fish-based broth, flavored with miso, and topped with sliced pork, nori and scallions",
    comments: [
      {
        rating: 5,
        comment:
          "The best Ramen i have had in all of Japan. Going to miss this when i move back home!",
        author: "Chis Floyd",
        date: "2013-02-12T15:44:30.556094Z"
      }
    ]
  },
  {
    id: "2",
    name: "Lemon Curd",
    image: "/assets/images/lemon-curd.png",
    category: "Dessert",
    featured: false,
    label: "New",
    price: ".99",
    description:
      "A lemon flavored semifreddo. It has four layers of Lemon Curd with minimal amount of butter substituted it with olive oil to enhance the flavor of the lemons",
    comments: [
      {
        rating: 5,
        comment: "When Life gives you lemons",
        author: "Chuck Tod",
        date: "2012-10-16T17:57:28.556094Z"
      }
    ]
  },
  {
    id: "3",
    name: "Beef Roti",
    image: "/assets/images/beef-roti.png",
    category: "main",
    featured: false,
    label: "",
    price: "2.99",
    description: "Beef with roti",
    comments: [
      {
        rating: 2,
        comment: "No Flavor, maybe add some sauces",
        author: "Akpur",
        date: "2011-9-12T15:03:32.556094Z"
      }
    ]
  },
  {
    id: "4",
    name: "Saury Cartoccio",
    image: "/assets/images/Autumn_Pacific_Saury_Cartoccio_(anime).png",
    category: "Main Course",
    featured: false,
    label: "",
    price: "3.99",
    description:
      "Carpaccio is an Italian hors d'oeuvre. The dish utlizes raw fish that has beenn slced thin",
    comments: [
      {
        rating: 3,
        comment: "It will get you full!",
        author: "Megan",
        date: "2017-13-18T12:23:23.556094Z"
      }
    ]
  },
  {
    id: "5",
    name: "Bear Hotpot",
    image: "/assets/images/Bear_Hotpot_(Anime).png",
    category: "Main Course",
    featured: false,
    label: "",
    price: "4.99",
    description:
      "A chinese soup containing a variety of East Asian foodstuffs and indugredients, prepared with a simmering pot of soup stock at the dining table",
    comments: [
      {
        rating: 3,
        comment: "Just like what my grandma used to make",
        author: "Lee",
        date: "2015-1-2T12:45:12.556094Z"
      }
    ]
  },
  {
    id: "6",
    name: "Boneless Achari Murgh",
    image: "/assets/images/Boneless_Achari_Murgh.png",
    category: "Appetizer",
    featured: false,
    label: "",
    price: "1.99",
    description:
      "A chicken curry with complex combinations of spices and herbs and fresh chillies.",
    comments: [
      {
        rating: 3,
        comment: "Subtle yet rich flavor",
        author: "AMir",
        date: "2009-11-15T16:55:28.556094Z"
      }
    ]
  },
  {
    id: "7",
    name: "Capitone In Umido",
    image: "/assets/images/Capitone_in_Umido_(Anime).png",
    category: "Main Course",
    featured: false,
    label: "",
    price: "2.99",
    description:
      "Stewed large female eel called capitone served with thick tomato sauce from San Marzano tomatoes and spices. Two pieces of crispy polenta are accompanied as the garnish.",
    comments: [
      {
        rating: 5,
        comment:
          "Eating the dish induces the sensation of being pinned and squeezed by a incredibly voluptuous bust",
        author: "Miceal",
        date: "2020-01-14T12:33:45.556094Z"
      }
    ]
  },
  {
    id: "8",
    name: "Char Okakiage",
    image: "/assets/images/Char_Okakiage_(anime).png",
    category: "Appetizer",
    featured: false,
    label: "",
    price: "3.99",
    description:
      "Using Kaki seeds to serve as te batter's coating for a deep fried char, this is a dish you won't find on the often on the menu!",
    comments: [
      {
        rating: 4,
        comment:
          "Served alongside fried wild plants, with a fluffy tamato no moto with spice sauce as condiment",
        author: "Misuki",
        date: "2019-2-11T12:21:20.556094Z"
      }
    ]
  },
  {
    id: "9",
    name: "Charcoal Grilled Vension Steak",
    image: "/assets/images/Charcoal_Grilled_Venison_Round_Steak_anime.jpg",
    category: "main",
    featured: false,
    label: "",
    price: "4.99",
    description:
      "It has mellow flavor along side chestnuts to create a unique sauce. Coffee is used to increase the richness of the sauce",
    comments: [
      {
        rating: 2,
        comment: "The coffe make it taste a bit weird; not my thing",
        author: "Abigail Wertherner",
        date: "2020-03-2T23:56:27.556094Z"
      }
    ]
  },
  {
    id: "10",
    name: "Chicken Egg Tempura Don",
    image: "/assets/images/Chicken_Egg_Tempura_Don_(Anime).png",
    category: "Appetizer",
    featured: false,
    label: "",
    price: "1.99",
    description:
      "A frozen egg that is deep-fried in tempura batter, producing a soft-boiled tempura egg over the rice",
    comments: [
      {
        rating: 3,
        comment:
          "I think the dishes power comes from the fact that low grade eggs might have been used",
        author: "Erina",
        date: "2019-10-14T12:23:11.556094Z"
      }
    ]
  },
  {
    id: "11",
    name: "Insalata Frittata",
    image: "/assets/images/Insalata_Frittata_(anime).png",
    category: "Main Course",
    featured: false,
    label: "",
    price: "5.99",
    description:
      "Salad with frittata broken into rough chunks.  It is finished off with grated Parmensan cheese and drizzled with balsamic vinegar",
    comments: [
      {
        rating: 4,
        comment:
          "Not sure what it is, maybe vinegar? But it gives the salad a refreshing taste",
        author: "Joylee",
        date: "2018-03-12T16:43:23.556094Z"
      }
    ]
  },
  {
    id: "12",
    name: "Kozuyu Chicken Soy Sauce Ramen",
    image: "/assets/images/Kozuyu_Chicken_Soy_Sauce_Ramen_(anime).png",
    category: "Appetizer",
    featured: false,
    label: "",
    price: "1.99",
    description:
      "Ramen with incredibly strong flavor created from the usage of Kozuyu. Using fried vegtables, the soup is further enhanced creating an elegant but strong dish. DIsh ish finished off with paitan soup",
    comments: [
      {
        rating: 3,
        comment: "Always wanted to try this, not disappointed",
        author: "Totsuki",
        date: "2019-09-12T11:03:52.556094Z"
      }
    ]
  },
  {
    id: "13",
    name: "Nine Vegetable Terrine",
    image: "/assets/images/Nine_Vegetable_Terrine_(anime).png",
    category: "Appetizer",
    featured: false,
    label: "",
    price: "1.99",
    description:
      "A common French dish that utilizes nine different types of vegetable that are aligned in strips one above the other. It is set in green gelatinous compount",
    comments: [
      {
        rating: 5,
        comment: "who knew vegtables could taste so great",
        author: "Tom",
        date: "2018-11-18T19:32:12.556094Z"
      }
    ]
  },
  {
    id: "14",
    name: "Rainbow Terrine",
    image: "/assets/images/Rainbow_Terrine_(anime).png",
    category: "Appetizer",
    featured: false,
    label: "",
    price: "2.99",
    description:
      "A colorful terrine arranged using seven different vegtables layed to resemble a rainbow",
    comments: [
      {
        rating: 3,
        comment:
          "Strangly has a spicey feeling to it. A hidden ingredient perhaps?",
        author: "Kathy",
        date: "2020-02-12T13:47:17.556094Z"
      }
    ]
  },
  {
    id: "15",
    name: "Salmon Coulibiac",
    image: "/assets/images/Salmon_couliblac_anime.png",
    category: "Appetizer",
    featured: false,
    label: "",
    price: "2.99",
    description:
      "The French Russian dish consists of a brioche shell and a salmon fillet centre. Using buckwheat kasha and butter rich concentrates the flavor of the slamon, but the secret of this dish is a spinach crepe which is seasoned with multiple spices, even dried bacon powder",
    comments: [
      {
        rating: 4,
        comment: "The first bite sent a jolt through my brain",
        author: "Angi McFeild",
        date: "2020-01-03T16:34:15.556094Z"
      }
    ]
  },
  {
    id: "16",
    name: "Saumon Confit Flamme",
    image: "/assets/images/Salmon_confit_flamme_anime.png",
    category: "Appetizer",
    featured: false,
    label: "",
    price: "1.99",
    description: "Salted Salmon cooked slowly in duck fat",
    comments: [
      {
        rating: 1,
        comment: "Bland. I do not reccomend this",
        author: "Phil Jackson",
        date: "2019-02-11T06:49:39.556094Z"
      }
    ]
  },
  {
    id: "18",
    name: "Spanish Mackarel withh peppers and Puree",
    image:
      "/assets/images/Spanish_Mackarel_with_Chinese_Pepper_and_Puree_(anime).png",
    category: "Appetizer",
    featured: false,
    label: "",
    price: "6.99",
    description:
      "A combination of spring cabbage puree and a perfectly prepared seasonal mackerel. This dish has a harmonoius blend of flavors that embodied the feeling of spring",
    comments: [
      {
        rating: 5,
        comment: "what i imagine heaven tastes like",
        author: "Penny",
        date: "2018-06-19T04:02:12.556094Z"
      }
    ]
  },
  {
    id: "19",
    name: "Three Kinds of Onigiri",
    image: "/assets/images/Three_Kinds_of_Onigiri_(anime).png",
    category: "Main Course",
    featured: false,
    label: "",
    price: "4.99",
    description:
      "A refreshing and hearty meal that contains three different fillings",
    comments: [
      {
        rating: 5,
        comment:
          "I buy this for lunch all the time. Its filling and leaves you feeling full of energy",
        author: "Soma",
        date: "2019-08-04T06:17:44.556094Z"
      }
    ]
  },
  {
    id: "20",
    name: "Beef Stew",
    image: "/assets/images/Beef_Stew.png",
    category: "Main Course",
    featured: false,
    label: "",
    price: "5.99",
    description: "A hearty stew. It is perfec for your average patron",
    comments: [
      {
        rating: 3,
        comment: "Good but just wish there was more falvor to the stew",
        author: "Alice Nakiri",
        date: "2016-05-08T03:01:56.556094Z"
      }
    ]
  }
];
