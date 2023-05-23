import { DensityLarge, DirectionsCar, HomeWork, House, Pets, SouthAmerica, TrackChanges, TwoWheeler } from '@mui/icons-material';
import SvgIcon from '@mui/material/SvgIcon';
type SvgIconComponent = typeof SvgIcon;
type serviceListTyp={
    id:number,
    title:string,
    icon:SvgIconComponent,
    link:string
}
export const serviceList:serviceListTyp[]=[
    {
        id:1,
        title:'HOUSEHOLD SHIFTING',
        icon:House,
        link:'/household-shifting'
    },
    {
        id:2,
        title:'LOCAL SHIFTING',
        icon:TrackChanges,
        link:'/local-shifting'
    },
    {
        id:3,
        title:'OFFICE SHIFTING',
        icon:HomeWork,
        link:'/office-shifting'
    },
    {
        id:4,
        title:'MOTORCYCLE SHIFTING',
        icon:TwoWheeler,
        link:'/bike-shifting'
    },
    {
        id:5,
        title:'CAR SHIFTING',
        icon:DirectionsCar,
        link:'/car-shifting'
    },
    {
        id:6,
        title:'BULK SHIFTING',
        icon:DensityLarge,
        link:'/bulk-shifting'
    },
    {
        id:7,
        title:'PET RELOCATION',
        icon:Pets,
        link:'/pet-shifting'
    },
    {
        id:8,
        title:'WareHouse MOVING',
        icon:SouthAmerica,
        link:'/warehouse-shifting'
    },
    
];

