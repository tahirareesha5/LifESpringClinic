import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function Layout({ children }) {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  )
}
