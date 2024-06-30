import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourite' element={<Favourite />} />
          <Route path='/recipe-item/:id' element={<Details />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
