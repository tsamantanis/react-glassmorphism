import { Card, CustomCard, Button } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'

const App = () => {
    return (
        <div style={{background: "linear-gradient(153.43deg, #00E4E4 0%, #C780FF 83.33%)", padding: "5rem", height: '200vh'}}>
            <div className="heading" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '70vh'}}>
                <div className="heading-container">
                    <h1 style={{ fontSize: '3.5rem'}}>Welcome to the coolest <br />glassmorphism library</h1>
                    <div style={{position: 'absolute', marginLeft: '150px', marginTop: '-100px'}}><Card blur={3}/><div style={{minWidth: '270px'}}/></div>
                </div>
            </div>
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
                <CustomCard
                    effectColor="#C780FF"
                    blur={10}
                    borderRadius={0}
                >
                    <h1>Hello</h1>
                    <p>This is an example</p>
                </CustomCard>
                <CustomCard
                    effectColor="#FFAF5C"
                    blur={10}
                    borderRadius={10}
                >
                    <h5>SUBHEADING</h5>
                    <h1>Heading</h1>
                    <p>This is another example</p>
                </CustomCard>
                <CustomCard
                    effectColor="#00E4E4"
                    color="dark"
                    blur={10}
                    borderRadius={20}
                >
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
