import React from 'react'

const SubHeader = ({ title, description }) => {
    return (
        <>
            <div>
                <h1 className='text-2xl font-bold' >{title}</h1>
                <p className='text-sm text-gray-500' >{description}</p>
            </div>
        </>
    )
}

export default SubHeader