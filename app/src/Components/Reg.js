import React, {Component} from 'react';
import {Button, FormGroup, FormControl, FormLabel, Row, Col, Figure} from "react-bootstrap";
import './All.css';
import Container from "react-bootstrap/Container";
import axios from "axios";
import {getJWT} from "../Helpers/JWT";

export default class Reg extends Component {

    componentDidMount() {
        const jwt = getJWT();
        if(jwt.length > 0){
            console.log(jwt)
        }
    }

    defaultState(){
        return{
            isAuth: false,
            no_id: {
                value: '',
                error: 'ID es requerido.'
            },
            tipo_documento: {
                value: '',
                error: 'Tipo de documento es requerido.'
            },
            nombre: {
                value: '',
                error: 'Nombre es requerido.'
            },
            apellidos: {
                value: '',
                error: 'ID es requerido.'
            },
            direccion: {
                value: '',
                error: 'Dirección es requerida.'
            },
            telefono: {
                value: '',
                error: 'Teléfono es requerido.'
            },
            password: {
                value: '',
                error: 'Contraseña es requerida.'
            },
            password_confirmation: {
                value: '',
                error: 'Contraseñas no coinciden'
            },
            email: {
                value: '',
                error: 'e-mail es requerido.'
            },
            submit: {
                error: '',
            },
            formSubmitted: false
        }
    }
    constructor(props){
        super(props);
        this.state={
            no_id: "",
            tipo_documento: "",
            nombre: "",
            apellidos: "",
            direccion: "",
            telefono: "",
            password: "",
            password_confirmation: "",
            email: ""
        };

        this.input = React.createRef();
        this.input2 =React.createRef();
        this.input3 =React.createRef();
        this.input4 =React.createRef();
        this.input5 =React.createRef();
        this.input6 =React.createRef();
        this.input7 =React.createRef();
        this.input8 =React.createRef();
        this.input9 =React.createRef();
    }

    change(e){
        e.preventDefault();
        this.setState(
            {
                no_id: e.target.email,
                tipo_documento: e.target.tipo_documento,
                nombre: e.target.nombre,
                apellidos: e.target.apellidos,
                direccion: e.target.direccion,
                telefono: e.target.telefono,
                password: e.target.password,
                password_confirmation: e.target.password_confirmation,
                email: e.target.email
            });
    }

    submit(e){
            let data = {
                user:{
                    no_id: this.input.current.value,
                    tipo_documento: this.input2.current.value,
                    nombre: this.input3.current.value,
                    apellidos: this.input4.current.value,
                    direccion: this.input5.current.value,
                    telefono: this.input6.current.value,
                    password: this.input7.current.value,
                    password_confirmation: this.input8.current.value,
                    email: this.input9.current.value
                }
            };
            console.log(data)
            e.preventDefault();
            axios.post('https://ordersolverdevelop.herokuapp.com/users', data).
            then(function(){
                this.props.history.push('/catalog')
            })
            .catch(function () {
                console.log("Ups")
            })
    }

    render(){
        return (
            <div>
                <Container>
                    <FormLabel><h1>Registro</h1></FormLabel>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Figure.Image
                                width={200}
                                height={200}
                                alt="50x50"
                                src="https://image.flaticon.com/icons/png/512/16/16363.png"
                            />
                        </Col>
                    </Row>
                </Container>
                <hr></hr>
                <Container>
                    <FormLabel>Datos de la Cuenta</FormLabel>
                    <Row>
                        <Col>
                            <form onSubmit={e => this.submit(e)}>
                                <Row>
                                <Col>
                                <FormGroup controlId="email" bsSize="large">
                                    <FormControl
                                        autoFocus
                                        type="email"
                                        placeholder="Correo"
                                        ref={this.input9}
                                    />
                                </FormGroup>
                                </Col>
                                <Col>
                                <FormGroup controlId="password" bsSize="large">
                                    <FormControl
                                        autoFocus
                                        type="password"
                                        placeholder="Contraseña"
                                        ref={this.input7}
                                    />
                                </FormGroup>
                                <FormGroup controlId="password_confirmation" bsSize="large">
                                    <FormControl
                                        autoFocus
                                        type="password"
                                        placeholder="Verificar Contraseña"
                                        ref={this.input8}
                                    />
                                </FormGroup>
                                </Col>
                        </Row>
                                    <FormLabel>Datos Personales</FormLabel>
                                    <Row>
                                        <Col>
                                            <FormGroup controlId="nombre" bsSize="large">
                                                <FormControl
                                                    autoFocus
                                                    type="text"
                                                    placeholder="Nombres"
                                                    ref={this.input3}
                                                />
                                            </FormGroup>
                                            <FormGroup controlId="apellido" bsSize="large">
                                                <FormControl
                                                    autoFocus
                                                    type="text"
                                                    placeholder="Apellidos"
                                                    ref={this.input4}
                                                />
                                            </FormGroup>
                                            <FormGroup controlId="direccion" bsSize="large">
                                                <FormControl
                                                    autoFocus
                                                    type="text"
                                                    placeholder="Dirección"
                                                    ref={this.input5}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup controlId="formGridState">
                                                <FormControl as="select" ref={this.input2}>
                                                    <option>Tipo de Documento...</option>
                                                    <option>CC</option>
                                                    <option>TI</option>
                                                    <option>Pasaporte</option>
                                                </FormControl>
                                            </FormGroup>
                                            <FormGroup controlId="no_id" bsSize="large">
                                                <FormControl
                                                    autoFocus
                                                    type="text"
                                                    placeholder="Numero de Documento"
                                                    ref={this.input}
                                                />
                                            </FormGroup>
                                            <FormGroup controlId="telefono" bsSize="large">
                                                <FormControl
                                                    autoFocus
                                                    type="text"
                                                    placeholder="Teléfono"
                                                    ref={this.input6}
                                                />
                                            </FormGroup>
                                            <Button
                                                block
                                                bsSize="large"
                                                type="submit"
                                            >
                                                Registrarme
                                            </Button>
                                        </Col>
                                    </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
