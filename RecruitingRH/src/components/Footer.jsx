import { Link } from "react-router-dom"
import logoDH from '../assets/logo.svg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXTwitter, faFacebook, faGithub, faInstagram, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export function Footer() {
    
    return (
        <>
        <footer className="bg-body-tertiary text-center shadow border-top-0">
            {/* <!-- Grid container --> */}
            <div className="container p-4 pb-0">
                {/* <!-- Section: Social media --> */}
                <section className="mb-4">
                    {/* <!-- Facebook --> */}
                    <Link
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1"
                    style={{backgroundColor: '#3b5998'}}
                    to="#!"
                    role="button"
                    ><FontAwesomeIcon icon={faFacebook} /></Link>

                    {/* <!-- Twitter --> */}
                    <Link
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1"
                    style={{backgroundColor: '#333333'}}
                    to="#!"
                    role="button"
                    ><FontAwesomeIcon icon={faXTwitter} /></Link>

                    {/* <!-- Google --> */}
                    <Link
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1"
                    style={{backgroundColor: '#dd4b39'}}
                    to="#!"
                    role="button"
                    ><FontAwesomeIcon icon={faGoogle} /></Link>

                    {/* <!-- Instagram --> */}
                    <Link
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1"
                    style={{backgroundColor: '#ac2bac'}}
                    to="#!"
                    role="button"
                    ><FontAwesomeIcon icon={faInstagram} /></Link>

                    {/* <!-- Linkedin --> */}
                    <Link
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1"
                    style={{backgroundColor: '#0082ca'}}
                    to="#!"
                    role="button"
                    ><FontAwesomeIcon icon={faLinkedin} /></Link>
                    {/* <!-- Github --> */}
                    <Link
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1"
                    style={{backgroundColor: '#333333'}}
                    to="#!"
                    role="button"
                    ><FontAwesomeIcon icon={faGithub} /></Link>
                </section>
            </div>
            <div className="text-center p-3 border-top d-flex flex-wrap justify-content-around align-items-center" style={{backgroundColor: "rgba(0, 0, 0, 0.05);"}}>
                <Link className="text-body" to="https://www.digitalhouse.com/ar">
                    <img src={logoDH} alt="" style={{height: "100px", width: "180px",  padding:"0 10px"}}></img>
                </Link>
            </div>
        </footer>
        </>
    )
}