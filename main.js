// Getting the data 

const form = document.querySelector('form')

const customer = document.querySelector('#fullname')
const serving = document.querySelectorAll('[name="size"]')
const topping = document.querySelectorAll('[type="checkbox"]')
const delivery = document.querySelector('#delivery')
const orderPrice = document.querySelector('#price')

const pizzaForm = () => {
    
    let customerName = customer.value
    let servingPrice = ''
    let toppingPrice = []
    let deliveryPrice = delivery.options[delivery.selectedIndex].value
    let price = 0;

// Starting from the serving price using switch

    serving.forEach(item => {
        if(item.checked){  
            servingPrice = item.value 
        }
    })

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

// Adding the topping price if customer chooses more than four toppings

    topping.forEach(item => {
        if (item.checked){
            toppingPrice.push(item.value)
        }
    })
    if (toppingPrice.length > 4) {
        price += (toppingPrice.length -4) * 0.5
    }

// Finally adding delivery price if the customer chooses home delivery

    if (deliveryPrice === "home") {
        price +=5
    }
    
        orderPrice.textContent = price.toFixed(2)
    }
    
    form.addEventListener('change', pizzaForm)