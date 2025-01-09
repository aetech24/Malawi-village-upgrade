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



export const products = [
    {
      id: 1,
      name: "Intelligent Water",
      price: { big: 16, small: 10 },
      size: ["L", "S"],
      image: Water,
      description:
        "Watermelon is one of the most alkaline forming fruits on planet earth. powerful fruit that is Packs with Potassium and Magnesium. Watermelon has 92% H302 hydrogen bond water inside of them. Watermelon is Known for heling cardiovascular system, keeping the body hydrated and providing Electrolytes and Ascorbic Acid. The best result comes from a daily intake or frequent watermelon fast. This is an all-healing fruit for the body!",
      category: "Refreshments",
      ingredient: [
        { text: "Watermelon", image: Watermelon, description: "Hydrates and provides electrolytes." },
        { text: "Lime", image: Lime, description: "Rich in Vitamin C and antioxidants." },
        { text: "Ginger", image: Ginger1, description: "Aids digestion and reduces inflammation." },
        { text: "Lemon", image: Lemon, description: "Boosts immune system and aids digestion." },
        { text: "Agave", image: Agave, description: "Natural sweetener with a low glycemic index." },
      ],
    },
    {
      id: 2,
      name: "Orange Juice",
      price: { big: 16, small: 10 },
      size: ["L", "S"],
      image: Orange,
      description:
        "Freshly squeezed juice is made with 100% organic oranges, and nothing else. Rich in Vitamin C & folate, and potassium. helps the body to metabolize carbohydrates, vitamin C supports your immune system and may be effective in fighting against the common cold. Mayimproved heart health, decreased inflammation, and a reduced risk of kidney stones.",
      category: "Refreshments",
      ingredient: [
        { text: "Organic orange juice", image: Orange1, description: "Rich in Vitamin C and antioxidants." },
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
        { text: "Hibiscus", image: Hibiscus, description: "Lowers blood pressure and supports liver health." },
        { text: "Raspberry", image: Raspberry, description: "Rich in fiber and antioxidants." },
        { text: "Strawberry", image: Strawberry, description: "Boosts immune system and improves heart health." },
        { text: "Mango", image: Mango, description: "Rich in vitamins and antioxidants." },
        { text: "Pineapple", image: Pineapple, description: "Aids digestion and reduces inflammation." },
        { text: "Ginger", image: Ginger1, description: "Aids digestion and reduces inflammation." },
        { text: "Lemon", image: Lemon, description: "Boosts immune system and aids digestion." },
        { text: "Agave", image: Agave, description: "Natural sweetener with a low glycemic index." },
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
        { text: "Ginger Roots", image: Ginger1, description: "Aids digestion and reduces inflammation." },
        { text: "Lime", image: Lime, description: "Rich in Vitamin C and antioxidants." },
        { text: "Pineapple", image: Pineapple, description: "Aids digestion and reduces inflammation." },
        { text: "Clove", image: Clove, description: "Rich in antioxidants and improves liver health." },
        { text: "Agave", image: Agave, description: "Natural sweetener with a low glycemic index." },
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
        { text: "Mango", image: Mango, description: "Rich in vitamins and antioxidants." },
        { text: "Pineapple", image: Pineapple, description: "Aids digestion and reduces inflammation." },
        { text: "Ginger", image: Ginger1, description: "Aids digestion and reduces inflammation." },
        { text: "Lime", image: Lime, description: "Rich in Vitamin C and antioxidants." },
        { text: "Lemon", image: Lemon, description: "Boosts immune system and aids digestion." },
        { text: "Agave", image: Agave, description: "Natural sweetener with a low glycemic index." },
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
        { text: "Grapefruit", image: Grapefruit, description: "Rich in Vitamin C and antioxidants." },
        { text: "Lime", image: Lime, description: "Rich in Vitamin C and antioxidants." },
        { text: "Orange", image: Orange1, description: "Rich in Vitamin C and antioxidants." },
        { text: "Ginger", image: Ginger1, description: "Aids digestion and reduces inflammation." },
        { text: "Cayenne pepper", image: Cayenne, description: "Boosts metabolism and reduces inflammation." },
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
        { text: "Kale", image: Kale, description: "Rich in vitamins and antioxidants." },
        { text: "Turnip-green", image: TurnipGreen, description: "Rich in vitamins and antioxidants." },
        { text: "Watercress", image: Watercress, description: "Rich in vitamins and antioxidants." },
        { text: "Arugula", image: Arugula, description: "Rich in vitamins and antioxidants." },
        { text: "Apple", image: Apple, description: "Rich in fiber and antioxidants." },
        { text: "Lime", image: Lime, description: "Rich in Vitamin C and antioxidants." },
        { text: "Ginger", image: Ginger1, description: "Aids digestion and reduces inflammation." },
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
        { text: "Beet Roots", image: BeetRoots, description: "Rich in vitamins and antioxidants." },
        { text: "Apple", image: Apple, description: "Rich in fiber and antioxidants." },
        { text: "Orange", image: Orange1, description: "Rich in Vitamin C and antioxidants." },
        { text: "Kale", image: Kale, description: "Rich in vitamins and antioxidants." },
        { text: "Ginger", image: Ginger1, description: "Aids digestion and reduces inflammation." },
        { text: "Lemon", image: Lemon, description: "Boosts immune system and aids digestion." },
      ],
    },
    {
      id: 9,
      name: "Mango & Coconut tea",
      price: { big: 16, small: 10 },
      size: ["L", "S"],
      image: Strong,
      description:
        "A refreshing tropical twist, presents an exotic escape, transporting the mango tea lover to distant realms with its aromatic fusion of coconut. Coconut is a great energy-revitalizing drink. Coconut provides a large portion of sodium, potassium, phosphorus, calcium, and magnesium, which help revive and enhance your energy. Mango often considered a superfood rich in fiber, good source of vitamins, minerals, and antioxidants. Boost the Immune System and Ease Constipation.",
      category: "Sweet and unsweet tea",
      ingredient: [
        { text: "Chamomile", image: Chamomile, description: "Promotes relaxation and aids sleep." },
        { text: "Nettle", image: Nettle, description: "Rich in vitamins and minerals." },
        { text: "Raspberry leaf", image: RaspberryLeaf, description: "Supports reproductive health." },
        { text: "Elderberry", image: Elderberry, description: "Boosts immune system." },
      ],
    },
    {
      id: 10,
      name: "Orange and Rosemary Tea",
      price: { big: 16, small: 10 },
      size: ["L", "S"],
      image: Rouge,
      description:
        "Fuel your senses with the pleasant aroma and taste of orange and rosemary. From the first sip, the blend is bright and delicate, mimicking the sweet summer flavor of freshly sliced oranges, followed by a pleasant surprise of rosemary.",
      category: "Sweet and unsweet tea",
      ingredient: [
        { text: "Orange", image: Orange1, description: "Rich in Vitamin C and antioxidants." },
        { text: "Rosemary", image: Rosemary, description: "Improves digestion and memory." },
        { text: "Lemon", image: Lemon, description: "Boosts immune system and aids digestion." },
        { text: "Raspberry leaf", image: RaspberryLeaf, description: "Supports reproductive health." },
        { text: "Elderberry", image: Elderberry, description: "Boosts immune system." },
        { text: "Nettle", image: Nettle, description: "Rich in vitamins and minerals." },
      ],
    },
    {
      id: 11,
      name: "Raspberry, strawberry & pomegranate tea",
      price: { big: 16, small: 10 },
      size: ["L", "S"],
      image: Pina,
      description:
        "There is something seriously magical when introducing three favorites and finding out they pair harmoniously, right? That’s how we felt when we took our iconic, thirst-quenching berries featuring a hit of pomegranate. lovely fruit fragrance, adding a refreshing allure to your lazy summer afternoon. And it’s just as pleasant during other seasonal months. You asked for it, and here it is one of our favorite herbal brews.",
      category: "Sweet and unsweet tea",
      ingredient: [
        { text: "Raspberry", image: Raspberry, description: "Rich in fiber and antioxidants." },
        { text: "Pomegranate", image: Pomegranate, description: "Rich in antioxidants and vitamins." },
        { text: "Lemon", image: Lemon, description: "Boosts immune system and aids digestion." },
        { text: "Raspberry leaf", image: RaspberryLeaf, description: "Supports reproductive health." },
        { text: "Strawberry", image: Strawberry, description: "Boosts immune system and improves heart health." },
        { text: "Nettle", image: Nettle, description: "Rich in vitamins and minerals." },
        { text: "Elderberry", image: Elderberry, description: "Boosts immune system." },
      ],
    },
  ];

