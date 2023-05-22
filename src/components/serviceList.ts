import { DensityLarge, DirectionsCar, HomeWork, House, Pets, SouthAmerica, TrackChanges, TwoWheeler } from '@mui/icons-material';
import SvgIcon from '@mui/material/SvgIcon';
type SvgIconComponent = typeof SvgIcon;
type serviceListTyp={
    id:number,
    title:string,
    icon:SvgIconComponent,
}
export const serviceList:serviceListTyp[]=[
    {
        id:1,
        title:'HOUSEHOLD SHIFTING',
        icon:House,
    },
    {
        id:2,
        title:'LOCAL SHIFTING',
        icon:TrackChanges
    },
    {
        id:3,
        title:'OFFICE SHIFTING',
        icon:HomeWork
    },
    {
        id:4,
        title:'MOTORCYCLE SHIFTING',
        icon:TwoWheeler
    },
    {
        id:5,
        title:'CAR SHIFTING',
        icon:DirectionsCar
    },
    {
        id:6,
        title:'BULK SHIFTING',
        icon:DensityLarge
    },
    {
        id:7,
        title:'PET RELOCATION',
        icon:Pets
    },
    {
        id:8,
        title:'INTERNATIONAL MOVING',
        icon:SouthAmerica
    },
    
];

