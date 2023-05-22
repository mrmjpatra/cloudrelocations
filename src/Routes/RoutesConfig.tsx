import { Route, Routes } from 'react-router-dom'
import About from '../pages/About/About'
import Home from '../pages/Home'
import Service from '../pages/Service/Service'
import Contact from '../pages/Contact/Contact'
import Location from '../pages/Location/Location'
import Blog from '../pages/Blog/Blog'
import Achievements from '../pages/Achievements/Achievements'
import Process from '../pages/Process/Process'
import Privacy from '../pages/Privacy'
import TermsCondition from '../pages/TermsCondition'
import HomeIndex from '../pages/Shifting/HomeIndex'
import Payment from '../pages/Payment/Payment'
import CityWise from '../pages/CityWise/CityWise'

export const RoutesConfig = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/about/experience' element={<About />} />
      <Route path='/about/history' element={<About />} />
      <Route path='/about/values' element={<About />} />
      <Route path='/about/investments' element={<About />} />
      <Route path='/about/advisory' element={<About />} />
      <Route path='/about/management' element={<About />} />
      <Route path='/about/core-management' element={<About />} />
      <Route path='/about/middle-management' element={<About />} />
      <Route path='/about/base' element={<About />} />
      <Route path='/about/social-activities' element={<About />} />
      <Route path='/about/clients' element={<About />} />
      <Route path='/about/cloud-clients' element={<About />} />
      <Route path='/about/usp' element={<About />} />
      <Route path='/about/profile' element={<About />} />
      <Route path='/about/value-added-service' element={<About />} />
      <Route path='/about/safety' element={<About />} />
      <Route path='/about/experts-advice' element={<About />} />
      <Route path='/about/team-commitment' element={<About />} />
      <Route path='/about/type-vechiles' element={<About />} />
      <Route path='/about/advantages' element={<About />} />
      <Route path='/about/faqs' element={<About />} />
      <Route path='/about/quality-assurance' element={<About />} />
      <Route path='/about/iso-policy' element={<About />} />
      <Route path='/about/service-policy' element={<About />} />
      <Route path='/about/quality-policy' element={<About />} />
      <Route path='/about/packing-policy' element={<About />} />
      <Route path='/about/training-policy' element={<About />} />
      <Route path='/service/domestic' element={<Service />} />
      <Route path='/service/domestic/domestic-shifting' element={<Service />} />
      <Route path='/service/domestic/household-shifting' element={<Service />} />
      <Route path='/service/domestic/office-shifting' element={<Service />} />
      <Route path='/service/domestic/car-shifting' element={<Service />} />
      <Route path='/service/corporate-shifting' element={<Service />} />
      <Route path='/service/international-shifting' element={<Service />} />
      <Route path='/service/local-shifting' element={<Service />} />
      <Route path='/service/storage-facility' element={<Service />} />
      <Route path='/service/bulk-commercial' element={<Service />} />
      <Route path='/service/parcel-service' element={<Service />} />
      <Route path='/service/factory-shifting' element={<Service />} />
      <Route path='/service/warehousing' element={<Service />} />
      <Route path='/service/odc' element={<Service />} />
      <Route path='/process/shifting/packing' element={<Process />} />
      <Route path='/process/shifting/storage' element={<Process />} />
      <Route path='/process/shifting/chapp' element={<Process />} />
      <Route path='/process/shifting/double' element={<Process />} />
      <Route path='/process/shifting/do-donts' element={<Process />} />
      <Route path='/process/3p/quality-people' element={<Process />} />
      <Route path='/process/3p/quality-packing-process' element={<Process />} />
      <Route path='/process/3p/quality-packing-material' element={<Process />} />
      <Route path='/process/3p/advantages' element={<Process />} />
      <Route path='/process/traning-process/operation-team' element={<Process />} />
      <Route path='/process/traning-process/tracking' element={<Process />} />
      <Route path='/process/traning-process/delivery' element={<Process />} />
      <Route path='/process/traning-process/claims' element={<Process />} />
      {/* Acheivement */}
      <Route path='/achievements/innovations' element={<Achievements />} />
      <Route path='/achievements/awards' element={<Achievements />} />
      <Route path='/achievements/gallary' element={<Achievements />} />
      <Route path='/achievements/videos' element={<Achievements />} />
      {/* Location */}
      <Route path='/location' element={<Location />} />
      {/* Blog */}
      <Route path='/blog' element={<Blog />} />
      {/* Contact */}
      <Route path='/contact' element={<Contact />} />
      <Route path='/contact/corporate-office' element={<Contact />} />
      <Route path='/contact/for-shifting' element={<Contact />} />
      <Route path='/contact/international-shifting' element={<Contact />} />
      <Route path='/contact/tracking' element={<Contact />} />
      <Route path='/contact/claims' element={<Contact />} />
      <Route path='/contact/feedback' element={<Contact />} />
      <Route path='/contact/carrers' element={<Contact />} />
      <Route path='/contact/customer-care' element={<Contact />} />
      <Route path='/privacy' element={<Privacy />} />
      <Route path='/terms-condition' element={<TermsCondition />} />
      <Route path='/household-shifting' element={<HomeIndex/>} />
      <Route path='/office-shifting' element={<HomeIndex/>} />
      <Route path='/local-shifting' element={<HomeIndex/>} />
      <Route path='/warehouse-shifting' element={<HomeIndex/>} />
      <Route path='/car-shifting' element={<HomeIndex/>} />
      <Route path='/bike-shifting' element={<HomeIndex/>} />
      <Route path='/bulk-shifting' element={<HomeIndex/>} />
      <Route path='/payment' element={<Payment/>} />
      <Route path='/cloud-relocations-bbsr' element={<CityWise/>} />
      <Route path='/cloud-relocations-delhi' element={<CityWise/>} />
      <Route path='/cloud-relocations-bangaloare' element={<CityWise/>} />
      <Route path='/cloud-relocations-kolkata' element={<CityWise/>} />
      <Route path='/cloud-relocations-pune' element={<CityWise/>} />
      <Route path='/cloud-relocations-hyderabad' element={<CityWise/>} />
    </Routes>
  )
}
