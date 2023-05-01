// Write your React code here.
import './index.css'

import {Component} from 'react'

class Feedback extends Component {
  state = {
    isSelected: false,
  }

  onClickEmoji = () => {
    this.setState({isSelected: true})
  }

  renderEmojiScreen = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="emoji-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="emojis-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                className="emoji-btn"
                onClick={this.onClickEmoji}
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
                <br />
                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="feedback-container">
        <img src={loveEmojiUrl} className="love" alt="love emoji" />
        <h1 className="feedback">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isSelected} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          {isSelected ? this.renderThankYouScreen() : this.renderEmojiScreen()}
        </div>
      </div>
    )
  }
}

export default Feedback
