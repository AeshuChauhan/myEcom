import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Listting from '@/components/listingSection/Listting'
import CardContainer from '@/components/ProductCard/CardContainer'
import HorizontalCard from '@/components/ProductCard/HorizontalCard'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <div className="mx-4">
      <HorizontalCard/>

        <h4 className="text-indigo-500 text-xl font-bold mb-3">Cards Section</h4>
        <CardContainer />
        <h4 className="text-indigo-500 text-xl font-bold mb-3 mt-5">List Section</h4>
        
        <Listting />
      </div>
    </div>
  )
}
