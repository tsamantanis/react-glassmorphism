import { Card, Button } from 'react-glassmorphism'
import 'react-glassmorphism/dist/index.css'

const App = () => {
    return (
        <div style={{background: "darkblue", padding: "5rem"}}>
            <Card>
                <h1>Hello</h1>
                <p>This is an example</p>
            </Card>
            <Button text="Click me" />
        </div>
    )
}

export default App
