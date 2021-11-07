
export async function getAll(resource){
  let result = null;
   await fetch("http://localhost:8080/"+resource)
     .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            result=data;
        })
        .catch(error => {
            console.error('There was an error!', error);
        });

return result;
}

export function getOrders() {

  return  [
    { 
      id: '00000000001',
      purchaseOrderId: 'PU-9382138123812',
      customerOrderId: 'CO-00000000001',
      customerEmailId: '3A31739D8B0A45A1B23F7F8C81C8747F',
      orderType: 'REGULAR',
      orderDate: "1568466571000",
      orderStatus: "PENDIENTE DE APROBACION",
      shippingInfo: {
          phone: "3155598681",
          estimatedDeliveryDate: 1569438000000,
          estimatedShipDate: 1568700000000,
          methodCode: "Value",
          postalAddress: {
            name: "Kathryn Cole",
            address1: "3258BWarners rd",
            address2: "Garage",
            city: "Warners",
            state: "NY",
            postalCode: "13164",
            country: "USA",
            addressType: "RESIDENTIAL"
          }
      },
      orderLines: [
        { 
          lineNumber: 1,
          item: { 
            productName: "Lorem",
            sku: "234e32r32432432"
          },
          "charges": {
              "charge": [
              {
              "chargeType": "PRODUCT",
              "chargeName": "ItemPrice",
              "chargeAmount": {
              "currency": "USD",
              "amount": 10
              },
              "tax": {
              "taxName": "Tax1",
              "taxAmount": {
              "currency": "USD",
              "amount": 0.8
              }
              }
              }
              ]
              },
        }
      ]
    }
  ]
}