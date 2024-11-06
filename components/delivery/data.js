import { FaTruckFast } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";


const deliveryFeatureData = [
  {
    id: 1,
    icon: <FaTruckFast className=" text-[2rem] " />,
    title: "FREE AND FAST DELIVERY",
    desc: "Free delivery for all orders over $140"
  },
  {
    id: 2,
    icon: <TfiHeadphoneAlt className=" text-[2rem] " />,
    title: "24/7 CUSTOMER SERVICE",
    desc: "Friendly 24/7 customer support"
  },
  {
    id: 3,
    icon: <IoShieldCheckmarkOutline className=" text-[2rem] " />,
    title: "MONEY BACK GUARANTEE",
    desc: "We reurn money within 30 days"
  }
]

export default deliveryFeatureData;