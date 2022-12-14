import React from 'react'
import './rightPanel.css'

const RightPanel = () => {
    return (
        <div className='RightPanel'>
            <div className='RightPanelFloatingSlider'>
                <div>
                    <img src="https://www.insaid.co/wp-content/uploads/2022/02/1605681422723.png" className="RightPanelCircleImage" alt='Person' />
                </div>
                <div>
                    <h4>Product Manager</h4>
                </div>
                <div>
                    <img src="https://www.insaid.co/wp-content/uploads/2022/02/yes-bank-logo-0.png" className="RightPanelLogos" alt='logo'/>
                </div>
                <div>
                    <h4><b>GCPM, 6 Months Program</b> </h4>
                </div>
            </div>
        </div>
    )
}

export default RightPanel;