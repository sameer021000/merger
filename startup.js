import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
});

Meteor.startup(() => {
  // Create roles if not exists
  if (!Roles.findOne({ name: 'admin' })) {
    Roles.createRole('admin');
  }
  if (!Roles.findOne({ name: 'borrower' })) {
    Roles.createRole('borrower');
  }
  if (!Roles.findOne({ name: 'lender' })) {
    Roles.createRole('lender');
  }
});
