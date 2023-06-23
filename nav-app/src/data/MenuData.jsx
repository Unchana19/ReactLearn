import { FaHome, FaShoppingCart, FaUserAlt, FaUserShield } from "react-icons/fa";

const MenuData = [
  {
    title: "Home",
    path: "/",
    icon: <FaHome />
  },
  {
    title: "Member",
    path: "/member",
    icon: <FaUserAlt />
  },
  {
    title: "Product",
    path: "/product",
    icon: <FaShoppingCart />
  },
  {
    title: "Admin",
    path: "/admin",
    icon: <FaUserShield />
  },
];

export default MenuData;

