
const form = document.querySelector('form')

const customer = document.querySelector('#fullname')
const serving = document.querySelectorAll('[name="size"]')
const topping = document.querySelectorAll('[type="checkbox"]')
const delivery = document.querySelector('#delivery')
const orderPrice = document.querySelector('#price')

const pizzaForm = () => {
    
    let customerName = customer.value
    console.log('customer',customerName);
    let servingPrice = ''
    let toppingPrice = []
    let deliveryPrice = delivery.options[delivery.selectedIndex].value
    let price = 0;

    serving.forEach(item => {
        if(item.checked){  
            servingPrice = item.value 
        }
    })

    console.log('serving', serving);

    switch (servingPrice) {
        case 'twoservings':
            price += 7.5;
            break;
        case 'fourservings':
            price += 10.5;
            break;
        case 'sixservings':
            price += 12.5;
            break;
        case 'eightservings':
            price += 15.5;
            break;
    };

    topping.forEach(item => {
        if (item.checked){
            toppingPrice.push(item.value)
        }
    })
    if (toppingPrice.length > 4) {
        price += (toppingPrice.length -4) * 0.5
    }
    console.log(toppingPrice);

    if (deliveryPrice === "home") {
        price +=5
    }
        console.log(price);
        orderPrice.textContent = price

}

form.addEventListener('change', pizzaForm)


