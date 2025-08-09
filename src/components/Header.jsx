import Image from "next/image"

const Header = () => {
  return (
    <header>
      <Image
        src='/icon.png'
        alt='Nimbus logo'
        width={50}
        height={50}
      />
      <h1>Nimbus</h1>
    </header>
  )
}

export default Header