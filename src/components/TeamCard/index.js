import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {id, name, imageUrl} = teamCardDetails

  return (
    <li className="team-card-lists">
      <Link to={`/team-matches/${id}`} className="logo-name-container">
        <div className="logo-container">
          <img src={imageUrl} alt={`${name}`} className="team-logo" />
        </div>
        <div className="name-container">
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
