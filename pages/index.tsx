import { useState } from 'react'
import Link from 'next/link';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Listting from '@/components/listingSection/Listting'
import CardContainer from '@/components/ProductCard/CardContainer'
import HorizontalCard from '@/components/ProductCard/HorizontalCard'
import Testimonial from '@/components/Testimonial/Testimonial'
import BasicTestimonial from '@/components/Testimonial/BasicTestimonial'
// import ViewAllListingButton from '../components/listingSection/ViewAllListingsButton';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  return (
    <div className="bg-white">
      
      <div className="mx-4">
      <HorizontalCard/>
       
       <div className="flex justify-between items-center">
        <h4 className="text-indigo-500 text-xl font-bold mb-3">Latest House Listing </h4>
        <Link href="/mandapList">
          <button className="bg-indigo-600 text-white px-4 py-2 my-4 rounded hover:bg-indigo-700">
            View All Listings
          </button>
        </Link>



       </div>
        <CardContainer />
        <h4 className="text-indigo-500 text-xl font-bold mb-3 mt-5">List Section</h4>
        
        <Listting />





        <Testimonial />
        <BasicTestimonial/>
      </div>
    </div>
  )
}
