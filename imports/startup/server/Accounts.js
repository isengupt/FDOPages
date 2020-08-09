import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base' 
import { Roles } from 'meteor/alanning:roles';

function createUser(email, password, roles, scope) {
    console.log(`  Creating user ${email}.`);
    const userID = Accounts.createUser({
      username: email,
      email: email,
      password: password,
    });
    if (roles) {
      if (scope) {
      Roles.addUsersToRoles(userID, roles, scope);   
      } else {
        Roles.addUsersToRoles(userID, roles);   
      }
    }
  }
  
  Meteor.startup(() => { 
    if (Meteor.users.find().count() === 0) {
      Meteor.settings.defaultAccounts.forEach(function(user) {
        user.roles.forEach(function(role) {
        Roles.createRole(role, {unlessExists: true});
        })
      })
      if (Meteor.settings.defaultAccounts) {
        console.log('Creating the default user(s)');
        Meteor.settings.defaultAccounts.map(({ email, password, roles, scope }) => createUser(email, password, roles, scope));
      } else {
        console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
      }
    }
  });