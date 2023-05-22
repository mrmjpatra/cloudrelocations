import LowestPrice from '../assets/reduce-cost.png';
import BestQuality from '../assets/premium-quality.png';
import FreeSchedule from '../assets/delivery-truck.png';
import MoveManager from '../assets/customer-care.png';
import ProfessionalLabour from '../assets/professional-services.png'

type serviceListTyp={
    id:number,
    title:string,
    content:string,
    icon:any,
}
export const whyList:serviceListTyp[]=[
    {
        id:1,
        title:'Lowest Price Guarantee',
        content:'Moving at a price you can afford - we’ll match any competitor’s quote',
        icon:LowestPrice
    },
    {
        id:2,
        title:'Best Quality Service',
        content:'Safe and Reliable Packaging and Moving Services',
        icon:BestQuality
    },
    {
        id:3,
        title:'Free Reschedule and Cancellation',
        content:'Reschedule anytime and fully refundable token on the cancellation.',
        icon:FreeSchedule
    },
    {
        id:4,
        title:'Dedicated Move Manager',
        content:'Exceeding expectations, one customer at a time',
        icon:MoveManager
    },
    {
        id:5,
        title:'Professional Labour',
        content:'Expertly packing and moving your belongings',
        icon:ProfessionalLabour
    },
]