import { sortBy, drop, find } from 'lodash'
import _ from '../helpers';
import $ from '../constants'
import raiting from '../data/raiting';
import friendsList from '../data/friends';


class GameView {
  #menuDiv = null

  #gameDiv = null

  #USERS = 10;

  constructor(rootEl) {
    if (arguments.length < 1) {
      throw new TypeError('Failed to execute : 1 argument required')
    }

    this.#gameDiv = _.createEl('div', { class: 'game' })
    const chipDiv = _.createEl('div', { class: 'chip' })
    this.#menuDiv = _.createEl('div', { class: 'menu' })

    rootEl.append(this.#gameDiv)

    this.#gameDiv.append(chipDiv, this.#menuDiv)

    this.sliderView()
    this.modalView()
  }

  sliderView() {
    const items = []

    const slider = _.createEl('div', { class: 'slider' })

    const backBtn = _.createEl('button', { class: 'back-btn' })
    const forwardBtn = _.createEl('button', { class: 'forward-btn' })
    const addfriendBtn = _.createEl('button', { class: 'addfriend-btn' })

    const inner = _.createEl('div', { class: 'slider-inner' })
    const list = _.createEl('ul', { class: 'slider-list' })
    const item = _.createEl('li', { class: 'slider-item' })

    const img = _.createEl('img', { alt: 'no user photo', src: '../images/main/no-photo.png' })
    const empty = _.createEl('span', { class: 'empty' })

    addfriendBtn.append(img.cloneNode(true))

    slider.append(backBtn, addfriendBtn, inner, forwardBtn)
    inner.append(list)

    for (let i = this.#USERS; i--;) {
      const itemEl = item.cloneNode(true)
      const noPhotoEl = img.cloneNode(true)
      const emptyEl = empty.cloneNode(true)

      itemEl.append((i > 4) ? noPhotoEl : emptyEl)

      items.push(itemEl)
    }

    items.forEach((el) => {
      list.append(el)
    })

    this.#menuDiv.append(slider)
  }

  modalView() {

    const friends = []

    const modal = _.createEl('div', { class: 'modal' })
    const modalBody = _.createEl('div', { class: 'modal-body' })
    const overlay = _.createEl('div', { class: 'overlay' })

    const modalHeader = _.createEl('span', { class: 'modal-header' },_,`${$.modal.header}`)
    modalBody.append(modalHeader)

    const modalInner = _.createEl('div', { class: 'modal-inner' })
    modalBody.append(modalInner)

    const modalScore = _.createEl('div', { class: 'modal-score' })
    const scoreHeader = _.createEl('div', { class: 'score-header' })
    const scoreList = _.createEl('div', { class: 'score-list' })
    const place = _.createEl('span', { class: 'place' },_, `${$.modal.score.header.place}`)
    const emptySpan = _.createEl('span')
    const lastName = _.createEl('span', _, _, `${$.modal.score.header.lastName}`)
    const exp = _.createEl('span', { class: 'exp' }, _, `${$.modal.score.header.exp}`)

    modalInner.append(modalScore)
    modalScore.append(scoreHeader)
    modalScore.append(scoreList)

    scoreHeader.append(place, emptySpan, lastName, exp)

    const sortedRaiting = sortBy(raiting, (el)=> parseFloat(el.points)).reverse()
    const raitingCollection = drop(sortedRaiting, 3)

    raitingCollection.forEach((el, i) => {
        const scoreItem = _.createEl('div', { class: 'score-item' })
        const scorePlace = _.createEl('span', { class: 'score-place' }, _, `${i + 1}`)
        const isFriend = (find(friendsList, {'id': el.id}) === undefined)

        const scoreIsFriend = _.createEl('span', { class: 'is-friend' }, _, `${(isFriend) ? '' : 'Твой друг'}`)
        const scoreLastname = _.createEl('span', { class: `score-lastname ${(isFriend) ? '' : 'friend'}` }, _, `${el.name} ${el.lastName}`)
        const scoreExp = _.createEl('span', { class: 'score-exp' }, _, `${el.points}`)

        scoreItem.append(scorePlace)
        scoreItem.append(scoreIsFriend)
        scoreItem.append(scoreLastname)
        scoreItem.append(scoreExp)

        friends.push(scoreItem.cloneNode(true))

    })
    
    friends.forEach(el =>{
      scoreList.append(el)
    })

    modal.append(modalBody, overlay)
    this.#gameDiv.append(modal)
  }
}

export default GameView
