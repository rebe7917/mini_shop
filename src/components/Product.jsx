function Product(props) {
    function add(){
        props.addToCart(props.data);
    }
  return (
    <article className="Product">
      <h2>{props.data.productdisplayname}</h2>
      <p>{props.data.price}</p>
      <img src={`https://kea-alt-del.dk/t7/images/webp/640/${props.data.id}.webp`} alt={props.data.productdisplayname} />
      <button onClick={add}>Add to basket</button>
    </article>
  );
}
/*

articletype: "Tshirts"
brandname:"Nike" 
category: "Apparel"
discount: null
gender: "Men"
id: 1163
price: 895
productdisplayname: "Sahara Team India Fanwear Round Neck Jersey"
productionyear: 2011
season:"Summer"
soldout:0
subcategory:"Topwear"
usagetype:"Sports"
new entry: 
*/

export default Product;
