import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base' 
import { Roles } from 'meteor/alanning:roles';

function createUser(email, password, role) {
    console.log(`  Creating user ${email}.`);
    const userID = Accounts.createUser({
      username: email,
      email: email,
      password: password,
    });
    if (role) {
      Roles.addUsersToRoles(userID, role);   
    }
  }
  
  Meteor.startup(() => { 
    if (Meteor.users.find().count() === 0) {
      Meteor.settings.defaultAccounts.forEach(function(user) {
        console.log(user)
        Roles.createRole(user.role, {unlessExists: true});
      })
      if (Meteor.settings.defaultAccounts) {
        console.log('Creating the default user(s)');
        Meteor.settings.defaultAccounts.map(({ email, password, role }) => createUser(email, password, role));
      } else {
        console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
      }
    }
  });