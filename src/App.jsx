import ChecklistBody from './components/ChecklistBody'
import ChecklistHead from './components/ChecklistHead'
import './css/App.css'

function App() {

  return (
    <>
      <section className='d-flex flex-column align-items-center min-vh-100 justify-content-center gap-3 py-4'>
        <ChecklistHead/>
        <ChecklistBody/>
      </section>
    </>
  )
}

export default App
