import './styles/index.scss'
// eslint-disable-next-line no-unused-vars
import { h } from 'dom-chef'

// const handleClick = () => {
//   // e.preventDefault()
//   // console.log('kek')
// }

const main = { padding: 10, background: '#000' }

const App = (
  <main style={main}>
    <div className="game"></div>
  </main>
)

document.getElementById('root').appendChild(App)
