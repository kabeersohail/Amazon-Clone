import Image from 'next/image';
import { SearchIcon } from '@heroicons/react/outline'


function Header() {
    return (
        <header>
            {/* Top nav bar */}
            <div className="bg-amazon_blue pt-3" >
                <div className="flex pb-2" >
                    <Image
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain" // with out this the image is stretched, maintains the aspect ratio
                        className="cursor-pointer"
                    />

                  {/* Search Bar */}

                  <div className="ml-4 mr-4 bg-yellow-400 hover:bg-yellow-500 hidden sm:flex flex-grow rounded-md h-10" >

                        <input className=" p-2 px-4 flex-grow rounded-l-md focus:outline-none" type="text" />
                        <SearchIcon className="h-10 cursor-pointer" />

                  </div>

                </div>
              
            </div>
            {/* Bottom nav bar */}
            <div>

                

            </div>

        </header>
    )
}

export default Header
