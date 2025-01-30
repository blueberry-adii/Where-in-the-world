export default function SearchSection({query, setQuery, setRegionQuery}) {
  return (
    <>
        <section className="search-section">
            <div className="search-filter-container">
                <div className="search-container">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search for a country..." value={query} onChange={(e) => setQuery(e.target.value)}></input>
                </div>
                <select onChange={(e) => {
                    setQuery('');
                    setRegionQuery(e.target.value.toLowerCase())
                }}>
                    <option value="" hidden>Filter by region</option>
                    <option value="">All</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    </>
  )
}
