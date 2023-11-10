import './topbar.scss'

const Topbar = ():string | any => {
  return (
    <nav className='navbar'>
      <section>
        <div className="navbar__first">
            <img src='naija.png' alt=''/>
            <img src='ifadore.png' alt=''/>
        </div>

        <div className="navbar__last">
          <span className='span'>Overview</span>

          <div>
            <img src='pic1.jpg' alt=''/>
            <span>Ayodele Ayodeji</span>
          </div>
        </div>
      </section>
    </nav>
  )
}

export default Topbar
