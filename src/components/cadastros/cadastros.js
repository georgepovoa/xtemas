import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";

import axios from 'axios';

import { Document } from 'react-pdf'

import { useForm } from "react-hook-form";

class Cadastro extends Component {
    constructor(props) {
        
        super(props);
        this.state = {
            orgao_input: '',
            suborgao_input: '',
            processo_input: '',
            orgaos: [],
            selectValue_orgao: "",
            sub_orgaos: [],
            selectValue_sub: "",
            processos: [],
            selectValue_proc: "",
            selectedFile: null,
            tag: "",

            
        };
        
        this.handleDropdownChange_orgao = this.handleDropdownChange_orgao.bind(this);

        this.handleDropdownChange_sub = this.handleDropdownChange_sub.bind(this);
        
        this.handleDropdownChange_proc = this.handleDropdownChange_proc.bind(this);

        this.clear_input = this.clear_input.bind(this);


        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
        
    }
    
    updateInput(event) {
        this.setState({ tag: event.target.value })
    }
    handleSubmit() {
        console.log('Your input value is: ' + this.state.tag)
        //Send state to the server code
    }
    

    

    handleDropdownChange_orgao(gg) {
        this.setState({ selectValue_orgao: gg.target.value });


    }

    clear_input(ci) {
        console.log("clear_input")
        ci.target.value = ''
        this.setState({ selectValue_orgao: ci.target.value });
        try {

            this.handleDropdownChange_sub(ci)
        } catch (error) {

        }

    }
    handleDropdownChange_sub(f) {
        this.setState({ selectValue_sub: f.target.value });
    }

    handleDropdownChange_proc(p) {
        this.setState({ selectValue_proc: p.target.value });
    }


    mySubmitHandler_orgao = (event) => {
        event.preventDefault();
        alert("Criar órgao :  " + this.state.orgao_input);
        
        axios.post("https://xtema.herokuapp.com/orgao", { nome: this.state.orgao_input })
            .then((response) => {
                console.log("Data submitted successfully");
                console.log(this.state.orgao_input);
                event.target.reset();

            }).catch((error) => {
                console.log("got errr while posting data", error);
            });
    }

    mySubmitHandler_anexo = (event) => {
        console.log(this.selectValue_orgao)
        event.preventDefault();

        axios.post("https://xtema.herokuapp.com/anexo", {orgao :this.state.selectValue_orgao,suborgao : this.state.selectValue_sub, processo: this.state.selectValue_proc  })
            .then((response) => {
                
                console.log("Data submitted successfully");
                console.log(this.state.orgao_input);
                event.target.reset();
                
            }).catch((error) => {
                console.log("got errr while posting data", error);
            });
    }



    myChangeHandler = (event) => {
        this.setState({ orgao_input: event.target.value });
        
    }

    mySubmitHandler_suborgao = (event) => {
        event.preventDefault();
        alert("Criar Pasta :  " + this.state.suborgao_input);

        axios.post("https://xtema.herokuapp.com/SubOrgao", { nome: this.state.suborgao_input, orgao: this.state.selectValue_orgao })
            .then((response) => {
                console.log(this.state.selectValue_orgao)
                console.log("Data submitted successfully");
                console.log(this.state.suborgao_input);
                event.target.reset();
            }).catch((error) => {
                console.log("got errr while posting data", error);
            });
    }

    myChangeHandler_tags = (event) => {
        this.setState({ tag: event.target.value });
    }


    myChangeHandler_processo = (event) => {
        this.setState({ processo_input: event.target.value });
    }

    myChangeHandler_subpasta = (event) => {
        this.setState({ suborgao_input: event.target.value });
    }
    onChangeHandler_anexo=event=>{

        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
            
          }
          )
          
        
    
    }

    onClickHandler_anexo = () => {
        const form_tags = (this.state.tag).replaceAll(",",";")
        console.log(form_tags)
        const data = new FormData() 
        data.append('file', this.state.selectedFile)
        data.append('body', [this.state.selectValue_orgao,this.state.selectValue_sub,this.state.selectValue_proc,form_tags ])
        axios.post("https://xtema.herokuapp.com/upload", data, { // receive two parameter endpoint url ,form data 
    })
    .then(res => { // then print response status
      console.log(res.statusText)
    })
    }

    mySubmitHandler_processo = (event) => {
        event.preventDefault();
        alert("Criar processo :  " + this.state.processo_input);

        axios.post("https://xtema.herokuapp.com/processo", { nome: this.state.processo_input, orgao: this.state.selectValue_orgao, suborgao: this.state.selectValue_sub })
            .then((response) => {
                console.log("Data submitted successfully");
                console.log(this.state.selectValue_orgao)

                console.log(this.state.selectValue_sub);

                console.log(this.state.processo_input);

                console.log("Data submitted successfully");
            }).catch((error) => {
                console.log("got errr while posting data", error);
            });

            
    }

    

    componentDidMount() {
        fetch("https://xtema.herokuapp.com/api/orgaos")
            .then(res => res.json())
            .then(orgaos => this.setState({ orgaos }, () => console.log("Orgãos fetched...", orgaos)))

        fetch("https://xtema.herokuapp.com/api/sub_orgao")
            .then(res => res.json())
            .then(sub_orgaos => this.setState({ sub_orgaos }, () => console.log("subs fetched...", sub_orgaos)))


        fetch("https://xtema.herokuapp.com/api/processo")
            .then(res => res.json())
            .then(processos => this.setState({ processos }, () => console.log("Processos fetched...", processos)))
    
            fetch("https://xtema.herokuapp.com/api/anexo")
            .then(res => res.json())
            .then(anexos => this.setState({ anexos }, () => console.log("Processos fetched...", anexos)))
    
        
    }


    render() {

        return (
            <Router>
                <div>
                    <Link to="/cadastro/orgao" className="btn btn-primary" onClick={() => window.location.href="/cadastro/orgao"}>Orgao </Link>

                    <Link to="/cadastro/suborgao" className="btn btn-primary " onClick={() => window.location.href="/cadastro/suborgao"}>Pasta</Link>
                    <Link to="/cadastro/processo" className="btn btn-primary " onClick={() => window.location.href="/cadastro/processo"}>Processo</Link>
                    <Link to="/cadastro/anexo" className="btn btn-primary" onClick={() => window.location.href="/cadastro/anexo"}>Anexo</Link>
                    <Switch>
                        <Route exact path="/cadastro/orgao" >
                            <form onSubmit={this.mySubmitHandler_orgao}>
                                <h1>Hello {this.state.orgao_input}</h1>
                                <p>Inserir nome do órgao a ser cadastrado:</p>
                                <input
                                    type='text'
                                    onChange={this.myChangeHandler}
                                    name="nomeOrgao"
                                />
                                <input
                                    type='submit'
                                />
                            </form>
                        </Route>

                        <Route exact path="/cadastro/suborgao" >
                            <form onSubmit={this.mySubmitHandler_suborgao} >
                                <h1>Hello {this.state.suborgao_input}</h1>
                                <p>Inserir uma pasta dentro do órgao:</p>

                                <input type="text" list="data" onChange={this.handleDropdownChange_orgao} />

                                <datalist id="data" >
                                    {this.state.orgaos.map(orgaos =>
                                        <option className="item" value={orgaos.nome}> {orgaos.nome}</option>)}
                                </datalist>


                                <input
                                    type='text'
                                    onChange={this.myChangeHandler_subpasta}
                                    name="nomeSubOrgao"
                                />
                                <input
                                    type='submit'
                                />
                            </form>
                        </Route>

                        <Route exact path="/cadastro/processo" >
                            <form onSubmit={this.mySubmitHandler_processo}>
                                <h1>Hello {this.state.processo_input}</h1>
                                <p>Inserir uma processo dentro de uma pasta :</p>
                                <input type="text" list="data" onChange={this.handleDropdownChange_orgao} onFocus={this.clear_input} />

                                <datalist id="data" >
                                    {this.state.orgaos.map(orgaos =>
                                        <option className="item" value={orgaos.nome}> {orgaos.nome}</option>)}
                                </datalist>

                                <input type="text" list="sub" onChange={this.handleDropdownChange_sub} />

                                <datalist id="sub" >
                                    {this.state.sub_orgaos.map(
                                        subOrgaos => {
                                            {
                                                console.log("subOrgaos.nome")
                                                console.log(subOrgaos.nome)
                                                console.log("subOrgaos.orgao")
                                                console.log(subOrgaos.orgao)

                                            }
                                            if (this.state.selectValue_orgao === subOrgaos.orgao)
                                                return <option className="item" value={subOrgaos.nome}> {subOrgaos.nome}</option>
                                        })

                                    }

                                </datalist>


                                <input
                                    type='text'
                                    onChange={this.myChangeHandler_processo}
                                    name="nomeProcesso"
                                />
                                <input
                                    type='submit'
                                />
                            </form>
                        </Route>

                        <Route exact path="/cadastro/anexo" >
                            <form onSubmit={this.onClickHandler_anexo} encType="multipart/form-data" >
                            <h1>Hello</h1>
                                <p>Inserir uma Anexo :</p>
                                <input type="text" list="data" onChange={this.handleDropdownChange_orgao} onFocus={this.clear_input} />

                                <datalist id="data" >
                                    {this.state.orgaos.map(orgaos =>
                                        <option className="item" value={orgaos.nome}> {orgaos.nome}</option>)}
                                </datalist>

                                <input type="text" list="sub" onChange={this.handleDropdownChange_sub} />

                                <datalist id="sub" >
                                    {this.state.sub_orgaos.map(
                                        subOrgaos => {
                                            {
                                                console.log("subOrgaos.nome")
                                                console.log(subOrgaos.nome)
                                                console.log("subOrgaos.orgao")
                                                console.log(subOrgaos.orgao)

                                            }
                                            if (this.state.selectValue_orgao === subOrgaos.orgao)
                                                return <option className="item" value={subOrgaos.nome}> {subOrgaos.nome}</option>
                                        })

                                    }

                                </datalist>

                                <input type="text" list="proc" onChange={this.handleDropdownChange_proc}  />

                                <datalist id="proc" >
                                    {this.state.processos.map(
                                        processo => {
                                            {
                                                console.log("processo.nome")
                                                console.log(processo.nome)
                                                console.log("processo.orgao")
                                                console.log(processo.suborgao)

                                            }
                                            if (this.state.selectValue_sub === processo.suborgao && processo.orgao === this.state.selectValue_orgao   )
                                                return <option className="item" value={processo.nome}> {processo.nome}</option>
                                        })

                                    }

                                </datalist>

                                <input
                                    type='text'
                                    onChange={this.myChangeHandler_tags}
                                    name="tags"
                                />
                                
                                <input type="file" name="file" onChange={this.onChangeHandler_anexo}/>

                                <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler_anexo}>Upload</button> 
                                <input type="submit"/>
                                
                            </form>
                        </Route>
                    </Switch>


                </div>

            </Router>

        )
    }
}
export default Cadastro;