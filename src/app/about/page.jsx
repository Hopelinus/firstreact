import Style from './page.modules.css'

export default function About(){
    return (
        // if we are inside the return and we use {}, it indicates that we want to perform a javascript
        <>
        <h1 className={Style.text}> MY first next project</h1>
        <p className={`${Style.text} text`}>I am styled with a global css</p>

        </>
        
    )
}