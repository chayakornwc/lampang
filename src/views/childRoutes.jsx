
import Architecture from 'views/Pages/Architecture.jsx'
import Painting from 'views/Pages/Painting';
import Sculpture from 'views/Pages/Sculpture'
import Sculpture_ from 'views/Pages/Sculpture_';
import Decorativepattern from 'views/Pages/Decorativepattern';
import Blueprint from 'views/Pages/Blueprint';
import Festival from 'views/Pages/Festival';
import Bhuddarts from 'views/Pages/Bhuddarts';
import Festivaltemporary from 'views/Pages/Festivaltemporary';
import History_ from 'views/Pages/History_';
import Legend_ from 'views/Pages/Legend_'
import Sila from 'views/Pages/Sila';
import Galaxy from 'views/Pages/Galaxy'

var childRoutes = [
    {path:'architecture', component:Architecture},
    {path:'painting', component:Painting},
    {path:'sculpture', component:Sculpture},
    {path:'_sculpture',component:Sculpture_},
    {path:'decorativepattern',component:Decorativepattern},
    {path:'blueprint',component:Blueprint},
    {path:'festival',component:Festival},
    {path:'bhuddarts',component:Bhuddarts},
    {path:'festivaltemporary',component:Festivaltemporary},
    {path:'history',component:History_},
    {path:'legend',component:Legend_},
    {path:'sila',component:Sila},
    {path:'galaxy',component:Galaxy},
];

export default childRoutes;
