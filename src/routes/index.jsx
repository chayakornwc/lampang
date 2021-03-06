import Components from "views/Components/Components.jsx";
import Knowledge from "views/Knowledge.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import Architecture from 'views/Pages/Architecture.jsx'
var indexRoutes = [
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path:"/knowledge/", name:"Knowledge", component: Knowledge,
  childRoutes:[
    {path:'Architecture', component:Architecture},
  
    ]
    },
  { path: "/", name: "Components", component: Components }
];

export default indexRoutes;
