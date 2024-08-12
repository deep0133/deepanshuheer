import Image from "next/image";
import whatsapp from "../../assets/whats-app.png";
import githubIcon from "../../assets/githubIcon.png";
import linkedIn from "../../assets/linkedIn.png";
import ContactForm from "@/components/client/ContactForm";
export default function pages() {
  return (
    <>
      <div className='relative @container'>
        <div className='absolute inset-0'>
          <div className='absolute inset-y-0 left-0 w-1/2'></div>
        </div>
        <div className='relative mx-auto grid grid-cols-12  w-full '>
          <div className=' px-4 sm:px-6 @lg:col-span-6 col-span-full lg:px-8 py-5 xl:pr-12'>
            <div className=' font-poppin'>
              <h2 className='text-2xl text-typography font-extrabold tracking-tight sm:text-3xl'>
                <span className='text-buttons'>Get </span> in Touch
              </h2>
              <dl className='mt-8 text-base text-gray-500'>
                <div className='mt-6'>
                  <dt className='sr-only'>Email</dt>
                  <dd className='flex'>
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

                    <span className='ml-3 line-clamp-1'>
                      {" "}
                      deepanshuheer27@gmail.com
                    </span>
                  </dd>
                </div>
                <div className='mt-3'>
                  <dt className='sr-only'>Phone number</dt>
                  <dd className='flex'>
                    <svg
                      className='flex-shrink-0 h-6 w-6 text-gray-500'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                      />
                    </svg>
                    <span className='ml-3'> +91 8196972171 </span>
                  </dd>
                </div>
                <div className='mt-3'>
                  <dt className='sr-only'>Location:</dt>
                  <dd className='flex'>
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
                        d='m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64'
                      />
                    </svg>

                    <span className='ml-3'> Jalandhar, Punjab, India </span>
                  </dd>
                </div>
                <div className='mt-3'>
                  <dt className='sr-only'>Social Links:</dt>
                  <dd className='flex'>
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
                        d='M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244'
                      />
                    </svg>

                    <a
                      href='https://wa.link/hw8ns3'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='ml-3'
                    >
                      {" "}
                      <Image
                        src={whatsapp}
                        width={100}
                        height={100}
                        alt='wt'
                        className='size-6'
                      />{" "}
                    </a>
                    <a
                      href='https://github.com/deep0133'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='ml-3'
                    >
                      {" "}
                      <Image
                        src={githubIcon}
                        width={100}
                        height={100}
                        alt='gh'
                        className='size-6 rounded-full'
                      />{" "}
                    </a>
                    <a
                      href='https://www.linkedin.com/in/deepanshu-heer-56227a204'
                      target='_blank'
                      rel='noreferrer noopener'
                      className='ml-3'
                    >
                      {" "}
                      <Image
                        src={linkedIn}
                        width={100}
                        height={100}
                        alt='linkedIn'
                        className='size-6 rounded-full'
                      />{" "}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className='px-4 sm:px-6 @lg:col-span-6 col-span-full py-5 lg:px-8 xl:pl-12'>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
