import React from 'react'

import './LoaderComponent.css'

const Loader = ({ darkMode }) => (
    <div className={ darkMode ? "loader-container dark-mode" : "loader-container" }>
        <div className="loader-box" >
            <div className="loader">Loading...</div>
        </div>
    </div>
)

export default Loader
