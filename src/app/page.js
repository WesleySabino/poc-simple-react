import {Test} from './test'
import style from './style.css'
import Profile from './profile'

const MyButton = () => {
  return (
    <>
    <p>The following is a button</p>
    <button>I'm a button</button>
    </>
  );
}

export default function Home() {
  return (
    <div>
      <h1>Quick Start</h1>

      <MyButton />

      <Test />

      <Profile />
    </div>
  )
}
