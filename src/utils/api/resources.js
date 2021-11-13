

const { 
  REACT_APP_API_BACKEND,

} = "http://localhost:8080/";

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