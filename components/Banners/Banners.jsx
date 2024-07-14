import React from 'react'
import { FaCheckCircle, FaInfoCircle, FaTimesCircle, FaExclamationTriangle } from "react-icons/fa";

export default function Banners({ status, title, text }) {

    let statusIcon

    if (status === 'success') {
        statusIcon = <FaCheckCircle className="success-icon icon" />
    }

    if (status === 'warning') {
        statusIcon = <FaExclamationTriangle className="warning-icon icon" />
    }

    if (status === 'error') {
        statusIcon = <FaTimesCircle className="error-icon icon" />
    }

    if (status === 'neutral') {
        statusIcon = <FaInfoCircle className="neutral-icon icon" />
    }

    return (
        <div className={`banner-item banner-${status}`}>
            <div>{statusIcon}</div>
            <div className="banner-item-container">
                <h3 className={`banner-title-${status}`}>{title}</h3>
                <p className={`banner-text-${status}`}>{text}</p>
            </div>
        </div>
    )
}