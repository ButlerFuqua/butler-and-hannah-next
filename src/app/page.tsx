import Image from 'next/image'

export default function Home() {
  return (
    <div className='container mx-auto'>

      <h1 className='text-center text-2xl'>Butler and Hannah</h1>

      <section className='flex flex-col items-center'>
        <h2 className='text-3xl my-3'>What we do</h2>
        <div className='w-96 p-3 border rounded bg-white shadow my-3'>
          <h3 className='txt-xl font-black'>Outreach</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consequuntur quibusdam placeat id repellendus? Laborum aliquid, maxime ratione aut laudantium quibusdam explicabo totam delectus natus temporibus molestiae ipsam nihil obcaecati?</p>
        </div>
      </section>


      {/* <Image
        src="/bh_banner.jpg"
        alt="Image of Butler and Hannah"
        className="rounded"
        width={100}
        height={24}
        priority
      /> */}

    </div>
  )
}
