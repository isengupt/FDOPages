import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { FlowRouterMeta } from "meteor/ostrio:flow-router-meta";
import { mount } from "react-mounter";
import Template from '../ui/utils/Template'
import Dashboard from '../ui/pages/Landing/Dashboard'
import CreateEvent from '../ui/pages/Events/CreateEvent'
import Resources from '../ui/pages/Resources/Resources'
import NotFound from '../ui/utils/NotFound'
import EditEvent from '../ui/pages/Events/EditEvent'
import AboutPage from '../ui/pages/About/AboutPage'
import CommunityPage from '../ui/pages/Community/CommunityPage'
import ProfilePage from '../ui/pages/Profile/Profile'
import Navbar from '../ui/utils/Navbar'
import Footer from '../ui/utils/Footer'
import {setButtonState} from '../ui/utils/utils'

FlowRouter.route("/", {
  name: "landing",
  
  action() {
    mount(Template, {
      Header: Navbar,
      Content: AboutPage,
      Footer: Footer

    })
  }
})

FlowRouter.route("/createEvent", {
  name: "create-event",

  action() {
    mount(Template, {
      Header: Navbar,
      Content: CreateEvent,
      Footer: Footer

    });
  },
});


/* FlowRouter.route("/listEvents", {
  name: "list-events",

  action() {
    mount(Template, {
      Header: Navbar,
      Content: ListEvents,

    });
  },
}); */
FlowRouter.route("/dashboard", {
  name: "dashboard",

  action() {
    mount(Template, {
      Header: Navbar,
      Content: Dashboard,
      Footer: Footer
    });
  },
});
FlowRouter.route("/community", {
  name: "community",

  action() {
    mount(Template, {
      Header: Navbar,
      Content: CommunityPage,
      Footer: Footer
    });
  },
});
FlowRouter.route("/resources", {
  name: "resources",

  action() {
    mount(Template, {
      Header: Navbar,
      Content: Resources,
      Footer: Footer
    });
  },
});
FlowRouter.route("/profile/:_id", {
  name: "profile",

  action(params) {
    mount(Template, {
      Header: Navbar,
      Content: ProfilePage,
      Footer: Footer
    });
  },
});

FlowRouter.route("/editEvent/:_id", {
  name: "edit-event",

  action(params) {
    mount(Template, {
      Header: Navbar,
      Content: EditEvent,
      Footer: Footer
    });
  },
});

FlowRouter.route("*", {

  action: function () {
    mount(Template, {
      Header: Navbar,
      Content: NotFound,
      Footer: Footer
    });
  },
});

new FlowRouterMeta(FlowRouter);