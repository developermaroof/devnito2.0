import React from 'react'
import SaaS from '../assets/SaaS.png'
import Web from '../assets/Web.png'
import Freelancing from '../assets/Freelancing.png'
import MobileApp from '../assets/MobileApp.png'

const ServicesPage = () => {
  return (
    <div>
        <div>
            <h1>Our Services</h1>
            <p>From consulting and strategy development to implementation and support, our comprehensive services can help your business thrive.
            </p>
        </div>
        <div>
            {/*  */}
            <div>
                <div>
                    <div>
                        <img src={SaaS} alt="" />
                    </div>
                    <div>SaaS Development</div>
                </div>
                <p>Innovative Software as a Service (SaaS) solutions designed for scalability, accessibility, and security, enabling wider market reach.
                </p>
            </div>
            {/*  */}
            <div>
                <div>
                    <div>
                        <img src={Web} alt="" />
                    </div>
                    <div>Web Development</div>
                </div>
                <p>Creating visually appealing and functional websites enhances user experience and online presence.</p>
            </div>
            {/*  */}
            <div>
                <div>
                    <div>
                        <img src={Freelancing} alt="" />
                    </div>
                    <div>Freelancing Services</div>
                </div>
                <p>Access to a network of skilled freelancers for project-specific requirements, from coding to design.</p>
            </div>
            {/*  */}
            <div>
                <div>
                    <div>
                        <img src={MobileApp} alt="" />
                    </div>
                    <div>Mobile App Development</div>
                </div>
                <p>Development of intuitive and cross-platform mobile applications catering to the on-the-go consumer.</p>
            </div>
            {/*  */}
        </div>
    </div>
  )
}

export default ServicesPage