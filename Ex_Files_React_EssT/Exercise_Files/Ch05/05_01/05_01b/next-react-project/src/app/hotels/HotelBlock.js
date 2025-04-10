"use client";
import Image from "next/image";

export default function HotelBlock({id, name, capacity }){
    const imageLoader = ({src}) => {return `./hotels/${src}.jpeg`;};
    return(
      <div>
        <h2><b>{name}</b></h2>
        <Image src={id} height={200} width={300} loader={imageLoader}/>
        <p>Capacity: {capacity}</p>
      </div>
    );
  }