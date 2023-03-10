export default function Assistant () {
  return (
    <div className='relative px-6 lg:px-8'>
      <div className='mx-auto max-w-2xl py-16'>
        <div className='text-center'>
          <p className='mb-2 text-md sm:text-lg leading-8'>
            ¿Tienes una pregunta? ¿Quieres saber algo?
          </p>
          <h1 className='text-4xl font-bold tracking-tight sm:text-6xl'>
            Un <span className='text-transparent bg-clip-text bg-gradient-to-br from-[#5F7FFF] to-[#566cc2]'>asistente virtual</span>
            <br />que no necesitas
          </h1>
          <p className='mt-6 text-lg leading-8'>
            Puede que no te responda, pero inténtalo.
          </p>
          <form id='input-form' className='my-8'>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none dark:text-gray-400'>
                <svg width='24' height='24' viewBox='0 0 1.44 1.44' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M0.54 0.54a0.18 0.18 0 1 1 0.24 0.17 0.09 0.09 0 0 0 -0.06 0.084V0.87m0 0.21v0.03'
                    stroke='currentColor' stroke-width='0.09' stroke-linecap='round' stroke-linejoin='round'
                  />
                  <path
                    d='M0.72 1.396c0.372 0 0.674 -0.302 0.674 -0.674S1.092 0.044 0.72 0.044 0.044 0.348 0.044 0.72 0.348 1.396 0.72 1.396Z'
                    stroke='currentColor' stroke-width='0.09' stroke-miterlimit='10'
                  />
                </svg>
              </div>
              <input
                name='prompt' type='search' id='prompt'
                className='block w-full p-4 pl-12 md:pr-28 text-md text-gray-900 outline-none border border-gray-300 rounded-lg bg-gray-50 focus:border-[#5F7FFF] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-[#5F7FFF]'
                placeholder='¿Qué es la luna?' required
              />
              <button
                type='submit'
                className='hidden md:block text-white absolute right-2.5 bottom-3 bg-[#5F7FFF] hover:bg-[#566cc2] transition-all focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#5F7FFF] dark:hover:bg-[#566cc2]'
              >
                Preguntar
              </button>
            </div>
          </form>
          <p id='output' className='text-center text-lg' />
          <div id='buttons' className='hidden flex justify-center gap-4 mt-4 pb-14'>
            <button id='share' className='flex items-center gap-2 hover:underline'>
              <svg
                width='18' height='18' fill='currentColor' viewBox='0 0 2.16 2.16'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  className='clr-i-solid clr-i-solid-path-1'
                  d='M1.652 1.44a.3.3 0 0 0-.216.093l-.731-.366a.268.268 0 0 0 0-.168l.733-.373a.307.307 0 1 0-.064-.102L.649.893a.3.3 0 1 0 0 .38l.724.364a.296.296 0 0 0-.019.103.3.3 0 1 0 .3-.3Z'
                />
                <path fill='none' d='M0 0h2.16v2.16H0z' />
              </svg>
              Compartir
            </button>
            <button id='reset' className='flex items-center gap-2 hover:underline'>
              <svg width='18' height='18' viewBox='0 0 0.9 0.9' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill-rule='evenodd' clip-rule='evenodd'
                  d='M.111.45C.111.28.244.111.45.111.617.111.699.234.734.3H.63A.03.03 0 0 0 .6.33c0 .017.013.03.03.03h.18A.03.03 0 0 0 .84.33V.15A.03.03 0 0 0 .81.12a.03.03 0 0 0-.03.03v.109A.375.375 0 0 0 .45.051c-.244 0-.399.2-.399.399S.206.849.45.849A.39.39 0 0 0 .819.602.03.03 0 0 0 .802.563.03.03 0 0 0 .763.58.336.336 0 0 1 .45.789.338.338 0 0 1 .111.45Z'
                  fill='currentColor'
                />
              </svg>
              Hacer otra pregunta
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
