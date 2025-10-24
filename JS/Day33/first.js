// zomato application 

const OrderDetail={
    orderId: 124456,
    Food: ["Pizza","friedRice","coke"],
    cost: 630,
    customer_name: "Manish",
    customer_location: "Palsana",
    restaurant_location: "Rajasthan"

}

function placedOrder(OrderDetail,callback){
    console.log(`${OrderDetail.cost} Payment is in Prograss`)

    setTimeout(()=>{
        console.log("Payment is Recived and order get Placed")
        OrderDetail.status = true;
        callback(OrderDetail);
    },3000)
}

function preparingOrder(OrderDetail,callback){
    console.log(`Your Food Prepration Started ${OrderDetail.Food}`);

    setTimeout(()=>{
        console.log("Your Order is now Prepared")
        OrderDetail.token = 124;
        callback(OrderDetail);
    },3000)
}

function pickupOrder(OrderDetail,callback){
    console.log(`Delivery Boy is on a way to Pickup order from ${OrderDetail.restaurant_location}`);

    setTimeout(()=>{
        console.log("I have Pickuped the Order")
        OrderDetail.received = true;
        callback(OrderDetail);
    },6000)
}

function deliverOrder(OrderDetail){
    console.log(`I am on the way to deliver order ${OrderDetail.customer_location}`)

    setTimeout(()=>{
        console.log("Order Delivered succsfully");
        OrderDetail.delivery = true;
    },5000)
}

placedOrder(OrderDetail,(OrderDetail)=>{
    preparingOrder(OrderDetail,(OrderDetail)=>{
        pickupOrder(OrderDetail,(OrderDetail)=>{
            deliverOrder(OrderDetail);
        });
    });
});
