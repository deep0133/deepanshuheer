import Image from "next/image";
import githubImage from "../../assets/githubIcon.jpg";
export default function LeftCard() {
  return (
    <div className='col-span-3 sticky top-10 rounded-3xl shadow-2xl bg-secondary text-typography p-6 '>
      <div className='image-box border-2 w-[200px] sm:w-auto mx-auto  sm:rounded-xl rounded-full lg:rounded-3xl  overflow-hidden aspect-square bg-secondary'>
        <Image
          width={100}
          height={100}
          src={
            "https://i.pinimg.com/originals/15/22/95/152295baa8c5cdf3af7e723e70a32ae3.jpg"
          }
          priority={true}
          className='sm:w-full w-[200px] object-cover'
          alt=''
        />
      </div>
      <h1 className='text-2xl text-center mt-5 mb-8'>
        <span className='font-poppin  font-thin'>Deepanshu</span>{" "}
        <span className='font-poppin  font-light'>Heer</span>
      </h1>
      <p className='text-button mb-4 bg-secondary text-center font-lato font-thin w-fit px-4 py-1 rounded-full mx-auto border'>
        {" "}
        MERN DEVELOPER
      </p>

      <ul className='font-lato space-y-3  text-sm'>
        <li className='w-full flex gap-5'>
          <span>
            <i>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z'
                />
              </svg>
            </i>
          </span>
          <span> May 3, 2000</span>
        </li>
        <li className='w-full flex gap-5'>
          <span>
            <i>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
                />
              </svg>
            </i>
          </span>
          <span> Punjab, India</span>
        </li>
        <li className='w-full flex gap-5'>
          <span>
            <i>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
                />
              </svg>
            </i>
          </span>
          <p className='line-clamp-1 truncate block'>
            deepanshuheer27@gmail.com
          </p>
        </li>
      </ul>
    </div>
  );
}
