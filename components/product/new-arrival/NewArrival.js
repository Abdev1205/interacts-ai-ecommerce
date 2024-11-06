import PrimaryHeading from '@/components/format/heading/PrimaryHeading'
import PrimarySubHeading from '@/components/format/subheading/PrimarySubHeading'
import { AlexaImage, GucciImage, Ps5Image, WomenImage } from '@/public/assetManager'
import Image from 'next/image'
import React from 'react'
import newArrivalData from './data'
import Link from 'next/link'

const NewArrivalOverlay = ({ data }) => {
  const { title, desc, href } = data
  return (
    <div className='flex flex-col gap-[.5rem] w-full  ' >
      <h2 className=' text-white font-poppins fon-[500] text-[1.3rem] ' >{title}</h2>
      <p className=' text-white font-openSans opacity-75 text-[.9rem] ' >{desc}</p>
      <Link href={href} className="text-white underline underline-offset-4" >
        Shop Now
      </Link>
    </div>
  )
}

const NewArrival = () => {
  return (
    <div className=' px-[4rem] flex flex-col gap-[1rem] mt-[8rem] ' >
      <PrimarySubHeading data={{ title: 'Featured' }} />
      <div className='flex justify-between items-center gap-[8rem] ' >

        <PrimaryHeading data={{ title: "New Arrival" }} />
      </div>

      <div className='flex w-full h-[42rem]   justify-center items-center gap-[2rem] ' >
        {/* ps5 */}
        <div className=' w-[50%] h-full bg-black  relative ' >
          <Image
            src={Ps5Image}
            width={800}
            alt='ps5 image'
            className='object-contain w-full h-full '
          />
          <div className='absolute bg-black bg-opacity-[.05] bottom-0 z-[10] w-[18rem] p-[1.5rem] ' >
            <NewArrivalOverlay data={newArrivalData[0]} />
          </div>
        </div>
        <div className=' flex flex-col justify-between gap-[1rem]  w-[50%] h-full ' >
          <div className=' h-[48%] w-full bg-black relative ' >
            <Image
              src={WomenImage}
              width={800}
              alt='ps5 image'
              className='object-contain w-full h-full '
            />
            <div className='absolute bg-black bg-opacity-[.05] bottom-0 z-[10] w-[18rem] p-[1.5rem] ' >
              <NewArrivalOverlay data={newArrivalData[1]} />
            </div>
          </div>

          <div className=' flex gap-[2rem] h-[48%] w-full ' >
            <div className=' w-[50%] h-full bg-black relative ' >
              <Image
                src={AlexaImage}
                width={800}
                alt='ps5 image'
                className='object-contain w-[70%] m-auto h-full '
              />
              <div className='absolute bg-black bg-opacity-[.05] bottom-0 z-[10] w-[18rem] p-[1.5rem] ' >
                <NewArrivalOverlay data={newArrivalData[2]} />
              </div>
            </div>

            <div className='w-[50%] h-full bg-black  relative ' >
              <Image
                src={GucciImage}
                width={800}
                alt='gucci image'
                className='object-contain w-[70%] m-auto h-full '
              />
              <div className='absolute bg-black bg-opacity-[.05] bottom-0 z-[10] w-[18rem] p-[1.5rem] ' >
                <NewArrivalOverlay data={newArrivalData[3]} />
              </div>
            </div>

          </div>
        </div>


      </div>

      {/* <BestSelllingProductList /> */}

    </div>
  )
}

export default NewArrival
