import Image from 'next/image'

export default function Home() {
  return (
    <div className='container mx-auto'>

      <h1>Butler and Hannah</h1>

      <Image
        src="/bh_banner.jpg"
        alt="Image of Butler and Hannah"
        className="rounded"
        width={100}
        height={24}
        priority
      />

    </div>
  )
}
