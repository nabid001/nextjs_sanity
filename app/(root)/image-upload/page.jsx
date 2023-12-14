"use client";

import { CldImage } from "next-cloudinary";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Image
        src="http://res.cloudinary.com/djkxcbm3r/image/upload/v1701876576/o4jwrfkohjbzwv53kou3.jpg"
        alt="image"
        width={300}
        height={200}
        className="origin-center"
      />
    </div>
  );
};

export default page;

{
  /* <CldImage
  width="700"
  height="500"
  zoom="0.75"
  src="hz8q9oukxhhd5gtgulqb"
  alt="Description of my image"
/> */
}
