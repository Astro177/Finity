/* eslint-disable @next/next/no-img-element */
import { IconButton } from "@material-tailwind/react";
import { AiTwotoneHeart } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const reviews = [
    {
      photo:
        "https://img.freepik.com/premium-vector/man-character_665280-46970.jpg",
      review:
        "Great experience! The food was delicious, and the service was excellent. I highly recommend this place.",
      name: "John Doe",
    },
    {
      photo:
        "https://img.freepik.com/premium-vector/man-character_665280-46970.jpg",
      review:
        "The atmosphere was cozy, and the staff was friendly. I'll definitely be coming back here.",
      name: "Jane Smith",
    },
    {
      photo:
        "https://img.freepik.com/premium-vector/man-character_665280-46970.jpg",
      review:
        "I had a wonderful time at this restaurant. The food was top-notch, and the ambiance was perfect for a romantic evening.",
      name: "Michael Johnson",
    },
    {
      photo:
        "https://img.freepik.com/premium-vector/man-character_665280-46970.jpg",
      review:
        "Not the best experience. The service was slow, and the food was mediocre at best.",
      name: "Sarah Williams",
    },
    {
      photo:
        "https://img.freepik.com/premium-vector/man-character_665280-46970.jpg",
      review:
        "The food was amazing, and the prices were very reasonable. I'll be recommending this place to my friends.",
      name: "Chris Davis",
    },
    {
      photo:
        "https://img.freepik.com/premium-vector/man-character_665280-46970.jpg",
      review:
        "I was disappointed with my visit. The restaurant was noisy, and the food quality didn't meet my expectations.",
      name: "Emily Brown",
    },
    {
      photo:
        "https://img.freepik.com/premium-vector/man-character_665280-46970.jpg",
      review:
        "Outstanding service! The staff went above and beyond to make our dining experience memorable.",
      name: "Daniel Lee",
    },
    {
      photo:
        "https://img.freepik.com/premium-vector/man-character_665280-46970.jpg",
      review:
        "I love this place! The food is consistently good, and the staff is always friendly and attentive.",
      name: "Amanda Wilson",
    },
    {
      photo:
        "https://img.freepik.com/premium-vector/man-character_665280-46970.jpg",
      review:
        "The restaurant has a unique and stylish decor. I had a great time here and would visit again.",
      name: "Robert Johnson",
    },
    {
      photo:
        "https://img.freepik.com/premium-vector/man-character_665280-46970.jpg",
      review:
        "The food was average, but the view from the restaurant was breathtaking. It's worth visiting for the scenery.",
      name: "Jennifer Taylor",
    },
  ];

  return (
    <section className="md:mt-[150px] max-w-[1200px] mx-auto mb-20 px-10 md:px-0">
      <IconButton
        variant="filled"
        size="lg"
        className="rounded-full bg-blue-200 text-blue-600 text-xl"
      >
        <AiTwotoneHeart />
      </IconButton>
      <p className="text-[60px] text-bold text-[#1D293F] mt-10 md:max-w-[700px]">
        1,000+ customers are loving Instappoint.
      </p>
      <div className="mt-32 mb-32 hidden md:block">
        <Slider {...settings}>
          {reviews.map((review, i) => (
            <div
              key={i}
              className="text-start border h-[250px] px-6 py-2 text-[#1D293F]"
            >
              <img
                src={review.photo}
                alt={review.name}
                className="mx-auto mb-4 w-12 h-12"
              />
              <p className="text-sm mt-2 px-6">{review.review}</p>
              <p className="mt-2 px-6 text-bold text-sm">@{review.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
