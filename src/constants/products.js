import Orange from '../assets/image-1.jpg'
import Ginger from "../assets/Traditional Ginger Beer.jpg"
import Zobo from '../assets/image-3.jpg'
import Pina from "../assets/Pina_Tropical.jpg"
import VitaminC from "../assets/Vitamin C.jpg"
import Strong from "../assets/Strong_Green.jpg"
import Rouge from "../assets/Rouge.jpg"
import Water from "../assets/Intelligent_water.jpg"
import Watermelon from "../assets/watermelon.jpg"
import Hibiscus from '../assets/hibiscus.jpeg'
import Raspberry from '../assets/raspberry.jpeg'
import Strawberry from '../assets/strawberry.jpeg'
import Mango from '../assets/mango.jpeg'
import Pineapple from '../assets/pineapple.jpeg'
import Orange1 from '../assets/orange.jpeg'
import Ginger1 from '../assets/ginger.jpeg'
import Lemon from '../assets/lemon.jpeg'
import Agave from '../assets/agave.jpeg'
import Lime from '../assets/lime.jpeg'
import RaspberryLeaf from '../assets/raspberryleaf.jpeg'
import Rosemary from '../assets/rosemarry.jpeg'
import Elderberry from '../assets/elderberry.jpeg'
import Clove from '../assets/clove.jpeg'
import Grapefruit from '../assets/grape.jpeg'
import Cayenne from '../assets/cayenne.jpeg'
import Kale from '../assets/kale.jpeg'
import TurnipGreen from '../assets/turnip-green.jpeg'
import Watercress from '../assets/watercress.jpeg'
import Arugula from '../assets/arugula.jpeg'
import Apple from '../assets/apple.jpeg'
import BeetRoots from '../assets/beetroot.jpeg'
import Chamomile from '../assets/chamomile.jpeg'
import Nettle from '../assets/nettle.jpeg'
import Pomegranate from '../assets/pomegranate.jpeg'
import RaspberryStrawberryPomegranateTea from '../assets/RaspberryStrawberryPomegranateTea.jpg'
import OrangeAndRosemaryTea from '../assets/OrangeAndRosemaryTea.jpg'
import MangoJuice from '../assets/MangoJuice.jpg'

export const products = [
  {
    id: 1,
    name: "Intelligent Water",
    price: { big: 16, small: 10 },
    size: ["L", "S"],
    image: Water,
    description:
      "Watermelon is one of the most alkaline forming fruits on planet earth. " +
      "Powerful fruit that is packed with Potassium and Magnesium. " +
      "Watermelon has 92% H302 hydrogen bond water inside of them. " +
      "Watermelon is known for helping the cardiovascular system, keeping the body hydrated and providing Electrolytes and Ascorbic Acid. " +
      "The best result comes from a daily intake or frequent watermelon fast. " +
      "This is an all-healing fruit for the body!",
    category: "Refreshments",
    ingredient: [
      { text: "Watermelon", image: Watermelon, description: "Hydrates and provides electrolytes, supports cardiovascular health, and is rich in vitamins A and C." },
      { text: "Lime", image: Lime, description: "Rich in Vitamin C and antioxidants, helps boost the immune system, and aids in digestion." },
      { text: "Ginger", image: Ginger1, description: "Aids digestion, reduces inflammation, and has powerful antioxidant and anti-inflammatory properties." },
      { text: "Lemon", image: Lemon, description: "Boosts immune system, aids digestion, and is rich in Vitamin C and antioxidants." },
      { text: "Agave", image: Agave, description: "Natural sweetener with a low glycemic index, helps regulate blood sugar levels." },
    ],
  },
  {
    id: 2,
    name: "Orange Juice",
    price: { big: 16, small: 10 },
    size: ["L", "S"],
    image: Orange,
    description:
      "Freshly squeezed orange juice made with 100% organic oranges, and nothing else. Rich in Vitamin C & folate, and potassium. " +
      "Helps the body to metabolize carbohydrates, vitamin C supports your immune system and may be effective in fighting against the common cold." +
      "May improved heart health, decreased inflammation, and a reduced risk of kidney stones.",
    category: "Refreshments",
    ingredient: [
      { text: "Organic orange juice", image: Orange1, description: "Rich in Vitamin C and antioxidants, supports immune function, and promotes healthy skin." },
    ],
  },
  {
    id: 3,
    name: "Zobo",
    price: { big: 16, small: 10 },
    size: ["L", "S"],
    image: Zobo,
    description:
      "Hibiscus flower may lower blood pressure, Improves Digestive Health, Fights inflammation, lowers cholesterol, and Supports Liver Health. Contain strong antioxidants such as Vitamin C, quercetin and gallic acid that fight against cancer.",
    category: "Refreshments",
    ingredient: [
      { text: "Hibiscus", image: Hibiscus, description: "Lowers blood pressure, supports liver health, and is rich in antioxidants." },
      { text: "Raspberry", image: Raspberry, description: "Rich in fiber and antioxidants, supports heart health, and has anti-inflammatory properties." },
      { text: "Strawberry", image: Strawberry, description: "Boosts immune system, improves heart health, and is rich in vitamins and antioxidants." },
      { text: "Mango", image: Mango, description: "Rich in vitamins A and C, supports immune function, and promotes healthy skin." },
      { text: "Pineapple", image: Pineapple, description: "Aids digestion, reduces inflammation, and is rich in vitamins and antioxidants." },
      { text: "Ginger", image: Ginger1, description: "Aids digestion, reduces inflammation, and has powerful antioxidant and anti-inflammatory properties." },
      { text: "Lemon", image: Lemon, description: "Boosts immune system, aids digestion, and is rich in Vitamin C and antioxidants." },
      { text: "Agave", image: Agave, description: "Natural sweetener with a low glycemic index, helps regulate blood sugar levels." },
    ],
  },
  {
    id: 4,
    name: "Traditional Ginger beer",
    price: { big: 16, small: 10 },
    size: ["L", "S"],
    image: Ginger,
    description:
      "Ginger root is a great way to aid your digestion, detoxify your system, and increase your body’s production of white blood cells, which help protect your internal system from disease and infection. Ginger root is more potent (and delicious) than any dried tea bag, coffee, milk or soda bought at the supermarket. it is known to benefit both the brain and body by fighting germs, keeping your mouth healthy, calming nausea and soothing sore muscles.",
    category: "Refreshments",
    ingredient: [
      { text: "Ginger Roots", image: Ginger1, description: "Aids digestion, reduces inflammation, and has powerful antioxidant and anti-inflammatory properties." },
      { text: "Lime", image: Lime, description: "Rich in Vitamin C and antioxidants, helps boost the immune system, and aids in digestion." },
      { text: "Pineapple", image: Pineapple, description: "Aids digestion, reduces inflammation, and is rich in vitamins and antioxidants." },
      { text: "Clove", image: Clove, description: "Rich in antioxidants, improves liver health, and has anti-inflammatory properties." },
      { text: "Agave", image: Agave, description: "Natural sweetener with a low glycemic index, helps regulate blood sugar levels." },
    ],
  },
  {
    id: 5,
    name: "Pina tropical",
    price: { big: 16, small: 10 },
    size: ["L", "S"],
    image: Pina,
    description:
      "Mangos contain nutrients and antioxidants. Rich in fiber Packed with nutrients, rich in vitamin C, which is important for forming blood vessels and healthy collagen, as well as helping you heal. Low in calories, may help prevent diabetes, high in healthy plant compounds, contains immune-boosting nutrients,supports heart health, may improve digestive health and support eye health",
    category: "Refreshments",
    ingredient: [
      { text: "Mango", image: Mango, description: "Rich in vitamins A and C, supports immune function, and promotes healthy skin." },
      { text: "Pineapple", image: Pineapple, description: "Aids digestion, reduces inflammation, and is rich in vitamins and antioxidants." },
      { text: "Ginger", image: Ginger1, description: "Aids digestion, reduces inflammation, and has powerful antioxidant and anti-inflammatory properties." },
      { text: "Lime", image: Lime, description: "Rich in Vitamin C and antioxidants, helps boost the immune system, and aids in digestion." },
      { text: "Lemon", image: Lemon, description: "Boosts immune system, aids digestion, and is rich in Vitamin C and antioxidants." },
      { text: "Agave", image: Agave, description: "Natural sweetener with a low glycemic index, helps regulate blood sugar levels." },
    ],
  },
  {
    id: 6,
    name: "Vitamin C",
    price: { big: 16, small: 10 },
    size: ["L", "S"],
    image: VitaminC,
    description:
      "Immunity powerhouse benefits with a focus on overall vitality, Good for digestion. gut health. Helps manage weight gain, expel mucus, promote healthy skin. Use daily shot in the morning before eating and at night after the last meal for best results.",
    category: "Detox and Immune booster",
    ingredient: [
      { text: "Grapefruit", image: Grapefruit, description: "Rich in Vitamin C and antioxidants, supports immune function, and promotes healthy skin." },
      { text: "Lime", image: Lime, description: "Rich in Vitamin C and antioxidants, helps boost the immune system, and aids in digestion." },
      { text: "Orange", image: Orange1, description: "Rich in Vitamin C and antioxidants, supports immune function, and promotes healthy skin." },
      { text: "Ginger", image: Ginger1, description: "Aids digestion, reduces inflammation, and has powerful antioxidant and anti-inflammatory properties." },
      { text: "Cayenne pepper", image: Cayenne, description: "Boosts metabolism, reduces inflammation, and has antioxidant properties." },
    ],
  },
  {
    id: 7,
    name: "Strong Green",
    price: { big: 16, small: 10 },
    size: ["L", "S"],
    image: Strong,
    description:
      "Helps lowering the risk of type 2 diabetes, protecting against heart disease, and helping prevent constipation. Great for detoxification, reduce bloating, eliminate mucus, contain lots of vitamins, minerals, antioxidants, a boost in healthy glowing skin. A overall Gut health cleanse.",
    category: "Detox and Immune booster",
    ingredient: [
      { text: "Kale", image: Kale, description: "Rich in vitamins A, C, and K, supports immune function, and promotes healthy skin." },
      { text: "Turnip-green", image: TurnipGreen, description: "Rich in vitamins A, C, and K, supports immune function, and promotes healthy skin." },
      { text: "Watercress", image: Watercress, description: "Rich in vitamins A, C, and K, supports immune function, and promotes healthy skin." },
      { text: "Arugula", image: Arugula, description: "Rich in vitamins A, C, and K, supports immune function, and promotes healthy skin." },
      { text: "Apple", image: Apple, description: "Rich in fiber and antioxidants, supports heart health, and promotes healthy digestion." },
      { text: "Lime", image: Lime, description: "Rich in Vitamin C and antioxidants, helps boost the immune system, and aids in digestion." },
      { text: "Ginger", image: Ginger1, description: "Aids digestion, reduces inflammation, and has powerful antioxidant and anti-inflammatory properties." },
    ],
  },
  {
    id: 8,
    name: "Rouge",
    price: { big: 16, small: 10 },
    size: ["L", "S"],
    image: Rouge,
    description:
      "Low in calories yet high in nutrition, Beets are packed with essential vitamins and minerals including Folate, Manganese, Vitamin C, Vitamin A, Potassium. These nutrients help to reduce the risk of heart disease and stroke, improve digestive health, fight inflammation and support brain health. improve exercise performance and support energy levels Drinking beetroot juice could actually help you exercise for up to 16% longer. Kale: Very low in calories and extremely high in nutrients, Kale is easily one of the healthiest and most nutrient-dense foods around. Kale is loaded with antioxidants and is one of the best sources of Vitamin C and K. It has so many nutrients we could go on and on…Apples: One of the most versatile fruits, Apples also have many nutritional benefits. Rich in fiber, Vitamin C and potassium, to name a few, their benefits are linked to lowering the risk of chronic conditions such as diabetes, heart disease and cancer and promoting weight loss and brain health.",
    category: "Detox and Immune booster",
    ingredient: [
      { text: "Beet Roots", image: BeetRoots, description: "Rich in vitamins and minerals, supports heart health, and improves exercise performance." },
      { text: "Apple", image: Apple, description: "Rich in fiber and antioxidants, supports heart health, and promotes healthy digestion." },
      { text: "Orange", image: Orange1, description: "Rich in Vitamin C and antioxidants, supports immune function, and promotes healthy skin." },
      { text: "Kale", image: Kale, description: "Rich in vitamins A, C, and K, supports immune function, and promotes healthy skin." },
      { text: "Ginger", image: Ginger1, description: "Aids digestion, reduces inflammation, and has powerful antioxidant and anti-inflammatory properties." },
      { text: "Lemon", image: Lemon, description: "Boosts immune system, aids digestion, and is rich in Vitamin C and antioxidants." },
    ],
  },
  {
    id: 9,
    name: "Mango & Coconut tea",
    price: { big: 16, small: 10 },
    size: ["L", "S"],
    image: MangoJuice,
    description:
      "A refreshing tropical twist, presents an exotic escape, transporting the mango tea lover to distant realms with its aromatic fusion of coconut. Coconut is a great energy-revitalizing drink. Coconut provides a large portion of sodium, potassium, phosphorus, calcium, and magnesium, which help revive and enhance your energy. Mango often considered a superfood rich in fiber, good source of vitamins, minerals, and antioxidants. Boost the Immune System and Ease Constipation.",
    category: "Sweet and unsweet tea",
    ingredient: [
      { text: "Chamomile", image: Chamomile, description: "Promotes relaxation, aids sleep, and has anti-inflammatory properties." },
      { text: "Nettle", image: Nettle, description: "Rich in vitamins and minerals, supports detoxification, and promotes healthy skin." },
      { text: "Raspberry leaf", image: RaspberryLeaf, description: "Supports reproductive health, reduces inflammation, and is rich in vitamins and minerals." },
      { text: "Elderberry", image: Elderberry, description: "Boosts immune system, rich in antioxidants, and supports respiratory health." },
    ],
  },
  {
    id: 10,
    name: "Orange and Rosemary Tea",
    price: { big: 16, small: 10 },
    size: ["L", "S"],
    image: OrangeAndRosemaryTea,
    description:
      "Fuel your senses with the pleasant aroma and taste of orange and rosemary. From the first sip, the blend is bright and delicate, mimicking the sweet summer flavor of freshly sliced oranges, followed by a pleasant surprise of rosemary.",
    category: "Sweet and unsweet tea",
    ingredient: [
      { text: "Orange", image: Orange1, description: "Rich in Vitamin C and antioxidants, supports immune function, and promotes healthy skin." },
      { text: "Rosemary", image: Rosemary, description: "Improves digestion, enhances memory, and has anti-inflammatory properties." },
      { text: "Lemon", image: Lemon, description: "Boosts immune system, aids digestion, and is rich in Vitamin C and antioxidants." },
      { text: "Raspberry leaf", image: RaspberryLeaf, description: "Supports reproductive health, reduces inflammation, and is rich in vitamins and minerals." },
      { text: "Elderberry", image: Elderberry, description: "Boosts immune system, rich in antioxidants, and supports respiratory health." },
      { text: "Nettle", image: Nettle, description: "Rich in vitamins and minerals, supports detoxification, and promotes healthy skin." },
    ],
  },
  {
    id: 11,
    name: "Raspberry, strawberry & pomegranate tea",
    price: { big: 16, small: 10 },
    size: ["L", "S"],
    image: RaspberryStrawberryPomegranateTea,
    description:
      "There is something seriously magical when introducing three favorites and finding out they pair harmoniously, right? That’s how we felt when we took our iconic, thirst-quenching berries featuring a hit of pomegranate. lovely fruit fragrance, adding a refreshing allure to your lazy summer afternoon. And it’s just as pleasant during other seasonal months. You asked for it, and here it is one of our favorite herbal brews.",
    category: "Sweet and unsweet tea",
    ingredient: [
      { text: "Raspberry", image: Raspberry, description: "Rich in fiber and antioxidants, supports heart health, and has anti-inflammatory properties." },
      { text: "Pomegranate", image: Pomegranate, description: "Rich in antioxidants and vitamins, supports heart health, and has anti-inflammatory properties." },
      { text: "Lemon", image: Lemon, description: "Boosts immune system, aids digestion, and is rich in Vitamin C and antioxidants." },
      { text: "Raspberry leaf", image: RaspberryLeaf, description: "Supports reproductive health, reduces inflammation, and is rich in vitamins and minerals." },
      { text: "Strawberry", image: Strawberry, description: "Boosts immune system, improves heart health, and is rich in vitamins and antioxidants." },
      { text: "Nettle", image: Nettle, description: "Rich in vitamins and minerals, supports detoxification, and promotes healthy skin." },
      { text: "Elderberry", image: Elderberry, description: "Boosts immune system, rich in antioxidants, and supports respiratory health." },
    ],
  },
];
