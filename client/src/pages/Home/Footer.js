import React from 'react'

function Footer({darkMode}) {
  return (
    <div className='py-10'>
        <div className={`${darkMode ? 'bg-tertiary' : 'bg-tertiaryLight'} h-[1px] w-full`}>

        </div>

        <div className='flex items-center justify-center flex-col mt-10 opacity-70'>
              <h1 className={`${darkMode ? 'text-light' : 'text-primary'}`}>
                  Designed and Developed By
              </h1>
             <h1 className={`${darkMode ? 'text-light' : 'text-primary'}`}>
                <span>Omar Asim Mirza</span>
             </h1>
        </div>
    </div>
  )
}

export default Footer