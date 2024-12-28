
import React from 'react'
// this is tbe search form to find friends
const SearchForm: React.FC = () => {
    const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)
        console.log("searching" + formData)
    }
  return (
    <div>
        <form onSubmit={handleSearch}  className="search-form w-full h-full flex flex-col justify-center items-center">
            <label htmlFor="friend">Search for New friends</label>
            <input type="search" name="friend" id="friend" placeholder="Search for friends" className="w-full rounded-lg border-2 border-gray-700 bg-gray-800 p-2 text-white text-xl font-semibold"/>
            <button type="submit" className='bg-blue-500 text-white rounded-lg px-3 py-3 text-sm active:bg-blue-700 font-semibold hover:font-bold'>Search</button>
        </form>
    </div>
  )
}

export default SearchForm