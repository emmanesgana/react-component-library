import React from 'react'


export default function Badges({ children, color, type, key }) {
    return (
        <div className={`${type}-badge ${color}-badge flex-center`}>{children}</div>
    )
}