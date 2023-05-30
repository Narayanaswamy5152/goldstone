import {Component} from 'react'
import {v4} from 'uuid'
import {format} from 'date-fns'

import DetailItem from '../DetailItem'

import './index.css'

const ApiUrl = 'https://gorest.co.in/public-api/users'

const AccessToken =
  '0b802d62782b26aecdac850ed3cafcc85bb95166c5d383edb2f3515498bc3616'

class Details extends Component {
  state = {
    detailsList: [],
    nameInput: '',
    emailInput: '',
    dateInput: '',
    genderInput: '',
    isFilterActive: false,
    status: 'active',
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(ApiUrl, {
      headers: {
        Authorization: `Bearer ${AccessToken}`,
      },
    })
    const fetchedData = await response.json()
    const formattedData = fetchedData.data.map(team => ({
      name: team.name,
      id: team.id,
      email: team.email,
      gender: team.gender,
      status: team.status,
    }))

    this.setState({
      detailsList: formattedData,
    })
  }

  toggleIsStarred = id => {
    this.setState(prevState => ({
      detailsList: prevState.detailsList.map(eachDetail => {
        if (id === eachDetail.id) {
          return {...eachDetail, isStarred: !eachDetail.isStarred}
        }
        return eachDetail
      }),
    }))
  }

  onFilter = () => {
    const {isFilterActive} = this.state

    this.setState({
      isFilterActive: !isFilterActive,
    })
  }

  onChangeEmailInput = event => {
    this.setState({emailInput: event.target.value})
  }

  onChangeGenderInput = event => {
    this.setState({genderInput: event.target.value})
  }

  onChangeDateInput = event => {
    this.setState({dateInput: event.target.value})
  }

  onChangeNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onAddDetail = event => {
    event.preventDefault()
    const {nameInput, status, dateInput, emailInput, genderInput} = this.state
    const formattedDate = dateInput
      ? format(new Date(dateInput), 'dd MMMM yyyy, EEEE')
      : ''
    const newDetail = {
      id: v4(),
      name: nameInput,
      date: formattedDate,
      email: emailInput,
      gender: genderInput,
      isStarred: false,
      status,
    }

    this.setState(prevState => ({
      detailsList: [...prevState.detailsList, newDetail],
      nameInput: '',
      dateInput: '',
      emailInput: '',
      genderInput: '',
    }))
  }

  getFilteredDetailsList = () => {
    const {detailsList, isFilterActive} = this.state

    if (isFilterActive) {
      return detailsList.filter(
        eachTransaction => eachTransaction.isStarred === true,
      )
    }
    return detailsList
  }

  render() {
    const {
      nameInput,
      dateInput,
      emailInput,
      genderInput,
      isFilterActive,
    } = this.state
    const filterClassName = isFilterActive ? 'filter-filled' : 'filter-empty'
    const filteredDetailsList = this.getFilteredDetailsList()

    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="details-container">
            <div className="header-with-filter-container">
              <h1 className="details-heading">Details</h1>
              <button
                type="button"
                className={`filter-style ${filterClassName}`}
                onClick={this.onFilter}
              >
                Starred
              </button>
            </div>
            <ul className="details-list">
              {filteredDetailsList.map(eachDetail => (
                <DetailItem
                  key={eachDetail.id}
                  Details={eachDetail}
                  toggleIsStarred={this.toggleIsStarred}
                />
              ))}
            </ul>
            <div className="add-detail-container">
              <form className="form" onSubmit={this.onAddDetail}>
                <h1 className="add-detail-heading">Add Details</h1>
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input
                  type="text"
                  id="title"
                  value={nameInput}
                  onChange={this.onChangeNameInput}
                  className="input"
                  placeholder="name"
                />
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  value={emailInput}
                  onChange={this.onChangeEmailInput}
                  className="input"
                  placeholder="Email"
                />
                <label htmlFor="gender" className="label">
                  Gender
                </label>
                <input
                  type="text"
                  id="gender"
                  value={genderInput}
                  onChange={this.onChangeGenderInput}
                  className="input"
                  placeholder="Gender"
                />
                <label htmlFor="date" className="label">
                  DATE
                </label>
                <input
                  type="date"
                  id="date"
                  value={dateInput}
                  onChange={this.onChangeDateInput}
                  className="input"
                />
                <button type="submit" className="add-button">
                  Add
                </button>
              </form>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="details"
                className="details-img"
              />
            </div>
            <hr className="hr" />
          </div>
        </div>
      </div>
    )
  }
}

export default Details
