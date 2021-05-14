import React, { Component } from 'react';
import axios from '../axios-order';
import './main.css';
import Intro from '../components/intro/Intro';
import CoverLetter from '../components/cover-letter/cover-letter';
import Profile from '../components/profile/profile';
import Programming from '../components/skills/programming';
import Contract from '../components/contract/contract';
import NavigationBar from '../components/navigationBar/navigationBar';
import TimeLine from '../components/timeLine/timeLine';
import MyGallery from '../components/myGallery/myGallery';
// import Loading from '../components/UI/loading/loading';

export default class main extends Component {
  state = {
    intro: '',
    profileImg: '',
    name: '',
    position: '',
    skills: '',
    contract: '',
    experience: '',
    error: false,
  };

  async componentDidMount() {
    await axios.get('/intro.json').then((res) => {
      this.setState({ intro: res.data });
    });
    await axios.get('/image-profile.json').then((res) => {
      this.setState({ profileImg: res.data });
    });
    await axios.get('/name.json').then((res) => {
      this.setState({ name: res.data });
    });
    await axios.get('/position.json').then((res) => {
      this.setState({ position: res.data });
    });
    await axios.get('/skills.json').then((res) => {
      this.setState({ skills: res.data });
    });
    await axios.get('/contract.json').then((res) => {
      this.setState({ contract: res.data });
    });
    await axios
      .get('/experience.json')
      .then((res) => {
        this.setState({ experience: res.data });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  render() {
    let page = this.state.error ? <p>can't be loaded</p> : <div></div>;

    if (this.state.experience) {
      page = (
        <div className="main" id="main">
          <NavigationBar />
          <Intro />
          <CoverLetter cover={this.state.intro} />
          <Profile
            profileImg={this.state.profileImg}
            name={this.state.name}
            position={this.state.position}
          />
          <Programming pgSkills={this.state.skills.programmings} />
          <TimeLine experience={this.state.experience} />
          <MyGallery myGallery={this.state.contract.gallery} />
          <Contract contract={this.state.contract} />
        </div>
      );
    }

    // setTimeout(function () {
    //   document.getElementById('load').style.display = 'none';
    //   document.getElementById('main').style.display = 'block';
    // }, 9500);
    return (
      <div>
        {/* <Loading /> */}
        {page}
      </div>
    );
  }
}
