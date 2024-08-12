export default function page() {
  return (
    <div className='p-5 font-poppin relative'>
      <h2 className='text-2xl text-typography font-extrabold tracking-tight sm:text-3xl'>
        <span className='text-buttons'>Services </span> Offered
      </h2>
      <div className='services mt-5 space-y-5 *:border *:p-3 *:border-slate-700 *:rounded-md'>
        <div className='frontend'>
          <p>Frontend Development:</p>
          <ul className='mt-3 list list-inside leading-6 font-poppin text-buttons'>
            <li>
              React.js:{" "}
              <span className='text-gray-500 font-lato'>
                Building dynamic and responsive user interfaces.
              </span>
            </li>
            <li>
              Next.js:{" "}
              <span className='text-gray-500 font-lato'>
                {" "}
                Server-side rendering and static site generation for optimized
                performance.
              </span>
            </li>
            <li>
              Tailwind CSS:{" "}
              <span className='text-gray-500 font-lato'>
                {" "}
                Modern, utility-first CSS framework for custom designs.
              </span>
            </li>
          </ul>
        </div>
        <div className='api-integration'>
          <p>API Integration:</p>
          <ul className='mt-3 list list-inside leading-6 font-poppin text-gray-500'>
            <li>
              Seamless integration of third-party APIs to enhance
              application&apos; functionality.
            </li>
          </ul>
        </div>
        <div className='backend'>
          <p>Backend Development:</p>
          <ul className='mt-3 list list-inside leading-6 font-poppin text-buttons'>
            <li>
              Node.js & Express:
              <span className='text-gray-500 font-lato'>
                Creating robust and scalable server-side applications.
              </span>
            </li>
            <li>
             <div> Socket.io:
              <span className='text-gray-500 font-lato'>
                {" "}
                Real-time data communicaiton.
              </span></div>
             <div> Passport.js:
              <span className='text-gray-500 font-lato'>
                {" "}
                Authentication using social links.
              </span></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
