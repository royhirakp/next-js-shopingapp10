import ProductCard from "../../../../components/product/Product";

export default function Product({ params: { id } }) {
  // const item = data.products.find((x) => {
  //   // console.log("find method", x.id, props.id);
  //   return x.id == props.id;
  // });
  // console.log(item);
  return (
    <>
      {/* <ProductDisplay id={id} />
       */}
      <ProductCard />
    </>
  );
}
