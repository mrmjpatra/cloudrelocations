import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faBan, faBook, faDownload, faFileDownload, faLocationDot, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';


type topHeaderListType={
    id:number,
    title:string,
    icon:IconDefinition,
}


export const topHeaderList:topHeaderListType[]=[
    {
        id:1,
        title:'Online Payment',
        icon:faCreditCard,
    },
    // {
    //     id:2,
    //     title:'Download App',
    //     icon:faDownload,
    // },
    {
        id:3,
        title:'Enquiry',
        icon:faQuestion,
    },
    {
        id:4,
        title:'Tracking',
        icon:faLocationDot,
    },
    {
        id:5,
        title:'Claims',
        icon:faBook,
    },
    {
        id:6,
        title:'Beware Of Fake',
        icon:faBan,
    },
    {
        id:7,
        title:'Download Brouchers',
        icon:faFileDownload,
    },
]