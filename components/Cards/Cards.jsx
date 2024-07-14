import React from 'react'

export default function Cards({ icon, bgColor }) {
    const styles = { background: bgColor }

    return (
        <div className="card-item">
            <div className="card-icon-container flex-center" style={styles}>
                {icon}
            </div >
            <div className="card-description">
                <h3 className="card-title">Easy Deployment</h3>
                <p className="card-text">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
            </div>
        </div>

    )
}