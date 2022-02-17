class SendEmail  {
  

    static validateActionsSendEmail(actions){
    
      if(typeof actions.templateId == 'undefined' || actions.templateId == ""){  
          return {
            success: false,
            errors:  [{
                label: "templateId",
                 code: 'templateId_invalid',
                message: 'TemplateId must not be empty'
              }]
           } 
          }else if(typeof actions.recipients == 'undefined' || Object.keys(actions.recipients).length === 0){
            return {
              success: false,
              errors:  [{
                  label: "recipients",
                   code: 'recipients_invalid',
                  message: 'Recipients must not be empty'
                }]
             }
          }else if(typeof actions.recipients.roles == 'undefined' || actions.recipients.roles.length == 0){
            return {
              success: false,
              errors:  [{
                  label: "roles",
                   code: 'roles_invalid',
                  message: 'Roles must not be empty'
                }]
             }
          }else if(typeof actions.recipients.users == 'undefined' || actions.recipients.users.length == 0){
            return {
              success: false,
              errors:  [{
                  label: "users",
                   code: 'users_invalid',
                  message: 'Users must not be empty'
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

  module.exports = SendEmail