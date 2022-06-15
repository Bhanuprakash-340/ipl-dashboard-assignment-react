import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestTeamMatches: [],
    recentMatchCards: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const imageBannerUrl = data.team_banner_url
    const latestMatchDetails = data.latest_match_details
    const MatchCardDetails = data.recent_matches
    const latestMatches = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    const formattedMatchCard = MatchCardDetails.map(eachCard => ({
      competingTeam: eachCard.competing_team,
      competingTeamLogo: eachCard.competing_team_logo,
      date: eachCard.date,
      firstInnings: eachCard.first_innings,
      id: eachCard.id,
      manOfTheMatch: eachCard.man_of_the_match,
      matchStatus: eachCard.match_status,
      result: eachCard.result,
      secondInnings: eachCard.second_innings,
      umpires: eachCard.umpires,
      venue: eachCard.venue,
    }))

    this.setState({
      teamBannerUrl: imageBannerUrl,
      latestTeamMatches: latestMatches,
      recentMatchCards: formattedMatchCard,
      isLoading: false,
    })
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {
      teamBannerUrl,
      latestTeamMatches,
      recentMatchCards,
      isLoading,
    } = this.state

    return (
      <div className={`team-matches-app-container ${id}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="team-matches-content-container">
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-matches-image"
            />
            <p className="latest-match-heading">Latest Match</p>
            <LatestMatch latestMatchTo={latestTeamMatches} />
            <ul className="match-card-container">
              {recentMatchCards.map(each => (
                <MatchCard matchCardDetails={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}

        {/* <div className="team-matches-content-container">
          <img src={teamBannerUrl} alt="img" className="team-matches-image" />
          <p className="latest-match-heading">Latest Match</p>
          <LatestMatch latestMatchTo={latestTeamMatches} />
          <ul className="match-card-container">
            {recentMatchCards.map(each => (
              <MatchCard matchCardDetails={each} key={each.id} />
            ))}
          </ul>
        </div> */}
      </div>
    )
  }
}

export default TeamMatches
