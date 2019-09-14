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
    { route: "/", description: "主頁", onMenu: false, component: Home },
    { route: "/about", description: "公司簡介", onMenu: true, component: About },
    { route: "/service", description: "服務範圍", onMenu: true, component: Service },
    { route: "/faq", description: "常見問題", onMenu: true, component: Faq },
    { route: "/quality", description: "外傭質素及培訓", onMenu: true, component: Quality },
    { route: "/contact", description: "聯絡我們", onMenu: true, component: Contact },
    { route: "/privacy", description: "私隱聲明", onMenu: false, component: Privacy }
];