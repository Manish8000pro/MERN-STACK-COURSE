// console.log("Hello World")

// code

// const j1 = {
//     name:"Manish",
//     age:22,
//     address: "Rajasthan",
// }

// convert to json
// const jsonFormat = JSON.stringify(j1);
// console.log(jsonFormat);

// const jsonFormat = `{
//     "name": "manish",
//     "age": "22",
//     "address": "Palsana"
// }`;

// Java Script Object
// const JsObject = JSON.parse(jsonFormat);
// console.log(JsObject);



// console.log("ThankYou")


// const p1 = new Promise((resolve,reject)=>{
//     resolve({
//         name: "Manish",
//         age: "22"
//     });
// })
// p1.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// })


// zomato application 

const OrderDetail={
    orderId: 124456,
    Food: ["Pizza","friedRice","coke"],
    cost: 630,
    customer_name: "Manish",
    customer_location: "Palsana",
    restaurant_location: "Rajasthan"

}

function placedOrder(OrderDetail){
    console.log(`${OrderDetail.cost} Payment is in Prograss`)

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

        if(Math.random()>0.01){    
        console.log("Payment is Recived and order get Placed")
        OrderDetail.status = true;
        resolve(OrderDetail)
        }
        else{
            reject("Payment is Failed");
        }
    },3000)
    })

    
}

function preparingOrder(OrderDetail){
    console.log(`Your Food Prepration Started ${OrderDetail.Food}`);

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        
        if(Math.random()>0.05){    
        console.log("Your Order is now Prepared")
        OrderDetail.token = 124;
        resolve(OrderDetail);
        }
        else{
            reject("Food item is not available")
        }
    },3000)
    })

    
}

function pickupOrder(OrderDetail){
    console.log(`Delivery Boy is on a way to Pickup order from ${OrderDetail.restaurant_location}`);

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            if(Math.random()>0.05){
            console.log("I have Pickuped the Order")
            OrderDetail.received = true;
            resolve(OrderDetail);
            }
            else{
                reject("Delivery boy Unable to reach restaurant")
            }
        },6000)
    })

    
}

function deliverOrder(OrderDetail){
    console.log(`I am on the way to deliver order ${OrderDetail.customer_location}`)

    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("Order Delivered succsfully");
        OrderDetail.delivery = true;
        resolve(OrderDetail);
    },5000)  
    })

    
}

async function Ordering() {
    try{
        const response1 = await placedOrder(OrderDetail);
    const response2 = await preparingOrder(response1);
    const response3 = await pickupOrder(response2);
    const response4 = await deliverOrder(response3);

    console.log(response4)
    }
    catch(error){
        console.log("Error:",error);
    }

}

Ordering();