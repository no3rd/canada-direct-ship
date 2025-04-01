import { useState } from 'react'
import './App.css'
import emailjs from '@emailjs/browser'

// SVG Logo Component
const CompanyLogo = () => (
    <svg viewBox='0 0 350 50' className='company-logo' xmlns='http://www.w3.org/2000/svg'>
        <rect x='10' y='15' width='40' height='30' fill='#2B6CB0' rx='5' />
        <path d='M60 20 L80 20 L90 35 L70 35 Z' fill='#2B6CB0' />
        <rect x='95' y='20' width='15' height='15' fill='#2B6CB0' rx='3' />
        <text x='120' y='35' fontFamily='Arial' fontSize='24' fill='#2B6CB0'>
            Canada Direct Ship
        </text>
    </svg>
)

function App() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)

        // emailjs.init("")
        emailjs
            .send(
                'service_q2ifsyq',
                'template_9tcabs9',
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message
                },
                {
                    publicKey: 'IkNHHYAOIPa-WunU2'
                }
            )
            .then(
                function (response) {
                    console.log('Email sent successfully!', response)
                    alert('Email sent successfully!')
                },
                function (error) {
                    alert('Failed to send email.')
                    console.error(error)
                }
            )
    }

    return (
        <div className='container'>
            <nav className='header'>
                <CompanyLogo />

                <div className='contact-header'>
                    {/* <p>📞 1-438-409-3210</p> */}
                    <p>✉️ canadadirectship@gmail.com</p>
                </div>
            </nav>

            <section className='hero'>
                <div className='hero-content'>
                    <h1>Your Trusted Canadian Logistics Partner</h1>
                    <p>Fast, Reliable, and Compliant FBA & Dropshipping Solutions</p>
                    {/* <button className='cta-button'>Get Started Today</button> */}
                </div>
            </section>

            <section className='services'>
                <div className='service-card'>
                    <h3>🚚 Amazon FBA Shipping</h3>
                    <p>
                        Seamless container receiving and inventory management for Amazon fulfillment
                        centers
                    </p>
                </div>
                <div className='service-card'>
                    <h3>📦 Dropshipping Solutions</h3>
                    <p>Canadian-based fulfillment with 2-day nationwide delivery</p>
                </div>
                <div className='service-card'>
                    <h3>🛳️ Container Management</h3>
                    <p>Full-service LTL and FTL logistics with customs clearance</p>
                </div>
            </section>

            <section className='contact-section'>
                <form className='contact-form' onSubmit={handleSubmit}>
                    <h2>Request a Free Consultation</h2>
                    <div className='form-grid'>
                        <div className='form-group'>
                            <label>Name:</label>
                            <input
                                type='text'
                                required
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Email:</label>
                            <input
                                type='email'
                                required
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Phone:</label>
                            <input
                                type='tel'
                                value={formData.phone}
                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                        <div className='form-group full-width'>
                            <label>Message:</label>
                            <textarea
                                required
                                value={formData.message}
                                onChange={e =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                            />
                        </div>
                    </div>
                    <button type='submit' className='cta-button'>
                        Send Request
                    </button>
                </form>

                <div className='contact-info'>
                    <h2>Contact Us</h2>
                    <div className='info-card'>
                        <h3>📌 Headquarters</h3>
                        <p>
                            11307 189 St NW
                            <br />
                            Edmonton, AB T5S 0A9
                            <br />
                            Canada
                        </p>
                    </div>
                    <div className='info-card'>
                        <h3>📞 Contact</h3>
                        <p>
                            {/* 24/7 Support
                            : 1-438-409-3210 */}
                            <br />
                            Email: canadadirectship.com
                        </p>
                    </div>
                    <div className='info-card'>
                        <h3>🕒 Business Hours</h3>
                        <p>
                            Mon-Fri: 8AM - 6PM EST
                            <br />
                            Sat: 9AM - 4PM EST
                            <br />
                            Sun: Closed
                        </p>
                    </div>
                </div>
            </section>

            <footer className='footer'>
                <p>© 2023 Canada Direct Ship Ltd</p>
                <p>Warehouse Facilities: Alberta</p>
            </footer>
        </div>
    )
}

export default App
