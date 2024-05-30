

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useState } from 'react';

const Login = props => {
    const { show, onClose } = props;

    const close = () => {
        { onClose() }
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    return (
        <div>
            <Modal id="loginModal" show={show} onHide={onClose} centered  >
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <div className={'inputContainer'}>
                            <input
                                value={email}
                                placeholder="Enter your email here"
                                onChange={(ev) => setEmail(ev.target.value)}
                                className={'inputBox'}
                            />
                            <label className="errorLabel">{emailError}</label>
                        </div>
                        <br />
                        <div className={'inputContainer'}>
                            <input
                                value={password}
                                placeholder="Enter your password here"
                                onChange={(ev) => setPassword(ev.target.value)}
                                className={'inputBox'}
                            />
                            <label className="errorLabel">{passwordError}</label>
                        </div>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" onClick={() => close()}>login</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </div>
    )
}

export default Login