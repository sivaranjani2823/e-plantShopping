import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const plants = [
    // Air Purifying
    { id: 1, name: "Snake Plant", price: 10, category: "Air Purifying", image: "https://picsum.photos/200?1" },
    { id: 2, name: "Peace Lily", price: 12, category: "Air Purifying", image: "https://picsum.photos/200?2" },
    { id: 3, name: "Spider Plant", price: 9, category: "Air Purifying", image: "https://picsum.photos/200?3" },
    { id: 4, name: "Areca Palm", price: 14, category: "Air Purifying", image: "https://picsum.photos/200?4" },
    { id: 5, name: "Rubber Plant", price: 15, category: "Air Purifying", image: "https://picsum.photos/200?5" },
    { id: 6, name: "Boston Fern", price: 11, category: "Air Purifying", image: "https://picsum.photos/200?6" },

    // Medicinal
    { id: 7, name: "Aloe Vera", price: 8, category: "Medicinal", image: "https://picsum.photos/200?7" },
    { id: 8, name: "Tulsi", price: 7, category: "Medicinal", image: "https://picsum.photos/200?8" },
    { id: 9, name: "Mint", price: 6, category: "Medicinal", image: "https://picsum.photos/200?9" },
    { id: 10, name: "Neem", price: 10, category: "Medicinal", image: "https://picsum.photos/200?10" },
    { id: 11, name: "Lavender", price: 13, category: "Medicinal", image: "https://picsum.photos/200?11" },
    { id: 12, name: "Chamomile", price: 12, category: "Medicinal", image: "https://picsum.photos/200?12" },

    // Flowering
    { id: 13, name: "Rose", price: 15, category: "Flowering", image: "https://picsum.photos/200?13" },
    { id: 14, name: "Jasmine", price: 14, category: "Flowering", image: "https://picsum.photos/200?14" },
    { id: 15, name: "Hibiscus", price: 13, category: "Flowering", image: "https://picsum.photos/200?15" },
    { id: 16, name: "Marigold", price: 9, category: "Flowering", image: "https://picsum.photos/200?16" },
    { id: 17, name: "Sunflower", price: 10, category: "Flowering", image: "https://picsum.photos/200?17" },
    { id: 18, name: "Orchid", price: 18, category: "Flowering", image: "https://picsum.photos/200?18" },
  ];

  const categories = [
    "Air Purifying",
    "Medicinal",
    "Flowering",
  ];

  return (
    <>
      <Navbar />

      <h1>Our Plants</h1>

      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          {plants
            .filter(
              (plant) =>
                plant.category === category
            )
            .map((plant) => (
              <div
                key={plant.id}
                style={{
                  border: "1px solid gray",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                <img
                  src={plant.image}
                  width="150"
                />

                <h3>{plant.name}</h3>

                <p>
                  Price: ${plant.price}
                </p>

                <button
                  disabled={cartItems.some(
                    (item) =>
                      item.id === plant.id
                  )}
                  onClick={() =>
                    dispatch(
                      addToCart(plant)
                    )
                  }
                >
                  {cartItems.some(
                    (item) =>
                      item.id === plant.id
                  )
                    ? "Added"
                    : "Add to Cart"}
                </button>
              </div>
            ))}
        </div>
      ))}
    </>
  );
}

export default ProductList;