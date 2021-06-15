import BaseComponent from './base/base-component';
import DataCards from '../../assets/data.json';
import { parseLocalStorage, getLocalStorage } from './localStorage';

const IMAGES_ROUTE = '../../assets/img/';

const SELECTORS = {
  'MAIN_DIV_CARD' : '.opinion-card',
  'CARD_CONTENT': '.opinion-card__content',
  'CARD_DESCRIPTION': '.opinion-card__description',
  'BUTTON_VOTE_UP': 'icon-button__vote-up',
  'BUTTON_VOTE_DOWN': 'icon-button__vote-down',
  'GAUGE_THUMPS_UP' : '.opinion-card__gauge__thumbs-up',
  'GAUGE_THUMPS_DOWN' : '.opinion-card__gauge__thumbs-down',
  'BUTTON_VOTE': '.opinion-card__votes__vote',
  'EYEBROW': '.opinion-card__eyebrow',
  'THUMBS_POSITIVE': '.positive',
  'THUMBS_NEGATIVE': '.negative',
  'DROP_DOWN': '.drop-down_list'
}

const CLASSES = {
  'BUTTON_THUMB_ACTIVE': 'icon-button__vote--active',
  'BUTTON_VOTE_ACTIVE': 'opinion-card__votes__vote--active',
  'LIST': 'opinion-card-list',
  'GRID': 'opinion-card-grid',
}

const STYLE_OPTION = {
  'GRID' :'grid',
  'LIST' :'list',
}


class Card extends BaseComponent {
  constructor(el) {
    super(el);
    this.voteAgain = false;
  }

  init() {
    super.init();

    this.addVotesToLocalStorage();
    this.dataVotes = getLocalStorage('votes');
    this.renderInformation();
  }

  _elements() {
    this.mainDivCard = document.querySelector(SELECTORS.MAIN_DIV_CARD);
    this.cardContent = this.el.querySelector(SELECTORS.CARD_CONTENT);
    this.dropDownList = document.querySelector(SELECTORS.DROP_DOWN);
  }

  _events() {
    this.dropDownList.addEventListener('change', ({target})=> this.changeOptionStyle(target));
  }

  // Renders the initial data for the cards.
  renderInformation() {
    DataCards.data.forEach((card, index) => {
      const cardNode = this.cardContent.cloneNode(true);
      cardNode.style.display = 'block';

      cardNode.querySelector(`${SELECTORS.CARD_DESCRIPTION} h3`).innerText = card.name;
      cardNode.querySelector(`${SELECTORS.CARD_DESCRIPTION} p`).innerText = card.description;
      cardNode.style.backgroundImage = `url(${IMAGES_ROUTE}${card.picture})`
      cardNode.querySelector(SELECTORS.EYEBROW).innerText = card.category;

      this.handleGaugeVotes(cardNode, this.calculatePercentage(this.dataVotes[index]));
      this.getMaxTypeVotes(cardNode, this.dataVotes[index]);
      this.mainDivCard.append(cardNode);
    });

    this.eventListenerButtons();
  };

  /**
   * Handles the render information for the gauge bar positive and negative votes.
   * @param {HTML} card current element cloned to render the card.
   * @param {array} votesAverage get the percentages for positive and negative votes.
   */
  handleGaugeVotes(card, votesAverage) {
    this.thumbsUpContent = card.querySelector(`${SELECTORS.GAUGE_THUMPS_UP}`);
    this.thumbsUpText = card.querySelector(`${SELECTORS.GAUGE_THUMPS_UP} label`);
    this.thumbsDownContent = card.querySelector(`${SELECTORS.GAUGE_THUMPS_DOWN}`);
    this.thumbsDownText = card.querySelector(`${SELECTORS.GAUGE_THUMPS_DOWN} label`);

    const voteTextPositive = `${votesAverage[0].positive}%`;
    const voteTextNegative = `${votesAverage[1].negative}%`;

    this.thumbsUpContent.style.width = voteTextPositive;
    this.thumbsUpText.innerText = voteTextPositive;
    this.thumbsDownContent.style.width = voteTextNegative;
    this.thumbsDownText.innerText = voteTextNegative;
  }


  /**
   * Validates the max number of votes for a type and active an icon.
   * @param {HTML} card current element cloned to render the card.
   * @param {array} votes list of values of the current votes for an author.
   */
   getMaxTypeVotes(card, votes) {
    const description = card.querySelector(`${SELECTORS.CARD_DESCRIPTION} div`);
    const positive = description.querySelector(SELECTORS.THUMBS_POSITIVE);
    const negative = description.querySelector(SELECTORS.THUMBS_NEGATIVE);

    if(votes.positive > votes.negative) {
      positive.style.display= "block";
      negative.style.display = "none";
    } else {
      negative.style.display= "block";
      positive.style.display = "none";
    }
  }

  /**
   * Calculates the percentage of votes for every type (positive, negative)
   * @param {Array} votes values from a card related to an author.
   */
  calculatePercentage(votes) {
    if(!votes) { return; }
    const totalVotes = votes.positive + votes.negative;

    const percentages = Object.keys(votes).map((key) => {
      const voteType = {};
      voteType[key] = (votes[key] / totalVotes * 100).toFixed(2);
      return voteType;
      ;
    });
    return percentages;
  }

  /**
   * Creates the event listener for the different elements actions.
   */
  eventListenerButtons() {
    this.buttonsVoteUp = this.el.querySelectorAll(`.${SELECTORS.BUTTON_VOTE_UP}`);
    this.buttonsVoteDown = this.el.querySelectorAll(`.${SELECTORS.BUTTON_VOTE_DOWN}`);
    this.buttonsVoteNow = this.el.querySelectorAll(SELECTORS.BUTTON_VOTE);

    this.buttonsVoteUp.forEach((e)=> {
      e.addEventListener('click', ({target})=> this.setActiveButton(target));
    });

    this.buttonsVoteDown.forEach((e)=> {
      e.addEventListener('click', ({target})=> this.setActiveButton(target));
    });

    this.buttonsVoteNow.forEach((e) => {
      e.addEventListener('click',({target}) => {
        this.setVoteNow(target, Array.from(this.buttonsVoteNow).indexOf(target) - 1);
      });
    });
  }

   /**
   * Sets the action from a type of button active (thumbs up, or down).
   * @param {HTML} buttonVote button element type thumbs up or down.
   */
  setActiveButton(buttonVote) {
    const buttonActive = this.el.querySelector(`.${CLASSES.BUTTON_THUMB_ACTIVE}`);

    if(buttonActive) {
      buttonActive.classList.remove(CLASSES.BUTTON_THUMB_ACTIVE);
    }
    buttonVote.classList.add(CLASSES.BUTTON_THUMB_ACTIVE);
    this.handleVoteButton(buttonVote);
  }

  /**
   * Handles the behavior between the button thumbs up and down when active one or not.
   * @param {HTML} buttonVote button type thumbs up.
   */
  handleVoteButton(buttonVote) {
    const btnVoteActive = this.el.querySelector(`.${CLASSES.BUTTON_VOTE_ACTIVE}`);
    if(btnVoteActive) {
      btnVoteActive.classList.remove(CLASSES.BUTTON_VOTE_ACTIVE);
    }

    const currentBtnVote = buttonVote.parentElement.parentElement.querySelector(SELECTORS.BUTTON_VOTE);
    if(currentBtnVote) {
      currentBtnVote.classList.add(CLASSES.BUTTON_VOTE_ACTIVE);
    }
  }

  /**
   * Saves the votes array for every card to local storage.
   */
  addVotesToLocalStorage() {
    if(!getLocalStorage('votes')) {
      const votesArray = DataCards.data.map((el) => el.votes);
      localStorage.setItem('votes', parseLocalStorage(votesArray));
    }
  }

  /**
   * Sets and update the stage of the elements ones the user vote for one option.
   * * @param {HTML} currentButtonNow specific element button now.
   * * @param {number} indexElement index for the current element selected.
   */
  setVoteNow(currentButtonNow, indexElement) {
    if(this.voteAgain) {
      this.setInitialState(currentButtonNow, indexElement);
    }

    const iconThumbsActive = this.el.querySelector(`.${CLASSES.BUTTON_THUMB_ACTIVE}`);
    if(!iconThumbsActive) return;

    const votePositive = iconThumbsActive.classList.contains(SELECTORS.BUTTON_VOTE_UP);
    const voteNegative = iconThumbsActive.classList.contains(SELECTORS.BUTTON_VOTE_DOWN);
    const currentCard = iconThumbsActive.parentElement.parentElement;

    if(votePositive) {
      this.updateDataVote('positive', indexElement ,currentCard);
    }
    if(voteNegative) {
      this.updateDataVote('negative', indexElement, currentCard);
    }
    this.setVoteState(currentButtonNow);
  }

   /**
   * Updates the data for the votes for and specific card.
   * * @param {string} valueVote specific element button now.
   * * @param {number} indexElement index for the current element selected.
   * * @param {HTML} card current element card.
   */
  updateDataVote(valueVote, indexElement, card) {
    this.dataVotes = getLocalStorage('votes');
    this.dataVotes[indexElement][valueVote] +=1;

    localStorage.setItem('votes', parseLocalStorage(this.dataVotes));
    this.handleGaugeVotes(card, this.calculatePercentage(this.dataVotes[indexElement]));
  }

   /**
   * Update the state of the vote now button ones it is clicked.
    * * @param {HTML} buttonVote current button element.
   */
  setVoteState(buttonVote) {
    const eyeBrow = buttonVote.parentElement.parentElement.querySelector(SELECTORS.EYEBROW);
    buttonVote.innerText = "Vote Again";
    eyeBrow.innerText = 'Thank you for your vote!';
    this.voteAgain = true;
  }

  /**
   * Updates to the initial state ones vote again state is clicked.
   * * @param {HTML} buttonVote current button element.
   * * @param {index} indexElement index of the button clicked.
  */
  setInitialState(buttonVote, indexElement) {
    const eyeBrow = buttonVote.parentElement.parentElement.querySelector(SELECTORS.EYEBROW);
    const iconThumbs = buttonVote.parentElement.parentElement.querySelector(`.${CLASSES.BUTTON_THUMB_ACTIVE}`);
    if(iconThumbs) {
      iconThumbs.classList.remove(CLASSES.BUTTON_THUMB_ACTIVE);
    }
    buttonVote.innerText = "Vote Now";
    buttonVote.classList.remove(CLASSES.BUTTON_VOTE_ACTIVE);
    eyeBrow.innerText = DataCards.data[indexElement]['category'];
    this.voteAgain = false;

  }

  /**
   * Changes the style presentation of the cards.
   * * @param {HTML} element dropDownList selected to change style of the card.
   * * @param {index} indexElement index of the button clicked.
  */
  changeOptionStyle(element) {
    const selected = element.selectedOptions[0].value;

    switch(selected) {
      case STYLE_OPTION.LIST:
        this.mainDivCard.classList.add(CLASSES.LIST);
        this.mainDivCard.classList.remove(CLASSES.GRID);
      break;
      case STYLE_OPTION.GRID:
        this.mainDivCard.classList.add(CLASSES.GRID);
        this.mainDivCard.classList.remove(CLASSES.LIST);
      break;
    }
  }


}

export default Card;
