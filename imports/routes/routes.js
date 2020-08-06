import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { FlowRouterMeta } from "meteor/ostrio:flow-router-meta";
import { mount } from "react-mounter";
import Template from '../ui/utils/Template'
import LandingPage from '../ui/pages/Landing/LandingPage'
import CreateEvent from '../ui/pages/Events/CreateEvent'
import Resources from '../ui/pages/Resources/Resources'
import NotFound from '../ui/utils/NotFound'
import EditEvent from '../ui/pages/Events/EditEvent'
import AboutPage from '../ui/pages/About/AboutPage'
import CommunityPage from '../ui/pages/Community/CommunityPage'
import ProfilePage from '../ui/pages/Profile/Profile'
import Navbar from '../ui/utils/Navbar'

FlowRouter.route("/", {
  name: "landing",
  action() {
    mount(Template, {
      Header: Navbar,
      Content: LandingPage,
    })
  }
})

FlowRouter.route("/createEvent", {
  name: "create-event",

  action() {
    mount(Template, {
      Header: Navbar,
      Content: CreateEvent,

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
FlowRouter.route("/about", {
  name: "about",

  action() {
    mount(Template, {
      Header: Navbar,
      Content: AboutPage,

    });
  },
});
FlowRouter.route("/community", {
  name: "community",

  action() {
    mount(Template, {
      Header: Navbar,
      Content: CommunityPage,

    });
  },
});
FlowRouter.route("/resources", {
  name: "resources",

  action() {
    mount(Template, {
      Header: Navbar,
      Content: Resources,

    });
  },
});
FlowRouter.route("/profile/:_id", {
  name: "profile",

  action(params) {
    mount(Template, {
      Header: Navbar,
      Content: ProfilePage,

    });
  },
});

FlowRouter.route("/editEvent/:_id", {
  name: "edit-event",

  action(params) {
    mount(Template, {
      Header: Navbar,
      Content: EditEvent,

    });
  },
});

FlowRouter.route("*", {

  action: function () {
    mount(Template, {
      Header: Navbar,
      Content: NotFound,

    });
  },
});

new FlowRouterMeta(FlowRouter);