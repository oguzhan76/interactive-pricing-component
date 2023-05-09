import { useState, useRef } from "react";

const Pricing = () => {
    const slider = useRef();
    const [pageviews, setPageviews] = useState('100K');
    const [payment, setPayment] = useState(16);
    const [period, setPeriod] = useState('month');

    const handleOnChange = (e) => {
        switch(e.target.value) {
            case '0':
                setPageviews('10K');
                setPayment(8);
                break;
            case '25':
                setPageviews('50K');
                setPayment(12);
                break;
            case '50':
                setPageviews('100K');
                setPayment(16);
                break;
            case '75':
                setPageviews('500K');
                setPayment(24);
                break;
            case '100':
                setPageviews('1M');
                setPayment(36);
                break;
        }

        slider.current.style.setProperty('--range-value', `${e.target.value}%`);
    }

    return (
        <div className="pricing-container">
            <div className="pricing">
                <div className="offer-container">
                    <div className="pageviews">
                        <p>{pageviews} PAGEVIEWS</p>
                    </div>
                    <div className="payment">
                        <p>{`$${payment}.00`}<span>/ {period}</span></p>
                    </div>
                </div>
                <div ref={slider} className="slider">
                    <input  type="range" min='0' max='100' step="25" onChange={handleOnChange}/>
                </div>
                <div className="toggle-container">
                    <p>Monthly Billing</p>
                    <div className="toggle">
                        <input type="checkbox" id="toggle"/>
                        <label htmlFor="toggle"></label>
                    </div>
                    <p>Yearly Billing</p>
                    <div className="discount">
                        <p>25% discount</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Pricing;
