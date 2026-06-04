import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.cart.items
  );

  const totalAmount = items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <h1>Shopping Cart</h1>

      <h2>Total Amount: ${totalAmount}</h2>

      {items.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
          }}
        >
          <img
            src={item.image}
            width="120"
          />

          <h3>{item.name}</h3>

          <p>Unit Price: ${item.price}</p>

          <p>
            Item Total:
            ${item.price * item.quantity}
          </p>

          <button
            onClick={() =>
              dispatch(
                increaseQuantity(item.id)
              )
            }
          >
            +
          </button>

          <span>
            {" "}
            {item.quantity}{" "}
          </span>

          <button
            onClick={() =>
              dispatch(
                decreaseQuantity(item.id)
              )
            }
          >
            -
          </button>

          <br />
          <br />

          <button
            onClick={() =>
              dispatch(
                removeItem(item.id)
              )
            }
          >
            Delete
          </button>
        </div>
      ))}

      <button
        onClick={() =>
          alert("Coming Soon")
        }
      >
        Checkout
      </button>

      <br />
      <br />

      <Link to="/plants">
        <button>
          Continue Shopping
        </button>
      </Link>
    </>
  );
}

export default CartItem;