import { useState } from 'react'
import Displayer from './Displayer'
import NumControl from './NumControl'
import Operators from './Operators'

function Layout() {
    const [operation, setOperation] = useState([]);
    const [result, setResult] = useState();
    const [latestValue, setLatestValue] = useState()
 
    const onReset = () =>{
        setOperation([]);
        setResult(null);
        setLatestValue(null)
    };

    const getResult = () =>{
        const res = eval([...operation, latestValue].join(' '))
        setResult(res);
        setOperation([res]);
    };

  return (
    <div className='bg-black h-screen'>
        <div className="bg-white h-full w-full sm:w-[500px] m-auto grid grid-rows-[160px,1fr] grid-cols-4">
            <Displayer value={result || latestValue || operation.at(-1)} />
            <NumControl setValue={setLatestValue} setOperation={setOperation} onReset={onReset} setResult={setResult} value={latestValue} operation={operation} />
            <Operators setOperation={setOperation} getResult={getResult} setLatestValue={setLatestValue} latestValue={latestValue} operation={operation} />
        </div>
    </div>
  )
}

export default Layout