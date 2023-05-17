import React from 'react'
import { useState } from 'react'

export const Searchbar = ({ setResult }) => {

    const [input, setInput] = useState('');
    const fetchData = (value) => {
        fetch('http://localhost:3000/api/mysql')
            .then((response) => response.json())
            .then((json) => {
                const result = json.filter((item) => {
                    return value && item && item.title && item.title.toLowerCase().includes(value)
                })
                setResult(result)
            });
    }
    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return (
        <form className='w-[50%]'>
            <div className="relative bg-gray-100 rounded-lg shadow-lg ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input autoComplete='off' value={input} onChange={(e) => handleChange(e.target.value)} type="search" id="default-search" className="outline-none block w-full p-4 pl-10 font-semibold text-lg bg-transparent" placeholder="Buscar productos..." required></input>
            </div>
        </form>
    )
}
