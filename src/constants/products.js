import Image1 from '../assets/image-1.jpg'
import Image2 from '../assets/image-2.jpg'
import Image3 from '../assets/image-3.jpg'
import Image4 from '../assets/image-4.jpg'
import Image5 from '../assets/image-5.jpg'
import Image6 from '../assets/image-6.jpg'
import Image7 from '../assets/image-7.jpg'
import Image8 from '../assets/image-8.jpg'
import Image9 from '../assets/image-9.jpg'
import Image10 from '../assets/image-10.jpg'

export const products = [
    {
        id: 1,
        name: "Apple Juice",
        price: { big: "16", small: "10" },
        description: "Experience the crisp, refreshing taste of our premium Apple Juice. Made from hand-picked, locally sourced apples, this juice captures the perfect balance of sweetness and tartness. Rich in antioxidants and natural vitamins, it's not just refreshing but also a healthy choice for any time of day. Each batch is carefully pressed and filtered to ensure the purest, most authentic apple flavor.",
        image: Image1,
        category: "Fruit Juice",
        ingredients: [
            "Fresh pressed apples",
            "Natural apple pectin",
            "Vitamin C",
            "Filtered water",
            "Natural apple enzymes"
        ]
    },
    {
        id: 2,
        name: "Orange Juice",
        price: { big: "16", small: "10" },
        description: "Our signature Orange Juice is a vibrant blend of premium, sun-ripened oranges. Each glass delivers a burst of natural citrus flavor and essential vitamins. We carefully select the juiciest oranges and process them at peak ripeness to capture their maximum nutritional value and taste. Perfect for breakfast or as a refreshing drink throughout the day.",
        image: Image2,
        category: "Fruit Juice",
        ingredients: [
            "Fresh squeezed oranges",
            "Natural pulp",
            "Vitamin C",
            "Citrus bioflavonoids",
            "Natural orange oils"
        ]
    },
    {
        id: 3,
        name: "Mango Juice",
        price: { big: "16", small: "10" },
        description: "Indulge in the tropical sweetness of our Mango Juice. Made from perfectly ripened mangoes, this juice brings the taste of summer to your glass. Our special extraction process preserves the rich, creamy texture and natural sweetness of fresh mangoes. Each sip is a delightful journey to a tropical paradise.",
        image: Image3,
        category: "Fruit Juice",
        ingredients: [
            "Fresh mango pulp",
            "Natural mango fiber",
            "Vitamin A & C",
            "Filtered water",
            "Natural fruit sugars"
        ]
    },
    {
        id: 4,
        name: "Passion Juice",
        price: { big: "16", small: "10" },
        description: "Experience the exotic tang of our Passion Fruit Juice. This unique blend combines the intense flavor of fresh passion fruits with just the right amount of sweetness. Rich in antioxidants and natural flavor compounds, it's both refreshing and nutritious. The perfect choice for those seeking an exciting and unique juice experience.",
        image: Image4,
        category: "Fruit Juice",
        ingredients: [
            "Fresh passion fruit pulp",
            "Natural passion fruit seeds",
            "Vitamin C",
            "Filtered water",
            "Natural fruit acids"
        ]
    },
    {
        id: 5,
        name: "Cocktail Juice",
        price: { big: "16", small: "10" },
        description: "Our Tropical Cocktail Juice is a harmonious blend of various exotic fruits. This carefully crafted mixture combines the best of tropical flavors - sweet mango, tangy pineapple, and refreshing citrus. Each sip delivers a complex flavor profile that's both refreshing and satisfying. Perfect for those who can't choose just one fruit!",
        image: Image5,
        category: "Mixed Drinks",
        ingredients: [
            "Mixed tropical fruits",
            "Natural fruit fibers",
            "Mixed vitamins",
            "Filtered water",
            "Natural fruit extracts"
        ]
    },
    {
        id: 6,
        name: "Strawberry Smoothie",
        price: { big: "18", small: "12" },
        description: "Delight in our creamy Strawberry Smoothie, made with fresh, ripe strawberries and premium dairy. This smooth blend combines the sweet taste of seasonal strawberries with a rich, creamy base. Enhanced with natural yogurt cultures, it's not just delicious but also good for your digestive health.",
        image: Image6,
        category: "Smoothies",
        ingredients: [
            "Fresh strawberries",
            "Natural yogurt",
            "Honey",
            "Probiotic cultures",
            "Almond milk"
        ]
    },
    {
        id: 7,
        name: "Banana Smoothie",
        price: { big: "18", small: "12" },
        description: "Our Banana Smoothie is a perfect blend of ripe bananas and creamy goodness. Made with premium bananas at their peak ripeness, this smoothie is naturally sweet and packed with potassium. The addition of natural yogurt creates a silky texture that's both satisfying and nutritious. An excellent choice for a quick breakfast or post-workout refreshment.",
        image: Image7,
        category: "Smoothies",
        ingredients: [
            "Fresh ripe bananas",
            "Greek yogurt",
            "Honey",
            "Cinnamon",
            "Almond milk"
        ]
    },
    {
        id: 8,
        name: "Berry Blast",
        price: { big: "18", small: "12" },
        description: "Experience an explosion of berry flavors with our Berry Blast Smoothie. This antioxidant-rich blend combines strawberries, blueberries, and raspberries for a powerful punch of flavor and nutrition. The perfect balance of sweet and tart, this smoothie is as nutritious as it is delicious.",
        image: Image8,
        category: "Smoothies",
        ingredients: [
            "Mixed berries",
            "Greek yogurt",
            "Natural honey",
            "Chia seeds",
            "Coconut water"
        ]
    },
    {
        id: 9,
        name: "Tropical Paradise",
        price: { big: "20", small: "14" },
        description: "Transport yourself to a tropical island with our Tropical Paradise blend. This exotic mixture combines coconut water with fresh tropical fruits for a refreshing and hydrating experience. The natural electrolytes from coconut water make it perfect for hot days or post-exercise refreshment.",
        image: Image9,
        category: "Mixed Drinks",
        ingredients: [
            "Coconut water",
            "Pineapple",
            "Mango",
            "Passion fruit",
            "Natural mint"
        ]
    },
    {
        id: 10,
        name: "Green Detox",
        price: { big: "20", small: "14" },
        description: "Our Green Detox is a nutrient-rich blend designed for health-conscious individuals. Combining fresh green vegetables with subtle fruit sweetness, this juice provides essential nutrients while maintaining a refreshing taste. Perfect for those looking to maintain a healthy lifestyle or starting a cleanse.",
        image: Image10,
        category: "Health Drinks",
        ingredients: [
            "Spinach",
            "Kale",
            "Green apple",
            "Cucumber",
            "Ginger",
            "Lemon"
        ]
    },
    {
        id: 11,
        name: "Carrot Juice",
        price: { big: "16", small: "10" },
        description: "Our fresh Carrot Juice is a nutrient powerhouse, packed with beta-carotene and essential vitamins. Made from locally sourced carrots and enhanced with a hint of ginger, this juice offers both health benefits and great taste. The addition of apple adds natural sweetness while maintaining the juice's nutritional profile.",
        image: Image1,
        category: "Vegetable Juice",
        ingredients: [
            "Fresh carrots",
            "Green apple",
            "Ginger",
            "Lemon",
            "Turmeric"
        ]
    },
    {
        id: 12,
        name: "Beetroot Juice",
        price: { big: "16", small: "10" },
        description: "Experience the earthy richness of our Beetroot Juice, a powerful blend known for its natural health benefits. Each serving combines fresh beetroots with complementary ingredients to create a balanced, nutritious drink. Popular among athletes and health enthusiasts, this juice is both nutritious and energizing.",
        image: Image2,
        category: "Vegetable Juice",
        ingredients: [
            "Fresh beetroot",
            "Apple",
            "Carrot",
            "Ginger",
            "Lemon"
        ]
    },
    {
        id: 13,
        name: "Watermelon Juice",
        price: { big: "16", small: "10" },
        description: "Cool down with our refreshing Watermelon Juice, made from perfectly ripe, sweet watermelons. This hydrating beverage captures the essence of summer in every sip. Naturally sweet and incredibly refreshing, it's perfect for hot days or post-workout hydration. We add a hint of mint for an extra refreshing twist.",
        image: Image3,
        category: "Fruit Juice",
        ingredients: [
            "Fresh watermelon",
            "Mint leaves",
            "Lime juice",
            "Natural electrolytes",
            "Filtered water"
        ]
    },
    {
        id: 14,
        name: "Lemonade",
        price: { big: "14", small: "8" },
        description: "Our Classic Lemonade is the perfect balance of tart and sweet. Made with fresh-squeezed lemons and naturally sweetened, this timeless refreshment is enhanced with a hint of mint and real honey. Each batch is carefully crafted to achieve the perfect flavor balance that will quench your thirst and refresh your senses.",
        image: Image4,
        category: "Mixed Drinks",
        ingredients: [
            "Fresh lemons",
            "Natural honey",
            "Mint leaves",
            "Filtered water",
            "Natural cane sugar"
        ]
    },
    {
        id: 15,
        name: "Energy Boost",
        price: { big: "20", small: "14" },
        description: "Get your day started with our Energy Boost blend, a natural alternative to artificial energy drinks. This invigorating mixture combines green tea, fruits, and natural energizers like ginger and guarana. Perfect for morning pick-me-ups or pre-workout energy without the crash of artificial stimulants.",
        image: Image5,
        category: "Health Drinks",
        ingredients: [
            "Green tea",
            "Guarana",
            "Ginger",
            "Green apple",
            "Natural caffeine",
            "B-vitamins"
        ]
    },
    {
        id: 16,
        name: "Immunity Booster",
        price: { big: "20", small: "14" },
        description: "Strengthen your immune system with our specially formulated Immunity Booster. This powerful blend combines vitamin C-rich fruits with natural immune-supporting ingredients like turmeric and ginger. A delicious way to support your body's natural defenses while enjoying a refreshing beverage.",
        image: Image6,
        category: "Health Drinks",
        ingredients: [
            "Orange",
            "Lemon",
            "Ginger",
            "Turmeric",
            "Echinacea",
            "Honey"
        ]
    }
];