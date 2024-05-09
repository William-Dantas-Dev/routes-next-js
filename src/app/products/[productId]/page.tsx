import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  }
}
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise(resolver => {
    setTimeout(() => {
      resolver(`Android ${params.productId}`)
    }, 100);
  })
  return {
    title: `Product ${title}`
  }
}

export default function ProductDetail({ params }: {
  params: { productId: string};
}){
  return <h1>Details About Product {params.productId}</h1>
}