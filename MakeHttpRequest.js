class MakeHttpRequest {
  

    static validateActionsMakeHttpRequest(actions){
      if(typeof actions.url == 'undefined' || actions.url == ""){
        return {
          success: false,
          errors:  [{
              label: "url",
               code: 'url_invalid',
              message: 'Url must not be empty'
            }]
         } 
       }else if(typeof actions.headers == 'undefined' || actions.headers == ""){
        return {
          success: false,
          errors:  [{
              label: "headers",
               code: 'headers_invalid',
              message: 'headers must not be empty'
            }]
         }
      }else if(typeof actions.method == 'undefined' || actions.method == ""){
        return {
          success: false,
          errors:  [{
              label: "method",
               code: 'method_invalid',
              message: 'Method must not be empty'
            }]
         }
      }else if(typeof actions.secret == 'undefined' || actions.secret == ""){
        return {
          success: false,
          errors:  [{
              label: "secret",
               code: 'secret_invalid',
              message: 'Secret must not be empty'
            }]
         }
      }else {
        return {
            success: true,
            errors:  [ ]
           }  
       }
    }
  }

  module.exports = MakeHttpRequest