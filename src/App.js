import './App.css'
import './assets/fonts/Amazon Ember.ttf'
import ItemList from './components/ItemList'
import Navbar from './components/Navbar'
import Saved from './components/Saved'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <Navbar />
      <div className="item-container">
        <div className="column-left">
          <ItemList />
          <Saved />
        </div>
        <Sidebar />
      </div>
    </>
  )
}

export default App
