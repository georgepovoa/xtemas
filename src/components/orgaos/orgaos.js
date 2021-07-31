import React, { Component } from 'react'
import './orgaos.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import { Document } from 'react-pdf'
import Cadastro from '../cadastros/cadastros';

class Orgaos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orgaos: [],
            sub_orgaos: [],
            processos: [],
            anexos: [],
            tag: "",
            result: '',
            selectValue_orgao: "",
            selectValue_sub: "",
            selectValue_proc: "",
            selectValue_anex: ""


        };
        this.handleDropdownChange_orgao = this.handleDropdownChange_orgao.bind(this);

        this.handleDropdownChange_sub = this.handleDropdownChange_sub.bind(this);

        this.handleDropdownChange_proc = this.handleDropdownChange_proc.bind(this);

        this.handleDropdownChange_anex = this.handleDropdownChange_anex.bind(this);

        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleDropdownChange_orgao(e) {
        this.setState({ selectValue_orgao: e.target.value });
    }

    handleDropdownChange_sub(f) {
        this.setState({ selectValue_sub: f.target.value });
    }

    handleDropdownChange_proc(p) {
        this.setState({ selectValue_proc: p.target.value });
    }

    handleDropdownChange_anex(a) {
        this.setState({ selectValue_anex: a.target.value });
    }

    updateInput(event) {
        this.setState({ tag: event.target.value })
    }


    handleSubmit() {
        console.log('Your input value is: ' + this.state.tag)
        //Send state to the server code
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

        fetch("https://xtema.herokuapp.com/api/anexos")
            .then(res => res.json())
            .then(anexos => this.setState({ anexos }, () => console.log("anexos fetched...", anexos)))

        fetch("https://xtema.herokuapp.com/api/pdfs")
            .then(res => res.json())
            .then(pdfs => this.setState({ pdfs }, () => console.log("pdfs fetched...", pdfs)))
    }



    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" >
                        <div>

                            <div className="campos">
                                

                                <select className="ui dropdown " id="orgao" onChange={this.handleDropdownChange_orgao} defaultValue=''>
                                    <option className = "item" key = "def" value = "      ">      </option>
                                    {this.state.orgaos.map(orgaos =>
                                        <option className="item" key={orgaos.nome} value={orgaos.nome}> {orgaos.nome}</option>)}
                                </select>
                            </div>

                            <div className="campos">
                                <select className="ui dropdown" id="sub" onChange={this.handleDropdownChange_sub}>
                                <option className = "item" key = "def" value = "      ">      </option>
                                    {this.state.sub_orgaos.map(
                                        sub_orgaos => {
                                            console.log(sub_orgaos.orgao)
                                            console.log("-")
                                            console.log(this.state.selectValue_orgao)
                                            console.log(sub_orgaos.nome)

                                            if (sub_orgaos.orgao == this.state.selectValue_orgao)
                                                //sub_orgaos.orgao == this.state.selectValue_orgao)
                                                return <option value={sub_orgaos.nome}> {sub_orgaos.nome}</option>
                                        })


                                    }


                                </select>

                            </div>

                            <div className="campos">

                                <select className="ui dropdown" id="processo" onChange={this.handleDropdownChange_proc}>
                                <option className = "item" key = "def" value = "      ">      </option>
                                    {this.state.processos.map(
                                        processos => {
                                            console.log("processoprocessoprocessoprocessoprocessoprocesso")
                                            console.log(processos.orgao)
                                            console.log(this.state.selectValue_orgao)
                                            console.log(processos.suborgao)
                                            console.log(this.state.selectValue_sub)

                                            if (processos.orgao === this.state.selectValue_orgao && processos.suborgao === this.state.selectValue_sub)
                                                //processos.orgao == this.state.selectValue_orgao)
                                                return <option value={processos.nome}> {processos.nome}</option>
                                        })


                                    }


                                </select>

                            </div>
                            <div className="campos">
                                <select className="ui dropdown" id="anexo" onChange={this.handleDropdownChange_anex}>
                                <option className = "item" key = "def" value = "      ">      </option>
                                    {this.state.anexos.map(
                                        anexo => {
                                            if (anexo.processo === this.state.selectValue_proc)
                                                //anexo.orgao == this.state.selectValue_orgao)
                                                return <option className="item" value={anexo.nome}> {anexo.nome}</option>
                                        })


                                    }


                                </select>
                            </div>




                            <div className="campos">
                                <input type="text" onChange={this.updateInput}></input>
                            </div>



                            <div className="anexos-div">
                                {
                                    this.state.anexos.map(
                                        anexo => {
                                            const palavasChave = anexo.palavasChave
                                            const palavra_chave = this.state.tag
                                            //const trueorfalse = palavasChave.include(palavra_chave)

                                            if (anexo.processo === this.state.selectValue_proc && palavasChave.includes(palavra_chave))
                                                //anexo.orgao == this.state.selectValue_orgao)
                                                return <div className="anexxos">
                                                    <p>{this.state.selectValue_orgao}</p>
                                                    <p>{this.state.selectValue_sub}</p>
                                                    <p>{this.state.selectValue_proc}</p>

                                                    {/* <a href={`file:///C:/Users/georg/Desktop/gatao_sistema/public/1627468788559-TCE%20(TCE%2021493%202021%20-%20%20George%20P%C3%B3voa%20Lacerda%20de%20Ara%C3%BAjo.%20%20%20-%20UNB%20-%20CHEGOULOG.pdf%20(3).pdf).pdf`} >
                                                        <p value={anexo.nome}> {anexo.nome}</p>
                                                    </a> */}

                                                    <div>
                                                        <Document
                                                            file={anexo.pathing}
                                                        >

                                                        </Document>

                                                    </div>

                                                    <div>
                                                        <a href ={anexo.pathing}>{anexo.nome}</a>
                                                    </div>




                                                </div>
                                        })}

                            </div>









                        </div>
                    </Route>
                </Switch>
                <Route path="/cadastro">
                    <Cadastro></Cadastro>
                </Route>
            </Router>
        )
    }
}


export default Orgaos;
