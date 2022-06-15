import './index.css'

const LatestMatch = props => {
  const {latestMatchTo} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchTo

  return (
    <div className="latest-match-content-container">
      <div className="latest-extra">
        <div className="team-content">
          <p className="latest-team-name">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="results">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-team-logo"
        />
      </div>
      <hr className="line" />
      <div className="innings-container">
        <p className="head">First Innings</p>
        <p className="answer">{firstInnings}</p>
        <p className="head">Seconds Innings</p>
        <p className="answer">{secondInnings}</p>
        <p className="head">Man Of The Match</p>
        <p className="answer">{manOfTheMatch}</p>
        <p className="head">Umpires</p>
        <p className="answer">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
