import React from 'react'
// import ViewAllListingButton from '@/components/listingSection/ViewAllListingsButton'
import MandapCard from '@/components/ProductCard/MandapCardContainer'
import MandapCardContainer from '@/components/ProductCard/MandapCardContainer'

export default function mandapList() {
  return (
    <div className="bg-white">
      <div className="mx-4">
        {/* <HorizontalCard /> */}
        <div className="flex justify-between items-center">
          <h4 className="text-indigo-500 text-xl font-bold mb-3">Latest House Listing</h4>
          {/* <ViewAllListingButton />  */}
        </div>
        <MandapCardContainer/>
      </div>
    </div>
  )
}

