import './searchInput.scss'

const SearchInput = () => {
    return (
        <form role='search' className="search">
            <input className="search__input" type="search" placeholder="Search" />
        </form>
    )
}

export default SearchInput