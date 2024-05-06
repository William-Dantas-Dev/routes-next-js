export default function Docs({
  params 
}:{
  params:{
    slug: string[]
  };
}){
  return <>
    <h1>Docs Page</h1>
    {params.slug?.map((slug) => (
      <h1 key={slug}>{slug}</h1>
    ))}
  </>
}