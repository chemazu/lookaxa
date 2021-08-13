import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MainMenu(props) {
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(window.location.href);
  });
  const menuItems = [
    [" New"],
    [
      "WOMEN ",
      "GIFTS FOR WOMEN",
      "New arrivals ",
      "Ready-to-wear ",
      "Swim wear",
      "Bags ",
      "Shoes",
      "Accessories",
      "Beauty ",
      " LX",
    ],
    [
      "MEN ",
      "GIFTS FOR MEN",
      "New arrivals ",
      "Ready-to-wear ",
      "Swim wear",
      "Bags ",
      "Shoes",
      "Accessories",
      "Beauty ",
      " LX",
    ],
    [
      "CHILDREN",
      "GIFTS FOR CHILDREN ",
      "New Arrivals ",
      "Male",
      "Female",
      "Infants ",
      "Ready-to-wear",
      "Bags ",
      "Shoes ",
      " Accessories",
    ],
    [
      "JEWELLERY&WATCHES",
      <strong>JEWELLERY</strong>,
      <strong>For Women</strong>,
      " Rings",
      "Necklaces ",
      "Bracelets",
      " Earrings",
      "Charms ",
      " Hair Accessories ",
      "Brooches & Pins ",
      "Leg Chains",

      <strong>For Men"</strong>,
      "Rings",
      "Necklaces ",
      "Bracelets",
      "Earrings",
      "Chains ",
      "Cufflinks",

      <strong>WATCHES</strong>,
      "All Watches",
      "For Women ",
      " For Men ",
      "For Children",
    ],
    ["BEAUTY"],
    [
      "SPORTS",
      "SPORTS GIFTS",
      "New Arrivals",

      "Women",
      "Clothes",
      "Shoes ",
      "Accessories ",
      "   ",
      "Men",
      "Clothes",
      "Shoes",
      "Accessories",
      "  ",
      ,
      "Children",
      "Clothes",
      "Shoes ",
      "Accessories",

      " Equipments ",
      "View All",
    ],
    [
      "AFRIQUE",
      "GIFTS",
      "New Arrivals ",
      "Ready To Wear",
      "For Women ",
      "For Men",
      "For Children",
      "Unisex",
    ],
    [
      "DÉCOR",
      "GIFTS",
      "Home Scents ",
      "Lighting",
      "Decor and Mirrors",
      "Pillows and Throws ",
      "Rugs",
      "Kitchen & Dinning",
      "Bedding & Bath",
      " Furniture ",
      " Chairs & Armchair",
    ],
    ["LX", "GIFTS", "Men", "Women", "Children"],
  ];
  return (
    <nav className="main-nav">
      <ul className="menu sf-arrows">
        <li className={`megamenu-container`} id="menu-home">
          <Link to={`${process.env.PUBLIC_URL}`} className="sf-with-ul">
            Home
          </Link>
        </li>
        {/* <li className={`megamenu-container`} id="menu-home">
          <Link
            to={`${process.env.PUBLIC_URL}/shop/dashboard`}
            className="sf-with-ul"
          >
            Dashboard
          </Link>
        </li> */}
        <li className={path.indexOf("shop") > -1 ? "active" : ""}></li>
        {menuItems.map((item) => {
          let subMenu = item.slice(1, item.length);
          return (
            <li>
              <Link
                to={`${process.env.PUBLIC_URL}/shop/nosidebar/${item[0]}`}
                className="sf-with-ul"
              >
                {item[0]}
              </Link>
              <ul>
                <li
                  className={
                    path.indexOf("blog/grid/2cols") > -1 ? "active" : ""
                  }
                >
                  {subMenu.map((subMenuItem) => {
                    return (
                      <Link
                        to={`${process.env.PUBLIC_URL}/shop/nosidebar/${subMenuItem}`}
                      >
                        <p className="myhover">{subMenuItem}</p>
                      </Link>
                    );
                  })}
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
