// Write your code here
import './index.css'

const DetailItem = props => {
  const {Details, toggleIsStarred} = props
  const {name, id, email, gender, date, isStarred, status} = Details
  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggleIsStarred(id)
  }

  const isActiveClassName =
    status === 'active' ? 'active-class' : 'inActive-class'

  return (
    <li className="detail-item">
      <div className="header-container">
        <div>
          <div className="head-para">
            <p className="title">Name: {name}</p>
            <p className={isActiveClassName}>{status}</p>
          </div>

          <p className="title">Email: {email}</p>
          <p className="title">Gender:{gender}</p>
        </div>
        <button
          type="button"
          data-testId="star"
          className="star-button"
          onClick={onClickStar}
        >
          <img src={starImgUrl} className="star" alt="star" />
        </button>
      </div>
      <p className="date">{date}</p>
    </li>
  )
}

export default DetailItem
