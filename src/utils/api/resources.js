
import {firebaseCrear} from 'src/utils/FirebaseUtil';

const { 
  REACT_APP_API_BACKEND,

} = "http://localhost:8080/";

export async function processMassiveImportExcel(data, resource){
  console.log("processMassiveImportExcel for resource ", resource);
  if(resource ==='customers'){
    for(let i = 1; i < data.length; i++){
        var newClient = {
          businessId: data[i][0],
          name: data[i][1],
          phone: data[i][2],
          email: data[i][3],
        }
      }
     firebaseCrear('customers', newClient);
    }

    return 200;

  return 500;
}

export async function processMassivePreOrdersImportExcel(data, resource){
  console.log("processMassiveImportExcel for resource ", resource);
  if(resource ==='preorders'){
    for(let i = 1; i < data.length; i++){
    console.log("data new order ", data[i])
        var newOrder = {
          purchaseOrderId: data[i][0],
          customerOrderId: data[i][1],
          customerEmailId: data[i][2],
          orderType: data[i][3],
          orderDate: data[i][4],
          orderStatus: data[i][5],
          orderType: data[i][6],
          shippingInfo: {
            phone: data[i][7],
            estimatedDeliveryDate: data[i][8],
            estimatedShipDate: data[i][9],
            methodCode: data[i][10],
            postalAddress: data[i][11],
          },
          orderLines: {

          }
        }
         createResource('orders', newOrder);
    }

    return 200;
  }

  return 500;
}
export async function getAll(resource){
  console.log("searching request to api backend for the resource ", resource);
  let result = null;

  console.log("URI: http://localhost:8080/" + resource);
   await fetch("http://localhost:8080/"+resource)
     .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                console.log("something was wrong ", error);
                return Promise.reject(error);
            }
            result=data;
        })
        .catch(error => {
            console.error('There was an error!', error);
        });

return result;
}

export async function createResource(resource, data) {

}

export async function editResource(resource, data) {
  
}
export async function deleteResource(resource, data) {
  
}

export async function getResource(resource, id) {
    let result = null;
   await fetch(REACT_APP_API_BACKEND+resource+id)
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