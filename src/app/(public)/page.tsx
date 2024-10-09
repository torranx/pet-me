import Image from "next/image"

export default function Home() {
  return (
    <div className="bg-white">
      <section className="relative isolate">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={ {
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            } }
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-0 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Find Your Perfect Pet, Change a Life Today.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                  Looking for a loyal companion or a playful buddy? PetMe connects you with pets that need a forever home. Discover your match today.
                  Give a loving home to pets in need. Explore thousands of pets available for adoption near you.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Get Started
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Browse Pets <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-40 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    {/* TODO: update images to pets */}
                    <Image
                      alt=""
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      width={ 396 }
                      height={ 528 }
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-40 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <Image
                      alt=""
                      src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      width={ 396 }
                      height={ 528 }
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      alt=""
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      width={ 396 }
                      height={ 528 }
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-40 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <Image
                      alt=""
                      src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      width={ 396 }
                      height={ 528 }
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      alt=""
                      src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      width={ 396 }
                      height={ 528 }
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-16 sm:pt-28 pt-16" id="how-it-works">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          { /* TODO: Replace steps with pawprint icon */ }
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center rounded-md bg-primary-light text-white h-12 w-12 sm:h-16 sm:w-16">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-900">Find Your Match</h3>
            <p className="text-base leading-7 text-gray-600">
              Browse pets available for adoption near you. Filter by breed, age, size, and more to find your perfect match.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center rounded-md bg-primary-light text-white h-12 w-12 sm:h-16 sm:w-16">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-900">Apply for Adoption</h3>
            <p className="text-base leading-7 text-gray-600">
              Once you’ve found your match, apply directly from their profile. We’ll help you connect with the pet’s shelter or owner.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center rounded-md bg-primary-light text-white h-12 w-12 sm:h-16 sm:w-16">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-900">Bring Your Pet Home</h3>
            <p className="text-base leading-7 text-gray-600">
              Congratulations! You’ve been approved to adopt. Pick up your new pet and give them a loving forever home.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-background-primary-light" id="list-a-pet">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Adopt or List a Pet?
            </h2>
            <ul className="list-disc pl-5 space-y-4 text-gray-600">
              <li>
                <strong className="text-gray-900">Simple Process:</strong> Easy-to-use platform to browse, apply, adopt, or list pets for adoption.
              </li>
              <li>
                <strong className="text-gray-900 text-">Thousands of Pets:</strong> Choose from pets across various shelters and private owners.
              </li>
              <li>
                <strong className="text-gray-900">Save a Life:</strong> Every adoption gives a pet a second chance at happiness, and every listing brings a pet closer to finding a home.
              </li>
            </ul>
          </div>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <a
              href="#"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Adopt Now
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              List for Adoption <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
