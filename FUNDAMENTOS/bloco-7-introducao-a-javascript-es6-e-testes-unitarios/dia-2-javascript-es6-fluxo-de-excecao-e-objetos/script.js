const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
    for (const property in order) {
          //console.log(property);
        }
        //const deliver = Object.entries(order)[3];
       // console.log(valores);
      
      // console.log(Object.entries(valores)[2]['deliveryPerson']);

    return console.log(`Olá ${order.order.delivery.deliveryPerson}, \n entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº. ${order.address.number}, AP: ${order.address.apartment}`)
    
    // Adicione abaixo as informações necessárias.

}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

}

orderModifier(order);