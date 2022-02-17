const SendEmail = require('./SendEmail');
const MakeHttpRequest = require('./MakeHttpRequest');

class Rule {
       
    // #props;

    // #constructor(props){
    //   this.#props = props;
    // }
     
    static create(props){
      const validation = Rule.#validation(props);
      if(validation.success){
        new Rule(props)
      }else{
        return {
          success: true,
          errors: [].concat(validation.errors)
         } 
      }
       
    }

    static #validation(props){
       
      const validateNameResult = Rule.#validateName(props.name);
      const validateCreatedByResult = Rule.#validateCreatedBy(props.createdBy);
      const validateTriggerResult = Rule.#validateTrigger(props.trigger);
      const validateConditionsResult = Rule.#validateConditions(props.conditions);
      const validateActionsResult = Rule.#validateActions(props.actions);


      if(validateNameResult.success && validateCreatedByResult.success && 
        validateTriggerResult.success && validateConditionsResult.success && 
        validateActionsResult[0].success && validateActionsResult[1].success){
           return  {
            success: true,
            errors:  [ ]
           }  
        }else{
          return{
            success: false,
              errors: [].concat(validateNameResult, validateCreatedByResult, validateTriggerResult,
                validateConditionsResult, validateActionsResult)
          }
        }        


        }
      
    static #validateName(name){ 
       if(typeof name == 'undefined' || name == ""){
         return {
            success: false,
            errors:  [{
                label: "name",
                 code: 'name_invalid',
                message: 'Name must not be empty'
              }]
           }  
       }else{
        return {
            success: true,
            errors:  [ ]
           }  
       }
    }
    
    static #validateCreatedBy(createdBy){
        
        if(typeof createdBy.user_id == 'undefined' || createdBy.user_id == ""){
          return {
            success: false,
            errors:  [{
                label: "userId",
                 code: 'userId_invalid',
                message: 'UserId must not be empty'
              }]
           }
          }else if(typeof createdBy.email == 'undefined' || createdBy.email == ""  || (/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(createdBy.email)) == false){
            return {
              success: false,
              errors:  [{
                  label: "email",
                   code: 'email_invalid',
                  message: 'Email must not be empty'
                }]
             }
          }else if(typeof createdBy.firstname == 'undefined' || createdBy.firstname == ""){
            return {
              success: false,
              errors:  [{
                  label: "firstname",
                   code: 'firstname_invalid',
                  message: 'Firstname must not be empty'
                }]
             }
          }else if(typeof createdBy.lastname == 'undefined' || createdBy.lastname == ""){
            return {
              success: false,
              errors:  [{
                  label: "lastname",
                  code: 'lastname_invalid',
                  message: 'lastname must not be empty'
                }]
             }
          }else {
            return {
                success: true,
                errors:  [ ]
               }  
           }

        }

      static #validateTrigger(trigger){
        if(typeof trigger == 'undefined' || trigger == ""){
          return {
             success: false,
             errors:  [{
                 label: "trigger",
                  code: 'trigger_invalid',
                 message: 'Trigger must not be empty'
               }]
            }  
        }else{
         return {
             success: true,
             errors:  [ ]
            }  
        }
      }
      
      static #validateConditions(conditions){
        if(typeof conditions == 'undefined' || conditions.length == 0){
          return {
             success: false,
             errors:  [{
                 label: "conditions",
                  code: 'conditions_invalid',
                 message: 'Conditions must not be empty'
               }]
            }  
        }else{
         return {
             success: true,
             errors:  [ ]
            }  
        }
    }

     static #validateActions(actions){

      const resultAction = [];
      
      for (const action of actions){

        if(action.type == "SendEmail"){
          resultAction.push(SendEmail.validateActionsSendEmail(action));
         }else if(action.type == "MakeHttpRequest"){
          resultAction.push(MakeHttpRequest.validateActionsMakeHttpRequest(action))
         }else{
          return {
            success: false,
            errors:  [{
                label: "type",
                 code: 'type_invalid',
                message: 'Type must not be empty'
              }]
           }
         } 
      }  
      
      return resultAction;
         
     }

    }
  
const rule1 = Rule.create({name: "auth", 
createdBy: { user_id: "", email: "manzama@gmail.com", firstname: "maz", 
  lastname: "stev"}, trigger: "Candidature soumise", conditions: ["khgtyff", "dfrf"], 
  actions: [{
    type: 'MakeHttpRequest',
    url: "www.gty.com",
    headers: "ggkop;;0988" ,
    method: "put",
    secret: "secre648890000"
  },
  {
    type: 'MakeHttpRequest',
    url: "www.hgd.com", 
    headers: "khgtyff0975ewg987",
    method: "PUT",
    secret: "khgtyff0975ewg987"
  }
] 
});
  
