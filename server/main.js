import { Meteor } from 'meteor/meteor';
import '/imports/api/tasks';
import '/imports/startup/server/Publications';
import '/imports/startup/server/Mongo';
import '/imports/startup/server/Accounts'

Meteor.startup(() => {
  if (!Accounts.findUserByUsername('meteorite')) {
    Accounts.createUser({
      username: 'meteorite',
      password: 'password'
    });
  }
});
