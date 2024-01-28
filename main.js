import { Template } from 'meteor/templating';

import './main.html';

Template.register.events({
  'submit form'(event) {
    event.preventDefault();
    
    const email = event.target.email.value;
    const role = event.target.role.value;
    const password = event.target.password.value;

    Accounts.createUser({ email, password }, (error) => {
      if (error) {
        console.error(error.reason);
      } else {
        // Assign role to the user
        Meteor.call('assignRole', Meteor.userId(), role, (assignError) => {
          if (assignError) {
            console.error(assignError.reason);
          }
        });
      }
    });
  },
});
