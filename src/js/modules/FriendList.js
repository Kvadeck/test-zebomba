import { remove } from 'lodash';

class FriendList {
  constructor(friends = []) {
    if (arguments.length < 1) throw new TypeError('Failed to execute : 1 argument required')

    this.friends = friends
  }

  add(friend) {
    const { id: friendId } = friend
    const [current] = remove(this.friends, (el) => el.id === friendId)

    if (friendId === current?.id) throw new TypeError('That friend already exist')

    this.friends.push(friend)
    return this.friends
  }

  remove(friendId) {
    this.friends = this.friends.filter((el) => el.id !== friendId)
    return this.friends
  }

  static noImageSrc = 'images/no-photo-friend.png'
}

export default FriendList
