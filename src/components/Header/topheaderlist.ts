import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faBan, faBook, faDownload, faFileDownload, faLocationDot, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';


type topHeaderListType={
    id:number,
    title:string,
    icon:IconDefinition,
    link:string
}


export const topHeaderList:topHeaderListType[]=[
    {
        id:1,
        title:'Online Payment',
        icon:faCreditCard,
        link:'payment'
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
        link:'enquiry'

    },
    {
        id:4,
        title:'Tracking',
        icon:faLocationDot,
        link:'tracking'

    },

    {
        id:5,
        title:'Claims',
        icon:faBook,
        link:'claims'

    },
    {
        id:6,
        title:'Beware Of Fake',
        icon:faBan,
        link:'payment'
    },
    {
        id:7,
        title:'Download Brouchers',
        icon:faFileDownload,
        link:'brouchers'
    },
]