import { useState } from 'react'
import SearchSection from './components/searchSection'
import AllCards from './components/allCards'

function App() {
  const [query, setQuery] = useState('');
  const [regionQuery, setRegionQuery] = useState('');
  document.title = 'Where in the World';
  document.querySelector("link[rel='icon']").href = 'https://www.reshot.com/preview-assets/icons/GQ7W2V98AR/globe-GQ7W2V98AR.svg';

  return (
    <>
      <main>
        <SearchSection query={query} setQuery={setQuery} setRegionQuery={setRegionQuery}></SearchSection>
        <h2 className="error"></h2>
        <section className='countries-section'>
          <AllCards query={query} regionQuery={regionQuery}></AllCards>
        </section>
      </main>
    </>
  )
}

export default App