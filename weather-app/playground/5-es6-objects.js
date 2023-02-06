// Object property shorthand

const name = "Andrew"
const userAge = 27

const user = {
    name: name,
    age: userAge,
    location: "Philadelphia"
}

console.log(user);

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}  

//const label = product.label
//const stock = product.stock

const transaction = (type, {label,stock}) =>{
    //const {label, stock} = product // extracting attributes from the object
    //const {productLabel:label, stockPrice: stock} = product // extracting attributes from the object
    console.log(label);
    console.log(stock);
}

transaction('order', product)
