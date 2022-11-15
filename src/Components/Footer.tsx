const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-3 py-3">
      <div className="container mx-auto text-center">
        &copy; taskChecker { year }
      </div>
    </footer>
  )
}

export default Footer
