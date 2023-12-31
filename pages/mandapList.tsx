import React from 'react'
import MandapCardContainer from '@/components/ProductCard/MandapCardContainer'

export default function mandapList() {
  return (
    <div className="bg-white">
      <div className="mx-4">
        {/* <HorizontalCard /> */}
        <div className="flex justify-between items-center">
          <h4 className="text-indigo-500 text-3xl font-bold mb-3">Latest House Listing</h4>
          {/* <ViewAllListingButton />  */}
        </div>
        <MandapCardContainer/>
      </div>
    </div>
  )
}

