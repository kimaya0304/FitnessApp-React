import React from 'react'

const Error = (error, resetErrorBoundary) => {
    return <>
        <p className='text-danger'>{error.message}</p>
        <button onClick={resetErrorBoundary} type="button" class="btn btn-primary">Retry</button>
    </>
}

export default Error