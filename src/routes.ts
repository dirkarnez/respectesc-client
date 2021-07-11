import { RouteComponentProps } from "react-router";
import Contact from "./pages/Contact";
import Quality from "./pages/Quality";
import About from "./pages/About";
import Service from "./pages/Service";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";

interface HeaderMenuRoute {
    route: string,
    description: string,
    onMenu: boolean,
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
}
  
export const routes: HeaderMenuRoute[] = [
    { route: "/", description: "route.home", onMenu: false, component: Home },
    { route: "/about", description: "route.about_us", onMenu: true, component: About },
    { route: "/service", description: "route.our_services", onMenu: true, component: Service },
    { route: "/faq", description: "route.faqs", onMenu: true, component: Faq },
    { route: "/quality", description: "route.quality_training", onMenu: true, component: Quality },
    { route: "/contact", description: "route.contact_us", onMenu: true, component: Contact },
    { route: "/privacy", description: "route.privacy_policy", onMenu: false, component: Privacy }
];