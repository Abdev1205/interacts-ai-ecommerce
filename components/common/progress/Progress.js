import NextTopLoader from 'nextjs-toploader'

const Progress = () => {
  return (
    <>
      <NextTopLoader
        color="#DB4444"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #DB4444,0 0 5px #DB4444"
      />
    </>
  )
}

export default Progress
