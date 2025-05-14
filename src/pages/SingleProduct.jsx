import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../constants/products";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { toast } from 'react-toastify';

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedSize, setSelectedSize] = useState(
    Object.keys(products[0].price)[0]
  );
  const [quantity, setQuantity] = useState(1); // Added quantity state

  // Find the product by ID
  const product = products.find((p) => p.id === parseInt(id));

  // Set the current displayed image - now properly resets when product changes
  const [currentImage, setCurrentImage] = useState(product?.image);

  // Reset images when product changes
  useEffect(() => {
    if (product) {
      setCurrentImage(product.image);
      setSelectedSize(Object.keys(product.price)[0]); // Reset size selection
      setQuantity(1); // Reset quantity when product changes
    }
    window.scrollTo(0, 0);
  }, [id, product]); // Added product to dependency array

  // Related products handler
  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  // Fallback for invalid product
  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl">Product not found</p>
      </div>
    );
  }

  // Calculate current price based on selected size
  const getCurrentPrice = () => {
    if (typeof product.price === "string") {
      return product.price;
    } else if (typeof product.price === "object") {
      return product.price[selectedSize];
    }
    return "Price not available";
  };

    // Format price for display
    const formatPrice = (price) => {
      if (typeof price === "string") {
        return `$${price}`;
      }
      return `$${price}`;
  };
  
  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      size: selectedSize,
      price: product.price[selectedSize],
      quantity: quantity, // Now using the quantity state
    };
    addToCart(productToAdd);
    toast.success(`${product.name} added to cart!`);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
    toast.success(`${product.name} added to wishlist!`); 
  };

  // Quantity handlers
  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Swiper images handler
  const images =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images
      : [product.image];

  return (
    <div className="px-4 md:px-10 py-5 max-md:mt-6">
      <p className="text-[#232323] flex flex-row gap-2 mt-10">
        Back to{" "}
        <a href="/products" className="flex items-center gap-2">
          <span className="text-yellow">Shop</span>
        </a>
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-between md:gap-16 gap-6 py-6">
        <div className="mt-10">
          {/* Main Image */}
          <div className="relative">
            <img
              src={currentImage}
              alt={product.name}
              width={400}
              height={400}
              className="w-[400px] lg:w-[500px] h-[400px] object-cover rounded-lg"
            />
          </div>
          {/* Other Views Section */}
          <div className="flex gap-4 mt-6 mx-auto justify-center max-md:gap-1">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product View ${index + 1}`}
                className={`w-24 h-24 object-cover rounded-lg cursor-pointer border ${
                  currentImage === image ? "border-black" : "border-transparent"
                }`}
                onClick={() => setCurrentImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6 lg:w-1/2 mt-20">
        <p className="text-2xl font-semibold">{product.name}</p>
        <p className="font-semibold text-2xl">
          {formatPrice(getCurrentPrice())}
        </p>

          {/* Quantity Selector  */}
          <div className="flex items-center gap-4">
            <span className="font-medium">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                className="px-3 py-1 text-lg font-medium"
                onClick={decrementQuantity}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="px-4 py-1 border-x border-gray-300">
                {quantity}
              </span>
              <button
                className="px-3 py-1 text-lg font-medium"
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
          </div>

          {/* Select Size */}
          {typeof product.price === "object" && (
            <select
              className="border px-4 py-3 border-black outline-none"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              {Object.keys(product.price).map((size) => (
                <option key={size} value={size}>
                  {size.charAt(0).toUpperCase() + size.slice(1)} - ${" "}
                  {product.price[size]}
                </option>
              ))}
            </select>
          )}

          {/* Add to Cart & Wishlist Buttons */}
          <div className="flex flex-col gap-3">
            <button
              className="bg-yellow hover:bg-opacity-30 px-6 py-2 text-center"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
            <button
              className="bg-black hover:bg-opacity-30 text-white px-6 py-2 text-center"
              onClick={handleAddToWishlist}
            >
              Add to wishlist
            </button>
          </div>
        </div>
      </div>
      {/* Tabs Section */}
      <div className="my-10 flex flex-col md:flex-row w-full items-start md:gap-16 gap-6">
        <div className="flex md:flex-col flex-row gap-4 border-gray-200">
          <button
            className={`px-6 md:w-60 py-2 ${
              activeTab === "description"
                ? "border-b-2 border-black bg-gray-100 p-2"
                : ""
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`px-6 md:w-60 py-2 ${
              activeTab === "ingredients"
                ? "border-b-2 border-black bg-gray-100 p-2"
                : ""
            }`}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </button>
        </div>

        <div className="md:py-6">
          {activeTab === "description" ? (
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold mb-4">
                Product Description
              </h3>
              <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
              {/* <img src={product.image} alt=""></img> */}
            </div>
          ) : (
            <div className="flex flex-col gap-4 w-full">
              <h3 className="text-xl font-medium mb-4 flex justify-center w-full">
                DID YOU KNOW?
              </h3>
              <div className=" pl-6 flex flex-col gap-8">
                {product.ingredient ? (
                  product.ingredient.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.text}
                        className="w-24 h-24 bg-cover"
                      />
                      <div className="flex flex-col gap-2">
                        <p className="font-semibold text-xl">{item.text}</p>
                        <p>{item.description}</p>
                        {/* <button className="text-white bg-black py-2 px-4 rounded-full w-fit">Read More</button> */}
                        <hr />
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    <p>No Ingredient</p>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-16 mb-10">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-10 w-4 rounded-md bg-black"></div>
            <h2 className="text-2xl font-semibold">Related Products</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
