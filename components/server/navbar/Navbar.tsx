import NavComponent from "@/components/client/NavCompnent";
import MobileMenu from "../MobileMenu";
import Link from "next/link";
import LogoutButton from "@/components/client/navbar/LogoutButton";
import AddProject from "@/components/client/navbar/AddProject";

export default function Navbar() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className='bg-secondary'>
      <nav className='w-[95%] md:w-[90%] lg:container relative mx-auto px-5'>
        <div className=''>
          <div className=' flex items-center justify-between h-16'>
            <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-between'>
              <Link
                href={"/"}
                className='flex-shrink-0 flex items-center text-white'
              >
                deepanshu
              </Link>
              <div className='hidden sm:block sm:ml-6'>
                <div className='flex space-x-4'>
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-typography hover:bg-gray-700 hover:text-white" --> */}
                  <Link
                    href={"/"}
                    className='text-typography hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  >
                    About
                  </Link>

                  <Link
                    href={"/Project"}
                    className='text-typography hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  >
                    Project
                  </Link>

                  <AddProject />

                  <Link
                    href={"/Services"}
                    className='text-typography hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  >
                    Services Offer
                  </Link>
                  <Link
                    href={"/Contact"}
                    className='text-typography hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  >
                    Contact
                  </Link>
                  <LogoutButton />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <NavComponent>
          <MobileMenu />
        </NavComponent>
      </nav>
    </div>
  );
}
