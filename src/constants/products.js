import Orange from "../assets/image-1.jpg";
import Ginger from "../assets/Traditional Ginger beer-main.jpg";
import ginger from "../assets/Traditional Ginger Beer.jpg";
import ginger1 from "../assets/Traditional_Ginger_Beer.jpg";
import ginger2 from "../assets/Traditionally Ginger Beer.jpg";
// import zobo from '../assets/image-3.jpg'
import Zobo from "../assets/Zobo-main.jpg";
import Zobo1 from "../assets/Zobo.jpg";
import Zobo2 from "../assets/Zobo-hero-img.jpg";
import Zobo_2 from "../assets/Zobo_2.jpg";
import PinaMain from "../assets/PinaMain.jpg";
import Pina from "../assets/banner.jpg";
import Pina1 from "../assets/pina1.jpg";
import Pina2 from "../assets/pina_2.jpg";
import VitaminC from "../assets/Vitamin C.jpg";
import Strong from "../assets/Strong_Green.jpg";
import Rouge from "../assets/Rouge.jpg";
import Rouge2 from "../assets/Rouge (2).jpg";
import Rouge3 from "../assets/Rouge (3).jpg";
import WaterMain from "../assets/intelligent_water_main.jpg";
// import Water from "../assets/intelligent_water_main.jpg"
import Water1 from "../assets/Intelligent_water.jpg";
import Water2 from "../assets/Intelligent_water (2).jpg";
import Water3 from "../assets/intelligent_water (4).jpg";
import Watermelon from "../assets/watermelon.jpg";
import Hibiscus from "../assets/hibiscus.jpeg";
import Raspberry from "../assets/raspberry.jpeg";
import Strawberry from "../assets/strawberry.jpeg";
import Mango from "../assets/mango.jpeg";
import Pineapple from "../assets/pineapple.jpeg";
import Orange1 from "../assets/orange.jpeg";
import Orange2 from "../assets/orange1.jpg";
import Orange3 from "../assets/orange2.jpg";
import Ginger1 from "../assets/ginger.jpeg";
import Lemon from "../assets/lemon.jpeg";
import Agave from "../assets/agave.jpeg";
import Lime from "../assets/lime.jpeg";
import RaspberryLeaf from "../assets/raspberryleaf.jpeg";
import Rosemary from "../assets/rosemarry.jpeg";
import Elderberry from "../assets/elderberry.jpeg";
import Clove from "../assets/clove.jpeg";
import Grapefruit from "../assets/grape.jpeg";
import Cayenne from "../assets/cayenne.jpeg";
import Kale from "../assets/kale.jpeg";
import TurnipGreen from "../assets/turnip-green.jpeg";
import Watercress from "../assets/watercress.jpeg";
import Arugula from "../assets/arugula.jpeg";
import Apple from "../assets/green-apple.jpg";
import BeetRoots from "../assets/beetroot.jpeg";
import Chamomile from "../assets/chamomile.jpeg";
import Cucumber from "../assets/cucumber.jpeg"
import Nettle from "../assets/nettle.jpeg";
import Pomegranate from "../assets/pomegranate.jpeg";
import RaspberryStrawberryPomegranateTea from "../assets/RaspberryStrawberryPomegranateTea.jpg";
import OrangeAndRosemaryTea from "../assets/OrangeAndRosemaryTea.jpg";
import MangoJuice from "../assets/MangoJuice.jpg";
import Orange4 from "../assets/Orange (3).jpg";
import ginger3 from "../assets/Traditioanlly Ginger Beer.jpg";

export const products = [
  {
    id: 1,
    name: "Intelligent Water",
    price: { big: 16, small: 10 },
    size: ["L", "S"],
    image: Water2,
    images: [WaterMain, Water1, Water2, Water3],
    description:
      `Watermelon is one of the most alkaline-forming fruits
       on the planet. It is a powerful fruit packed with potassium and
       magnesium. Watermelon contains 92% H₂O, which forms hydrogen
       bonds inside it. It is known for helping the cardiovascular system,
       keeping the body hydrated, and providing electrolytes and ascorbic acid.
       The best results come from daily intake or frequent watermelon fasting.
       This is an all-healing fruit for the body!
      `,
    category: "Refreshments",
    ingredient: [
      {
        text: "Watermelon",
        image: Watermelon,
        description:
          "Hydrates and provides electrolytes, supports cardiovascular health, and is rich in vitamins A and C.",
      },
      {
        text: "Lime and Lemon",
        image: Lime,
        description:
          `
          Limes are rich in vitamin C, which plays a crucial role in supporting
          the immune system. Consuming vitamin C can help reduce the
          duration and severity of common cold symptoms. Additionally,
          vitamin C is essential for collagen formation, aiding wound healing
          and maintaining healthy skin. Boosts immune system, aids digestion, and is rich in Vitamin C and antioxidants.
          `,
      },
      {
        text: "Ginger",
        image: Ginger1,
        description:
          `
          Ginger is packed with essential vitamins and minerals, offering a
          natural way to support your overall well-being. Ginger contains
          Vitamin C, B3, B6, iron, potassium, magnesium, phosphorus, zinc,
          folate, riboflavin, and niacin. Natural Anti-Inflammatory which
          Helps soothe muscles and reduce inflammation.
          `,
      },
      {
        text: "Agave",
        image: Agave,
        description:
          "Natural sweetener with a low glycemic index, helps regulate blood sugar levels.",
      },
    ],
  },
  {
    id: 2,
    name: "Orange Juice",
    price: { big: 16, small: 10 },
    size: ["L", "S"],
    image: Orange,
    images: [Orange, Orange2, Orange3, Orange4],
    description:
      `
      Enjoy the pure, refreshing taste of 100% organic freshly squeezed
      orange juice, made from sun-ripened oranges, nothing else. Naturally
      rich in Vitamin C, it helps strengthen your immune system and may
      support recovery from the common cold. Packed with essential nutrients
      like potassium, fiber, calcium, folate, thiamine, choline, and zeaxanthin, it
      promotes heart health, supports skin and eye health, and helps maintain
      overall well-being.
      `,
    category: "Refreshments",
    ingredient: [
      {
        text: "Organic orange juice",
        image: Orange1,
        description:
          `
          Naturally rich in Vitamin C, it helps strengthen your
          immune system and may support recovery from the common
          cold. Packed with essential nutrients like potassium, fiber, calcium,
          folate, thiamine, choline, and zeaxanthin, it promotes heart health,
          supports skin and eye health, and helps maintain overall well-
          being.
          `,
      },
    ],
  },
  {
    id: 3,
    name: "Zobo",
    price: { big: 16, small: 10 },
    size: ["L", "S"],
    image: Zobo2,
    images: [Zobo, Zobo1, Zobo_2],
    description:
      `
    Our hibiscus flower juice is more than just a
    delicious tart and refreshing drink. It’s packed with powerful health benefits, thanks to the
    natural nutrients and antioxidants found in hibiscus.<br>

    <b>Supports Heart Health:</b> Hibiscus is known for its heart-friendly properties, and
    studies suggest that hibiscus drinks may help lower blood pressure,
    particularly in individuals with mild hypertension. Its natural compounds
    support cardiovascular health, making it a refreshing way to care for your
    heart.<br>

    <b>Fights Inflammation:</b> Hibiscus is rich in antioxidants like polyphenols that help
    reduce oxidative stress and inflammation in the body.<br>
    <b>Aids Digestion:</b> Hibiscus has mild diuretic and digestive-supporting properties,
    which may help promote healthy guts and smooth digestion.<br>

    <b>Boosts Immunity:</b> Hibiscus contains Vitamin C, quercetin, and gallic acid, which
    support immune function.

      `,
    category: "Refreshments",
    ingredient: [
      {
        text: "Hibiscus",
        image: Hibiscus,
        description:
          "Lowers blood pressure, supports liver health, and is rich in antioxidants.",
      },
      {
        text: "Raspberry",
        image: Raspberry,
        description:
         "Rich in fiber and antioxidants, supports heart health, and has anti-inflammatory properties.",
      },
      {
        text: "Strawberry",
        image: Strawberry,
        description:
          "Boosts immune system, improves heart health, and is rich in vitamins and antioxidants.",
      },
      {
        text: "Mango",
        image: Mango,
        description:
          `
          are rich in vitamins A, C, and E, antioxidants, and dietary
          fiber, supporting immune function, heart health, digestive health,
          and skin vitality.
          `,
      },
      {
        text: "Pineapple",
        image: Pineapple,
        description:
          "Aids digestion, reduces inflammation, and is rich in vitamins and antioxidants.",
      },
      {
        text: "Ginger",
        image: Ginger1,
        description:
          `
          Ginger is packed with essential vitamins and minerals, offering a
          natural way to support your overall well-being. Ginger contains
          Vitamin C, B3, B6, iron, potassium, magnesium, phosphorus, zinc,
          folate, riboflavin, and niacin. Natural Anti-Inflammatory which
          Helps soothe muscles and reduce inflammation.
          `,
      },
      {
        text: "Lime and Lemon",
        image: Lemon,
        description:
          `Limes are rich in vitamin C, which plays a crucial role in supporting
          the immune system. Consuming vitamin C can help reduce the
          duration and severity of common cold symptoms. Additionally,
          vitamin C is essential for collagen formation, aiding wound healing
          and maintaining healthy skin. Boosts immune system, aids digestion, and is rich in Vitamin C and antioxidants.
          `,
      },
      {
        text: "Agave",
        image: Agave,
        description:
          "Natural sweetener with a low glycemic index, helps regulate blood sugar levels.",
      },
    ],
  },
  {
    id: 4,
    name: "Traditional Ginger beer",
    price: { big: 16, small: 10 },
    size: ["L", "S"],
    image: Ginger,
    images: [ginger, ginger1, ginger2, ginger3],
    description:
      `
      Our fresh ginger juice is packed with essential
      vitamins and minerals, offering a natural way to support your overall
      well-being. Ginger contains Vitamin C, B3, B6, iron, potassium,
      magnesium, phosphorus, zinc, folate, riboflavin, and niacin, every sip
      delivers a powerful dose of nutrients. Natural Anti-Inflammatory – Helps
      soothe muscles and reduce inflammation.<br>

      <b>Anti-Inflammatory &amp; Antibacterial:</b> Ginger contains gingerol, a bioactive
      compound with anti-inflammatory and antibacterial properties, which
      help reduce muscle soreness, support immune function, and fight
      infections.<br>

      <b>Nausea Relief:</b> Ginger is well-known for reducing nausea and motion
      sickness and is commonly used for morning sickness in pregnancy and
      chemotherapy-induced nausea.<br>
      <b>Fights Infections:</b> Ginger has antimicrobial properties and may help fight
      certain bacteria and viruses.
      `,
    category: "Refreshments",
    ingredient: [
      {
        text: "Ginger Roots",
        image: Ginger1,
        description:
          "Aids digestion, reduces inflammation, and has powerful antioxidant and anti-inflammatory properties.",
      },
      {
        text: "Lime and Lemon",
        image: Lime,
        description:
           `Limes are rich in vitamin C, which plays a crucial role in supporting
          the immune system. Consuming vitamin C can help reduce the
          duration and severity of common cold symptoms. Additionally,
          vitamin C is essential for collagen formation, aiding wound healing
          and maintaining healthy skin. Boosts immune system, aids digestion, and is rich in Vitamin C and antioxidants.
          `,
      },
      {
        text: "Pineapple",
        image: Pineapple,
        description:
          "Aids digestion, reduces inflammation, and is rich in vitamins and antioxidants.",
      },
      {
        text: "Clove",
        image: Clove,
        description:
          "Rich in antioxidants, improves liver health, and has anti-inflammatory properties.",
      },
      {
        text: "Agave",
        image: Agave,
        description:
          "Natural sweetener with a low glycemic index, helps regulate blood sugar levels.",
      },
    ],
  },
  {
    id: 5,
    name: "Pina tropical",
    price: { big: 16, small: 10 },
    size: ["L", "S"],
    image: PinaMain,
    images: [Pina, Pina1, Pina2],
    description:
      `
      Mangoes are packed with essential nutrients and
      antioxidants, making them a delicious and healthy addition to your daily
      routine.<br>
      <b>Aids Digestion:</b> Rich in fiber, it promotes smooth digestion and supports
      gut health.<br>
      <b>Rich in Vitamin C:</b> Supports immune health, promotes healthy collagen
      formation, and aids in healing.<br>
      <b>Eye Health:</b> Contains vitamin A and beta-carotene, which help protect
      and support healthy vision.<br>
      <b>Prevents Diabetes:</b> May help regulate blood sugar levels due to its low
      glycemic index.<br>
      <b>High in Antioxidants:</b> Protects your body from oxidative stress and
      supports overall well-being.
      `,
    category: "Refreshments",
    ingredient: [
      {
        text: "Mango",
        image: Mango,
        description:
          `
          Mangoes are rich in vitamins A, C, and E, antioxidants, and dietary
          fiber, supporting immune function, heart health, digestive health,
          and skin vitality.
          `,
      },
      {
        text: "Pineapple",
        image: Pineapple,
        description:
          "Aids digestion, reduces inflammation, and is rich in vitamins and antioxidants.",
      },
      {
        text: "Ginger",
        image: Ginger1,
        description:
          `
          Ginger is packed with essential vitamins and minerals, offering a
          natural way to support your overall well-being. Ginger contains
          Vitamin C, B3, B6, iron, potassium, magnesium, phosphorus, zinc,
          folate, riboflavin, and niacin. Natural Anti-Inflammatory which
          Helps soothe muscles and reduce inflammation.
          `,
      },
      {
        text: "Lime and Lemon",
        image: Lime,
        description:
           `Limes are rich in vitamin C, which plays a crucial role in supporting
          the immune system. Consuming vitamin C can help reduce the
          duration and severity of common cold symptoms. Additionally,
          vitamin C is essential for collagen formation, aiding wound healing
          and maintaining healthy skin. Boosts immune system, aids digestion, and is rich in Vitamin C and antioxidants.
          `,
      },
      {
        text: "Agave",
        image: Agave,
        description:
          "Natural sweetener with a low glycemic index, helps regulate blood sugar levels.",
      },
    ],
  },
  {
    id: 6,
    name: "Vitamin C",
    price: { big: 16, small: 10 },
    size: ["L", "S"],
    image: VitaminC,
    images: [VitaminC, VitaminC, VitaminC],
    description:
      `
      Immunity powerhouse, our daily wellness shot, is a potent
      blend designed to enhance your overall vitality. It supports digestive
      health, aids in weight management, promotes healthy skin, and helps
      expel mucus. For optimal results, consume a large amount each
      morning and another at night after your last meal.
      `,
    category: "Detox and Immune booster",
    ingredient: [
      {
        text: "Grapes",
        image: Grapefruit,
        description:
          `
          Grapes are rich in vitamin A and C, antioxidants, and fiber,
          supporting immune function, heart health, and weight
          management.
          `,
      },
      {
        text: "Lime and Lemon",
        image: Lime,
        description:
           `Limes are rich in vitamin C, which plays a crucial role in supporting
          the immune system. Consuming vitamin C can help reduce the
          duration and severity of common cold symptoms. Additionally,
          vitamin C is essential for collagen formation, aiding wound healing
          and maintaining healthy skin. Boosts immune system, aids digestion, and is rich in Vitamin C and antioxidants.
          `,
      },
      {
        text: "Orange",
        image: Orange1,
        description:
          `
          Orange is Naturally rich in Vitamin C, it helps strengthen your
          immune system and may support recovery from the common
          cold. Packed with essential nutrients like potassium, fiber, calcium,
          folate, thiamine, choline, and zeaxanthin, it promotes heart health,
          supports skin and eye health, and helps maintain overall well-
          being.
          `,
      },
      {
        text: "Ginger",
        image: Ginger1,
        description:
          `
          Ginger is packed with essential vitamins and minerals, offering a
          natural way to support your overall well-being. Ginger contains
          Vitamin C, B3, B6, iron, potassium, magnesium, phosphorus, zinc,
          folate, riboflavin, and niacin. Natural Anti-Inflammatory which
          Helps soothe muscles and reduce inflammation.
          `,
      },
      {
        text: "Cayenne pepper",
        image: Cayenne,
        description:
          `
          Cayenne pepper contains capsaicin, which aids digestion,
          reduces inflammation, and supports weight management.
          `,
      },
    ],
  },
  {
    id: 7,
    name: "Strong Green",
    price: { big: 16, small: 10 },
    size: ["L", "S"],
    image: Strong,
    images: [Strong, Strong, Strong],
    description:
      `
      Introducing our comprehensive Gut Health Cleanse,
      meticulously crafted to enhance your overall health and well-being. This
      potent blend offers a multitude of benefits:<br>
    <b> Natural Detoxification:</b> aids in eliminating toxins from the body, promoting
      overall health and well-being. Its natural properties support the body&#39;s
      detox processes. promotes regular bowel movements and helps
      prevent constipation. The soluble fiber content aids in reducing
      bloating and discomfort.<br>

    <b> Detoxification and Skin Health:</b> Packed with antioxidants, vitamins, and
      minerals, it assists in detoxifying the body, leading to healthier, glowing
      skin. These nutrients combat free radicals, supporting skin vitality.<br>
    <b> Supports Heart Health:</b> Contains nutrients that help lower cholesterol
      levels and support cardiovascular health. Regular consumption can
      contribute to a healthier heart.<br>
    <b> Blood Sugar Regulation:</b> Help stabilize blood sugar levels, potentially
      reducing the risk of type 2 diabetes. Consuming it regularly can be part
      of a healthy lifestyle.
      `,
    category: "Detox and Immune booster",
    ingredient: [
      {
        text: "Kale",
        image: Kale,
        description:
          `
          Kale is very low in calories and extremely high in nutrients,
          making it one of the healthiest and most nutrient-dense foods
          available. Rich in antioxidants and a top source of vitamins C and K. It
          contains, lutein, zeaxanthin, omega-3 fatty acid, alpha linolenic-
          acid, flavonoids, calcium, magnesium, and potassium.
          `,
      },
      {
        text: "Turnip-green",
        image: TurnipGreen,
        description:
          `
          Turnip-green are rich in vitamins A, C, and K, calcium, and antioxidants,
          supporting bone health, reducing inflammation, and potentially lowering the
          risk of chronic diseases. Aid digestion, boost immunity, and promote weight
          loss.
          `,
      },
      {
        text: "Watercress",
        image: Watercress,
        description:
          `
          Watercress is rich in vitamins A, C, and K, calcium, and antioxidants,
          supporting bone health, reducing inflammation, and potentially
          lowering the risk of chronic diseases. Enhance athletic
          performance and support eye health.
          `,
      },
      {
        text: "Arugula",
        image: Arugula,
        description:
          `
          Arugula is rich in vitamins A, C, and K, calcium, and antioxidants,
          supporting bone health, reducing inflammation, and potentially
          lowering the risk of chronic diseases.
          `,
      },
      {
        text: "Green Apple",
        image: Apple,
        description:
          `
          Are high in fiber content which helps in increasing the body’s
          metabolism. They also have low-fat content and help in maintaining good blood
          flow in the body, also rich in vitamin A and C, good for bone and fight against
          ageing.
          `,
      },
      {
        text: "Lime and Lemon",
        image: Lime,
        description:
         `Limes are rich in vitamin C, which plays a crucial role in supporting
          the immune system. Consuming vitamin C can help reduce the
          duration and severity of common cold symptoms. Additionally,
          vitamin C is essential for collagen formation, aiding wound healing
          and maintaining healthy skin. Boosts immune system, aids digestion, and is rich in Vitamin C and antioxidants.
          `,
      },
      {
        text: "Ginger",
        image: Ginger1,
        description:
          `
          Ginger is packed with essential vitamins and minerals, offering a
          natural way to support your overall well-being. Ginger contains
          Vitamin C, B3, B6, iron, potassium, magnesium, phosphorus, zinc,
          folate, riboflavin, and niacin. Natural Anti-Inflammatory which
          Helps soothe muscles and reduce inflammation.
          `,
      },
      {
        text: "Cucumber",
        image: Cucumber,
        description:
        `
        contain electrolytes, calcium, vitamin K, fiber, and
         Cucurbitaceae. All these nutrients help with cancer prevention, cardiovascular
          health, diabetes, inflammation and the health of your skin.
        `
      }
    ],
  },
  {
    id: 8,
    name: "Rouge",
    price: { big: 16, small: 10 },
    size: ["L", "S"],
    image: Rouge,
    images: [Rouge, Rouge2, Rouge3],
    description:
      `
      Beets are a vibrant root vegetable known for their rich nutritional
      profile and numerous health benefits. They are low in calories yet high in
      essential nutrients, including folate, manganese, vitamin C, vitamin A,
      and potassium. These nutrients help reduce the risk of heart disease and
      stroke, improve digestive health, fight inflammation, and support brain
      health. Additionally, consuming beetroot juice may enhance exercise
      performance and support energy levels.
      `,
    category: "Detox and Immune booster",
    ingredient: [
      {
        text: "Beet Roots",
        image: BeetRoots,
        description:
          `
          Beets are rich in essential nutrients, including fiber, vitamin C,
          vitamin A, vitamin B6, folate, manganese, potassium, and iron.
          They are particularly high in nitrates, which have been shown to
          lower blood pressure and improve cardiovascular health.
          `,
      },
      {
        text: "Apple",
        image: Apple,
        description:
          `
          Apples highly versatile fruits that offer numerous nutritional benefits. Rich
          in fiber, vitamin C, K, A, E, potassium, magnesium, cooper, and
          pectin. They help reduce the risk of diabetes, asthma, and cancer. They
          are beneficiary for bone health as well as promoting weight loss
          and brain health.
          `,
      },
      {
        text: "Orange",
        image: Orange1,
        description:
          `
          Orange Naturally rich in Vitamin C, it helps strengthen your
          immune system and may support recovery from the common
          cold. Packed with essential nutrients like potassium, fiber, calcium,
          folate, thiamine, choline, and zeaxanthin, it promotes heart health,
          supports skin and eye health, and helps maintain overall well-
          being.
          `,
      },
      {
        text: "Kale",
        image: Kale,
        description:
          `
          Kale is very low in calories and extremely high in nutrients,
          making it one of the healthiest and most nutrient-dense foods
          available. Rich in antioxidants and a top source of vitamins C and K. It
          contains, lutein, zeaxanthin, omega-3 fatty acid, alpha linolenic-
          acid, flavonoids, calcium, magnesium, and potassium.
          `,
      },
      {
        text: "Ginger",
        image: Ginger1,
        description:
          `
          Ginger is packed with essential vitamins and minerals, offering a
          natural way to support your overall well-being. Ginger contains
          Vitamin C, B3, B6, iron, potassium, magnesium, phosphorus, zinc,
          folate, riboflavin, and niacin. Natural Anti-Inflammatory which
          Helps soothe muscles and reduce inflammation.
          `,
      },
      {
        text: "Lime and Lemon",
        image: Lemon,
        description:
          
         `Limes are rich in vitamin C, which plays a crucial role in supporting
          the immune system. Consuming vitamin C can help reduce the
          duration and severity of common cold symptoms. Additionally,
          vitamin C is essential for collagen formation, aiding wound healing
          and maintaining healthy skin. Boosts immune system, aids digestion, and is rich in Vitamin C and antioxidants.
          `,
      },
    ],
  },
  {
    id: 9,
    name: "Mango & Coconut tea",
    price: { big: 16, small: 10 },
    size: ["L", "S"],
    image: MangoJuice,
    images: [MangoJuice, MangoJuice, MangoJuice],
    description:
      `
      Fuel your senses with the pleasant aroma and taste of
      orange and rosemary. From the first sip, the blend is bright and delicate, mimicking
      the sweet summer flavor of freshly sliced oranges, followed by a pleasant surprise
      of rosemary.
      `,
    category: "Sweet and unsweet tea",
    ingredient: [
      {
        text: "Chamomile",
        image: Chamomile,
        description:
          "Promotes relaxation, aids sleep, and has anti-inflammatory properties.",
      },
      {
        text: "Nettle",
        image: Nettle,
        description:
          `
          Nettle is rich in vitamins A, C, and K, calcium, and antioxidants,
          supporting bone health, reducing inflammation, and potentially
          lowering the risk of chronic diseases. Aid digestion boosts the
          immune system, and supports women&#39;s health, including during
          pregnancy.
          `,
      },
      {
        text: "Raspberry leaf",
        image: RaspberryLeaf,
        description:
          `
          Raspberry leaf is rich in vitamins A, C, and K, calcium, and
          antioxidants, supporting bone health, reducing inflammation, and
          potentially lowering the risk of chronic diseases. Aids digestion
          boosts the immune system, and supports women&#39;s health, including during
          pregnancy.
          `,
      },
      {
        text: "Elderberry",
        image: Elderberry,
        description:
          `
          Elderberry are rich in antioxidants and vitamins, which support
          immune function, reduce inflammation, and aid in managing cold
          and flu symptoms. Elderberries promote heart health, assist in
          weight management, and support metabolic health.
          `,
      },
    ],
  },
  {
    id: 10,
    name: "Orange and Rosemary Tea",
    price: { big: 16, small: 10 },
    size: ["L", "S"],
    image: OrangeAndRosemaryTea,
    images: [OrangeAndRosemaryTea, OrangeAndRosemaryTea, OrangeAndRosemaryTea],
    description:
      "Fuel your senses with the pleasant aroma and taste of orange and rosemary. From the first sip, the blend is bright and delicate, mimicking the sweet summer flavor of freshly sliced oranges, followed by a pleasant surprise of rosemary.",
    category: "Sweet and unsweet tea",
    ingredient: [
      {
        text: "Orange",
        image: Orange1,
        description:
          `
          Oranges are  Naturally rich in Vitamin C, it helps strengthen your
          immune system and may support recovery from the common
          cold. Packed with essential nutrients like potassium, fiber, calcium,
          folate, thiamine, choline, and zeaxanthin, it promotes heart health,
          supports skin and eye health, and helps maintain overall well-
          being.
          `,
      },
      {
        text: "Rosemary",
        image: Rosemary,
        description:
          `
          is rich in antioxidants and anti-inflammatory compounds, which
          support brain health, improve memory, aid digestion, and promote hair growth.
        `,
      },
      {
        text: "Lime and Lemon",
        image: Lemon,
        description:
           `Limes are rich in vitamin C, which plays a crucial role in supporting
          the immune system. Consuming vitamin C can help reduce the
          duration and severity of common cold symptoms. Additionally,
          vitamin C is essential for collagen formation, aiding wound healing
          and maintaining healthy skin. Boosts immune system, aids digestion, and is rich in Vitamin C and antioxidants.
          `,
      },
      {
        text: "Raspberry leaf",
        image: RaspberryLeaf,
        description:
          `
          Raspberry leaf is rich in vitamins A, C, and K, calcium, and
          antioxidants, supporting bone health, reducing inflammation, and
          potentially lowering the risk of chronic diseases. Aids digestion
          boosts the immune system, and supports women's health, including during
          pregnancy.
          `,
      },
      {
        text: "Elderberry",
        image: Elderberry,
        description:
          `
          Elderberry are rich in antioxidants and vitamins, which support
          immune function, reduce inflammation, and aid in managing cold
          and flu symptoms. Elderberries promote heart health, assist in
          weight management, and support metabolic health.
          `,
      },
      {
        text: "Nettle",
        image: Nettle,
        description:
          `
          is rich in vitamins A, C, and K, calcium, and antioxidants, supporting bone
          health, reducing inflammation, and potentially lowering the risk of chronic
          diseases. Aid digestion boosts the immune system, and supports women's health,
          including during pregnancy..
          `,
      },
    ],
  },
  {
    id: 11,
    name: "Raspberry, strawberry & pomegranate tea",
    price: { big: 16, small: 10 },
    size: ["L", "S"],
    image: RaspberryStrawberryPomegranateTea,
    images: [
      RaspberryStrawberryPomegranateTea,
      RaspberryStrawberryPomegranateTea,
      RaspberryStrawberryPomegranateTea,
    ],
    description:
      `
      There is something seriously
      magical when introducing three favorites and finding out they pair harmoniously,
      right? That’s how we felt when we took our iconic, thirst-quenching berries
      featuring a hit of pomegranate. lovely fruit fragrance, adding a refreshing allure to
      your lazy summer afternoon. It’s just as pleasant during other seasonal months.
      You asked for it, and here it is, one of our favorite herbal brews.
      `,
    category: "Sweet and unsweet tea",
    ingredient: [
      {
        text: "Raspberry",
        image: Raspberry,
        description:
          "Rich in fiber and antioxidants, supports heart health, and has anti-inflammatory properties.",
      },
      {
        text: "Pomegranate",
        image: Pomegranate,
        description:
          `
          Pomegranates are rich in antioxidants, vitamins C and K, and fiber,
          supporting heart health, reducing inflammation, and aiding digestion.
          `,
      },
      {
        text: "Lime and Lemon",
        image: Lemon,
        description:
           `Limes are rich in vitamin C, which plays a crucial role in supporting
          the immune system. Consuming vitamin C can help reduce the
          duration and severity of common cold symptoms. Additionally,
          vitamin C is essential for collagen formation, aiding wound healing
          and maintaining healthy skin. Boosts immune system, aids digestion, and is rich in Vitamin C and antioxidants.
          `,
      },
      {
        text: "Raspberry leaf",
        image: RaspberryLeaf,
        description:
          `
          Raspberry leaf is rich in vitamins A, C, and K, calcium, and
          antioxidants, supporting bone health, reducing inflammation, and
          potentially lowering the risk of chronic diseases. Aids digestion
          boosts the immune system, and supports women&#39;s health, including during
          pregnancy.
          `,
      },
      {
        text: "Strawberry",
        image: Strawberry,
        description:
          "Boosts immune system, improves heart health, and is rich in vitamins and antioxidants.",
      },
      {
        text: "Nettle",
        image: Nettle,
        description:
          `
          is rich in vitamins A, C, and K, calcium, and antioxidants, supporting bone
          health, reducing inflammation, and potentially lowering the risk of chronic
          diseases. Aid digestion boosts the immune system, and supports women's health,
          including during pregnancy.
          `,
      },
      {
        text: "Elderberry",
        image: Elderberry,
        description:
          `
          Elderberry are rich in antioxidants and vitamins, which support
          immune function, reduce inflammation, and aid in managing cold
          and flu symptoms. Elderberries promote heart health, assist in
          weight management, and support metabolic health.
          `,
      },
    ],
  },
];
