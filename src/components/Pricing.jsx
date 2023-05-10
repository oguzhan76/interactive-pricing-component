import { useState, useRef, useEffect } from "react";
import plans from '../data/PaymentPlans.json';
import icon_check from '/icon-check.svg';

const Pricing = () => {
    const slider = useRef();
    const [currentPlan, setCurrentPlan] = useState(plans["3"]);
    const [yearly, setYearly] = useState(false);
    const [level, setLevel] = useState(3);

    useEffect(() => {
        // 25% discount for 12 months is 9 months
        setCurrentPlan( {
            ...plans[level],
            payment: yearly ? plans[level].payment * 9 : plans[level].payment   
        });
    },[level, yearly]);
    

    const handleOnChange = (e) => {
        setLevel(e.target.value / 25 + 1);
        slider.current.style.setProperty('--range-value', `${e.target.value}%`);
    }

    return (
        <div className="pricing-container">
            <div className="pricing">
                <div className="offer-container">
                    <div className="pageviews">
                        <p>{currentPlan.pageviews} PAGEVIEWS</p>
                    </div>
                    <div className="payment">
                        <p>{`$${currentPlan.payment}.00`}<span>/ {yearly ? 'year' : 'month'}</span></p>
                    </div>
                </div>
                <div ref={slider} className="slider">
                    <input  type="range" min='0' max='100' step="25" onChange={handleOnChange}/>
                </div>
                <div className="toggle-container">
                    <p>Monthly Billing</p>
                    <div className="toggle">
                        <input type="checkbox" id="toggle" onChange={() => setYearly(!yearly)}/>
                        <label htmlFor="toggle"></label>
                    </div>
                    <p>Yearly Billing</p>
                    <div className="discount">
                        <p>25% discount</p>
                    </div>
                </div>
                <footer className="pricing-footer">
                    <section className="perks-section">
                        <p><span><img src={icon_check} /></span>Unlimitied websites</p>
                        <p><span><img src={icon_check} /></span>100% data ownership</p>
                        <p><span><img src={icon_check} /></span>Email reports</p>
                    </section>
                    <section className="button-section">
                        <button>Start my trial</button>
                    </section>
                </footer>
            </div>
        </div>
    )
};

export default Pricing;