import React from 'react'

const Spinner = () => {
  return (
    <div className="inset-0 z-50 flex items-center justify-center bg-white bg-opacity-100">
  <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-blue-500"></div>
</div>
  )
}

export default Spinner