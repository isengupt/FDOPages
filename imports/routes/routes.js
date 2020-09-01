import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { FlowRouterMeta } from "meteor/ostrio:flow-router-meta";
import { Cloudinary } from 'meteor/socialize:cloudinary';
import { mount } from "react-mounter";

import Dashboard from '../ui/pages/Dashboard/Dashboard'
import Resources from '../ui/pages/Resources/Resources'
import AboutPage from '../ui/pages/About/AboutPage'
import CommunityPage from '../ui/pages/Community/CommunityPage'
import EditAboutPage from '../ui/pages/About/EditAboutPage'
import EditCommunityPage from '../ui/pages/Community/EditCommunityPage'
import Navbar from '../ui/utils/template/Navbar'
import Footer from '../ui/utils/template/Footer'
import EditPage from '../ui/utils/scaffolds/EditPage'
import ListPage from '../ui/utils/scaffolds/ListPage'
import CreatePage from "../ui/utils/scaffolds/CreatePage";
import DetailPage from "../ui/utils/scaffolds/DetailPage";


import NotFound from '../ui/utils/components/NotFound'
import Template from '../ui/utils/template/Template'
import {setButtonState} from '../ui/utils/utils'



Cloudinary.config({
  cloud_name:'dtihxyw16',
  api_key: '363748713251226',
});

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

FlowRouter.route("/editAbout", {
  name: "edit-about",
  
  action() {
    mount(Template, {
      Header: Navbar,
      Content: EditAboutPage,
      Footer: Footer

    })
  }
})

FlowRouter.route("/editCommunity", {
  name: "edit-community",
  
  action() {
    mount(Template, {
      Header: Navbar,
      Content: EditCommunityPage,
      Footer: Footer

    })
  }
})

FlowRouter.route("/dashboardpage", {
  name: "dashboard-page",

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

FlowRouter.route("/edit/:component/:_id", {
  name: "edit-page",
  
  action(params) {
    mount(Template, {
      Header: Navbar,
      Content: EditPage,
      Footer: Footer

    })
  }
})

FlowRouter.route("/list/:component/", {
  name: "list-page",
  
  action(params) {
    mount(Template, {
      Header: Navbar,
      Content: ListPage,
      Footer: Footer

    })
  }
})

FlowRouter.route("/create/:component/", {
  name: "create-page",
  
  action(params) {
    mount(Template, {
      Header: Navbar,
      Content: CreatePage,
      Footer: Footer

    })
  }

})



FlowRouter.route("/detail/:component/:_id", {
  name: "detail-page",
  
  action(params) {
    mount(Template, {
      Header: Navbar,
      Content: DetailPage,
      Footer: Footer

    })
  }
})


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