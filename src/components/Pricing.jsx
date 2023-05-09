import { useState, useRef } from "react";

const Pricing = () => {
    const slider = useRef();
    const [value, setValue] = useState();
    const [pageviews, setPageviews] = useState();
    const [payment, setPayment] = useState();
    const [billing, setBilling] = useState('yearly');

    const pricingElement = document.querySelector('.slider');

    const handleOnChange = (e) => {
        setValue(e.target.value)
        pricingElement.style.setProperty('--lower-percent', `${e.target.value}%`);
        pricingElement.style.setProperty('--upper-percent', `${100-e.target.value}%`);
    }

    return (
        <div className="pricing-container">
            <div className="pricing">
                <div>
                    <div>
                        <p>{pageviews} PAGEVIEWS</p>
                    </div>
                    <div>
                        <p>$16.00<span>/month</span></p>
                    </div>
                </div>
                <div ref={slider} className="slider">
                    <input  type="range" min='0' max='100' onChange={handleOnChange}/>
                </div>
            </div>
        </div>
    )
};

export default Pricing;
