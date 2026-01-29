class Apiresponse{
   constructor(status , data , message = "Success" ){
     this.data = data;
     this.status = status;
     this.message = message; 

   }
}
export {Apiresponse};