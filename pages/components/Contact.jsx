import React from 'react'
import { useRef, useState } from 'react';

const Contact = () => {

    const [sent, setSent] = useState(false)

    const senderNameRef = useRef("")
    const senderEmailRef = useRef("")
    const messageRef = useRef("")
 
    const handleSubmit = async (e) => {
        e.preventDefault()
        const emailBody = {
            subject: `antdoan - Message from ${senderNameRef.current.value} (${senderEmailRef.current.value})`,
            text: messageRef.current.value
        }
        try {
            const res = await fetch('api/contact', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(emailBody)
            })
            console.log('The email sent!')
            setSent(true)

        } 
        catch (error) {
            console.log('The email did not send...')
        }

    }

  return (
    <div name="Contact" className='h-screen w-full bg-gradient-to-b from-gray-800  to-black '>
        <div className="max-w-screen-xlg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
            <div className='pb-8'>
                <h2 className="text-4xl font-bold inline border-b-2 border-blue-200">
                    Contact Me!
                </h2>
            </div>
            <div>
                Get in touch with me!
            </div>
            
            <div>
                <form className='max-w-[600px] m-auto pt-4 text-white' onSubmit={handleSubmit}>
                        <div className='grid grid-cols-2 gap-2 '>
                            <input className='bg-transparent border-b border-blue-200 p-3 ' ref={senderNameRef} type="text" placeholder='Name'></input>
                            <input className='bg-transparent  border-b border-blue-200 p-3 ' ref={senderEmailRef} type="email" placeholder='Email'></input>
                        </div>
                        <textarea className='bg-transparent  border-b border-blue-200 p-3 w-full ' ref={messageRef} col="30" rows="10" placeholder="Message"></textarea>
                        <a href="mailto:kingsbartendingservices@gmail.com" target="_blank" rel="noreferrer">
                            <button className='hover:shadow-lg hover:shadow-blue-200 rounded-md p-3 w-full mt-2  bg-white text-black font-bold text-xl'>Submit</button>
                        </a>
                        <p className={`pt-1 text-green-200 italic ${sent ? '' : 'hidden'}`}>{"Sent! We'll get back to you shortly."}</p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact