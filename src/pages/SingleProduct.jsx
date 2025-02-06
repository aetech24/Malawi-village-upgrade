import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../constants/products";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

const SingleProduct = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext); // Access addToCart from context
  const { addToWishlist } = useContext(WishlistContext); // Access addToWishlist from context
  // const [activeTab, setActiveTab] = useState("description");
  const [selectedSize, setSelectedSize] = useState(
    Object.keys(products[0].price)[0]
  ); // Default to the first size

  // Find the product by ID
  const product = products.find((p) => p.id === parseInt(id));

  // Set the current displayed image
  const [currentImage, setCurrentImage] = useState(product?.image);

  // Related products: same category, excluding the current product
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

  // Format price based on type
  const formatPrice = (price) => {
    if (typeof price === "string") {
      return `$${price}`;
    } else if (typeof price === "object" && price !== null) {
      return `$${Object.values(price).join(" - $")}`;
    }
    return "Price not available";
  };

  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      size: selectedSize,
      price: product.price[selectedSize],
      quantity: 1, // Default quantity when adding to cart
    };
    addToCart(productToAdd);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
  };

  // Swiper images: Ensure valid array
  const images =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images
      : [product.image];

  return (
    <div className="px-4 md:px-10 py-5 max-md:mt-6">
      <p className="text-[#232323] flex flex-row gap-2 mt-10">
        Back to <a href="/products" className="flex items-center gap-2"><span className="text-yellow">Shop</span></a>
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-between md:gap-16 gap-6 py-6">
        <div className="mt-10">
          {/* Main Image */}
          <div className="relative">
            <img
              src={currentImage}
              alt={product.name}
              className="w-full lg:w-500px h-[400px] object-cover rounded-lg"
            />
          </div>
          {/* Other Views Section */}
          <div className="flex gap-4 mt-6 mx-auto justify-center">
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
          <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
          <p className="font-semibold text-2xl">{formatPrice(product.price)}</p>

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
