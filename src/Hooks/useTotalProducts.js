import React, { useState } from 'react'
import ceramica1 from '../Images/ceramica1.jpeg'
import ceramica2 from "../Images/ceramica2.jpeg";
import ceramica3 from "../Images/ceramica3.jpeg";
import ceramica4 from "../Images/ceramica4.jpeg";
import ceramica5 from "../Images/ceramica5.jpeg";
import ceramica6 from "../Images/ceramica6.jpeg";
import ceramica7 from "../Images/ceramica7.jpeg";
import ceramica8 from "../Images/ceramica8.jpeg";
import ceramica9 from "../Images/ceramica9.jpeg";
import ceramica10 from "../Images/ceramica10.jpeg";
import ceramica11 from "../Images/ceramica11.jpeg";
import ceramica12 from "../Images/ceramica12.jpeg";
import ceramica13 from "../Images/ceramica13.jpeg";
import ceramica14 from "../Images/ceramica14.jpeg";
import ceramica15 from "../Images/ceramica15.jpeg";
import ceramica16 from "../Images/ceramica16.jpeg";
import ceramica17 from "../Images/ceramica17.jpeg";


const bazar = [
    {
      id:1,
      name: "Plato de vidrio",
      price: "90.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: `${ceramica1}`,
    },
    {
      id:2,
      name: "4 Platos - 3 Tazas ",
      price: "560.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: `${ceramica2}`,
    },
    {
      id:3,
      name: "3 Platos - 2 Tazas",
      price: "360.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: `${ceramica3}`,
    },
    {
      id:4,
      name: "Plato de ceramica",
      price: "60.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: `${ceramica4}`,
    },
    {
      id:5,
      name: "(Set) 3 Tazas - 4 Platos ",
      price: "650.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: `${ceramica5}`,
    },
    {
      id:6,
      name: "(Set) 5 Tazas - 5 Platos",
      price: "890.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: `${ceramica6}`,
    },
    {
      id:7,
      name: "(Set) 6 Tazas para café",
      price: "1000.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: `${ceramica7}`,
    },
    {
      id:8,
      name: "Taza artesanal",
      price: "70.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: `${ceramica8}`,
    },
    {
      id:9,
      name: "(Set) 2 Tazas - 5 Platos ondos",
      price: "450.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: `${ceramica9}`,
    },
    {
      id:10,
      name: "Taza + Plato para café",
      price: "150.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: `${ceramica10}`,
    },
    {
      id:11,
      name: "Taza + Plato para café",
      price: "150.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: `${ceramica11}`,
    },
    {
      id:12,
      name: "(Set) 4 Tazas - 4 Platos para café",
      price: "670.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: `${ceramica12}`,
    },
    {
      id:13,
      name: "Olla pequeña para adorno",
      price: "50.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: `${ceramica13}`,
    },
    {
      id:14,
      name: "(Set) 4 Bowl para postre",
      price: "300.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: `${ceramica14}`,
    },
    {
      id:15,
      name: "Taza + Plato para café",
      price: "150.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: `${ceramica15}`,
    },
    {
      id:16,
      name: "Taza + Plato grande",
      price: "230.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: `${ceramica16}`,
    },
    {
      id:17,
      name: "Taza + Plato ",
      price: "180.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: `${ceramica17}`,
    },
  ];

export const useTotalProducts = () => {
    const [items, setItems] = useState(bazar);

    return [
        items
    ]
}
