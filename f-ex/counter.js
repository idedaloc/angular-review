class FCounter {
    constructor(_likes, _isLiked) {
        this._likes = _likes;
        this._isLiked = _isLiked;
    }
    like() {
        this._likes += this._isLiked ? -1 : +1;
        this._isLiked = !this.isLiked;
    }
    get likes() { return this._likes; }
    get isLiked() { return this._isLiked; }
}
module.exports = FCounter;
