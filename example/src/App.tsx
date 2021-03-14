import { Card, CustomCard, Button } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'

const App = () => {
    return (
        <div style={{background: "linear-gradient(153.43deg, #00E4E4 0%, #C780FF 83.33%)", padding: "5rem", height: '120vh'}}>
            <h1>Cards</h1>
            <div className="container">
                <Card>
                    <h1>Hello</h1>
                    <p>This is an example</p>
                </Card>
                <Card>
                    <h5>SUBHEADING</h5>
                    <h1>Heading</h1>
                    <p>This is another example</p>
                </Card>
                <Card>
                    <h1>Lorem Ipsum</h1>
                    <p>Quidem est iste illum atque molestiae. Non libero qui pariatur fugit qui quia ipsa. Qui optio vero neque similique totam aut.</p>
                </Card>
            </div>
            <h1>Custom Cards</h1>
            <div className="container">
                <CustomCard color="#C780FF" blur={10}>
                    <h1>Hello</h1>
                    <p>This is an example</p>
                </CustomCard>
                <CustomCard color="#FFAF5C" blur={10}>
                    <h5>SUBHEADING</h5>
                    <h1>Heading</h1>
                    <p>This is another example</p>
                </CustomCard>
                <CustomCard color="#00E4E4" blur={10}>
                    <h1>Lorem Ipsum</h1>
                    <p>Quidem est iste illum atque molestiae. Non libero qui pariatur fugit qui quia ipsa. Qui optio vero neque similique totam aut.</p>
                </CustomCard>
            </div>
            <br/>
            <h1>Buttons</h1>
            <Button text="Click me" />
        </div>
    )
}

export default App
