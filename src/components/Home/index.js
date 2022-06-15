import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {iplTeamCards: [], isLoading: true}

  componentDidMount() {
    this.getIplTeamCards()
  }

  getIplTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const formattedData = teams.map(eachCard => ({
      id: eachCard.id,
      name: eachCard.name,
      imageUrl: eachCard.team_image_url,
    }))
    this.setState({iplTeamCards: formattedData, isLoading: false})
  }

  render() {
    const {iplTeamCards, isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="content-container">
            <div className="ipl-name-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="logo"
              />
              <h1 className="heading">IPL Dashboard</h1>
            </div>
            <ul className="team-card-container">
              {iplTeamCards.map(eachTeam => (
                <TeamCard teamCardDetails={eachTeam} key={eachTeam.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Home
