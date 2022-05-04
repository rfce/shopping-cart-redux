import { useState } from "react"
import searchIcon from '../assets/images/search-icon.png'

const SearchBar = () => {
    const [search, setSearch] = useState('')

    return (
        <div className="nav-search">
            <div>
                <p>All</p>
            </div>
            <input value={search} onChange={(event) => setSearch(event.target.value)} />
            <button>
                <img src={searchIcon} alt='search-icon' />
            </button>
        </div>
    )
}

export default SearchBar
