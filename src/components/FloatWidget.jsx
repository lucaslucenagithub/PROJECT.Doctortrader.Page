import React from 'react'
import { Container, Button, Link } from 'react-floating-action-button'

const FloatWidget = () => {
    return (
        <Container>
            {/* <Link href="#"
                tooltip="Facebook"
                styles={{backgroundColor: 'white', color: 'blue'}}
                icon="fa fa-facebook" />
            <Link href="#"
                tooltip="Instagram"
                styles={{backgroundColor: '#ff4c4c'}}
                icon="fa fa-instagram" 
                className="fab-item btn btn-link btn-lg text-white"/> */}
            <Button
                tooltip="Entre em nosso telegram!"
                icon="fa fa-telegram fa-3x" 
                rotate={true}
                styles={{backgroundColor: 'white', color: '#0088cc'}}
                onClick={'telegram.org'} />
        </Container>
    )
}

export default FloatWidget;