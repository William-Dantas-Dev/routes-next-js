"use client";
import { notFound } from "next/navigation";

function getRandomInt(count: number){
  return Math.floor(Math.random() * count);
}

export default function ReviewsDetail({ params }: {
  params: {
    productId: string,
    reviewId: string
    };
}){
  // const random = getRandomInt(2);
  // if(random === 1){
  //   throw new Error(`Error Loading Review ${params.reviewId}`);
  // }
  if(parseInt(params.reviewId) > 1000 ){
    notFound();
  }
  return <h1>Details About Review {params.reviewId} By Product {params.productId}</h1>
}