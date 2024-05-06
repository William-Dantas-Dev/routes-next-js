import { notFound } from "next/navigation";

export default function ReviewsDetai({ params }: {
  params: {
    productId: string,
    reviewId: string
    };
}){
  if(parseInt(params.reviewId) > 1000 ){
    notFound();
  }
  return <h1>Details About Review {params.reviewId} By Product {params.productId}</h1>
}