import { useCart } from "../context/CartContext";
import "./Header.css";

export default function Header(){
    const { amount } = useCart();
    return(
        <header>
            <p>Shopping Application</p>
            <p>cart <span className="amount">{amount}</span></p>
        </header>
    )
}