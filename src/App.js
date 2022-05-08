import './App.css'
import './assets/fonts/Amazon Ember.ttf'
import ItemList from './components/ItemList'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <Navbar />
      <div className="item-container">
        <ItemList />
        <Sidebar />
      </div>
    </>
  )
}

export default App
