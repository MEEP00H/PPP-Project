import React, { Component } from 'react';
import axios from '../axios-order';

import Intro from '../components/intro/Intro';
import CoverLetter from '../components/cover-letter/cover-letter';
import Profile from '../components/profile/profile';
import Programming from '../components/skills/programming';
import Contract from '../components/contract/contract';
import NavigationBar from '../components/navigationBar/navigationBar';
import TimeLine from '../components/timeLine/timeLine'


export default class main extends Component {

    state ={
        intro : '',
        profileImg : '',
        name : '',
        position : '',
        skills:'',
        contract: '',
        experience: ''
    }

    async componentDidMount(){
        await axios.get('/intro.json')
            .then(res =>{
                this.setState({ intro:res.data })
            })
        await axios.get('/image-profile.json')
            .then(res =>{
                this.setState({ profileImg:res.data })
            })
        await axios.get('/name.json')
            .then(res =>{
                this.setState({ name:res.data })
            })
        await axios.get('/position.json')
            .then(res =>{
                this.setState({ position:res.data })
            })
        await axios.get('/skills.json')
            .then(res =>{
                this.setState({ skills:res.data })
            })
        await axios.get('/contract.json')
            .then(res =>{
                this.setState({ contract:res.data })
            })
        await axios.get('/experience.json')
            .then(res =>{
                this.setState({ experience:res.data })
            })
    }   

    render() {
        return (
            <div>
                <NavigationBar/>
                <Intro/>
                <CoverLetter cover = {this.state.intro}/>
                <Profile profileImg = {this.state.profileImg}
                        name = {this.state.name}
                        position = {this.state.position}
                />
                <Programming pgSkills = {this.state.skills.programmings}/>
                <TimeLine experience = {this.state.experience}/>
                <Contract contract = {this.state.contract}/>
            </div>
        )
    }
}

