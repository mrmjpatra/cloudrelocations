export const navMenuList=[
    {
        id:1,
        name:'Home',
        link:'/'
    },
    {
        id:2,
        name:'About Us',
        link:'/about',
        sub:[
            {
                id:100,
                sname:'About Cloud Relocations',
                link:'/about',
                
            },
            {
                id:101,
                sname:'Why Cloud Relocations',
                link:'/whycloud',
               
            },
            {
                id:102,
                sname:'Cloud Relocations Policies',
                link:'/privacy',
                
            }
        ]
    },
    {
        id:3,
        name:'Services',
        link:'/service',
        sub:[
            {
                id:200,
                sname:'Domestic',
                link:'/service',
                ssmenu:[
                    {
                        id:4000,
                        ssname:'Local Shifting',
                        link:'/local-shifting'
                    },
                    {
                        id:4001,
                        ssname:'Household Shifting',
                        link:'/household-shifting'
                    },
                    {
                        id:4002,
                        ssname:'Office Shifting',
                        link:'/office-shifting'
                    },
                    {
                        id:4003,
                        ssname:'Car Shifting',
                        link:'/car-shifting'
                    },
                    {
                        id:4004,
                        ssname:'Bike Shifting',
                        link:'/bike-shifting'
                    },
                ]
            },
            
            {
                id:203,
                sname:'Local Shifting',
                link:'/local-shifting'
            },
            {
                id:204,
                sname:'Pet Relocations',
                link:'/pet-shifting'
            },
            {
                id:205,
                sname:'Bulk Shipment',
                link:'/bulk-shifting'
            },
           
            {
                id:208,
                sname:'Warehouse Shifting',
                link:'/warehouse-shifting'
            },
           
        ]
    },
    {
        id:4,
        name:'Process',
        link:'/process',
        sub:[
            {
                id:300,
                sname:'Shifting Process',
                link:'/process',
            },
        ]
    },
    {
        id:5,
        name:'Achievements',
        link:'/achievements',
        sub:[
            {
                id:400,
                sname:'Our Innovations',
                link:'/achievements/innovations'
            },
            {
                id:402,
                sname:'Gallary',
                link:'/achievements/gallary'
            },
        ]
    },
    {
        id:6,
        name:'Locations',
        link:'/location',
       
    },
    {
        id:8,
        name:'Contact Us',
        link:'/contact',
        sub:[
            {
                id:501,
                sname:'For Shifting',
                link:'/contact'
            },
            {
                id:504,
                sname:'Claims',
                link:'/claims'
            },
            {
                id:507,
                sname:'Customer Care',
                link:'/contact'
            },
        ]
    },
]