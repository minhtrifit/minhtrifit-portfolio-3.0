"use client";

import { useState } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PropType {
  images: string[];
}

const ImageView = (props: PropType) => {
  const { images } = props;

  const [activeImage, setActiveImage] = useState<string>(
    images[0] ? images[0] : "/assets/no-image.png"
  );

  return (
    <div>
      <Image
        className="w-[100%] h-auto"
        src={activeImage ? activeImage : "/assets/no-image.png"}
        priority
        sizes="100vw"
        width="0"
        height="0"
        alt="nav-logo"
      />
      <Carousel className="mx-auto mt-6 w-[80%] sm:w-[100%]">
        <CarouselContent>
          {images?.map((image: string) => {
            return (
              <CarouselItem
                key={uuidv4()}
                className="pt-3 basis-1/2 lg:basis-1/3"
                onClick={() => {
                  setActiveImage(image);
                }}
              >
                <Image
                  className={`w-[200px] h-auto hover:opacity-100 hover:cursor-grab hover:translate-y-[-5px] ${
                    activeImage === image
                      ? "opacity-100  border-2 border-primary-blue"
                      : "opacity-40"
                  }`}
                  src={image}
                  priority
                  sizes="100vw"
                  width="0"
                  height="0"
                  alt="nav-logo"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ImageView;
