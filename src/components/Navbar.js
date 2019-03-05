import React from 'react'
import { Link } from 'gatsby'
import * as Icon from 'react-feather';

const Navbar = class extends React.Component {

 render() {
   return (
     <div>
       <div className="tab-menu-container show-xs">
        <div className="tab-menu btn-group btn-group-block">
          <Link className="btn pt-2" activeClassName="active" to="/">
            <Icon.AlertTriangle size={26}/>
            <div>Alerts</div>
          </Link>
          <Link className="btn pt-2" activeClassName="active" to="/map">
            <Icon.Map size={26}/>
            <div>Map</div>
          </Link>
          <Link to="/" className="btn btn-link" title="Logo">
            <img src="/img/small-logo.png" alt="" />
          </Link>
          <Link className="btn pt-2" activeClassName="active" to="/contact">
            <Icon.Phone size={26}/>
            <div>Contact</div>
          </Link>
          <a className="btn pt-2" rel="noopener noreferrer" href="https://www.nexbillpay.net/farmdalewater/BillPay/SignIn" target="_blank">
            <Icon.DollarSign size={26}/>
            <div>Bill Pay</div>
          </a>
        </div>
      </div>
      <div className="container grid-xs hide-xs">
        <header className="navbar">
          <section className="navbar-section text-right">
            <Link className="btn btn-link" activeClassName="active" to="/">
              Alerts
            </Link>
            <Link className="btn btn-link" activeClassName="active" to="/map">
              Map
            </Link>
          </section>
          <section className="navbar-center">
            <Link to="/" className="navbar-brand mr-2" title="Logo">
              <img src="/img/small-logo.png" alt="" />
            </Link>
          </section>
          <section className="navbar-section">
            <Link className="btn btn-link" activeClassName="active" to="/contact">
              Contact
            </Link>
            <a className="btn btn-link" rel="noopener noreferrer" href="https://www.nexbillpay.net/farmdalewater/BillPay/SignIn" target="_blank">
              Bill Pay&nbsp;<Icon.ExternalLink size={16}/>
            </a>
          </section>
        </header>
      </div>
    </div>
  )}
}

export default Navbar
