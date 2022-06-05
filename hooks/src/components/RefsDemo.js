import React, { useEffect, useRef } from 'react'

const RefsDemo = () => {
    const emailRef = useRef(null)
    const commentRef = useRef(null)

    useEffect(() => {
        emailRef.current.focus()
    },[])

    const handleSubmit = e => {
        e.preventDefault()
        console.log(emailRef.current.value);
        console.log(commentRef.current.value);
    }

    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email </label>
                    <input type="text" id="email" ref={emailRef} />
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comment </label>
                    <textarea id="comment" ref={commentRef}></textarea>
                </div>
                <br />
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
    )
}

export default RefsDemo