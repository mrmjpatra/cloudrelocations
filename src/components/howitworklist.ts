import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faBook, faHandHoldingDollar, faTruck } from '@fortawesome/free-solid-svg-icons';
type howitworklistType={
    id:number,
    title:string,
    content:string,
    icon:IconDefinition,
}
export const howitworklist:howitworklistType[]=[
    {
        id:1,
        title:'Share your Shifting Requirement',
        content:'Help us by providing when and where do you want to move',
        icon:faBook
    },
    {
        id:2,
        title:'Receive Free Instant Quote',
        content:'Get guaranteed lowest priced quote for your shifting instantly',
        icon:faHandHoldingDollar
    },
    {
        id:3,
        title:'Assign Quality Service Expert',
        content:'To ensure safe relocation quality service expert will be allotted or your movement',
        icon:faCalendar
    },
    {
        id:4,
        title:'Leave the Heavy Lifting to Us',
        content:'Enjoy hassle-free on time movement of your household items',
        icon:faTruck
    },
   
]