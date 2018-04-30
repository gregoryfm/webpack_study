const product = {
  name: 'Pen Bic Black',
  value: 1.90,
  discount: 0.05,
}

function clone(object) {
  return  { ...object };
}

const newProduct = clone(product);
newProduct.name = "Pen Bic Blue";

console.log(product, newProduct);
