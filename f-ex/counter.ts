class FCounter{
    constructor(private _likes?: number, private _isLiked?: boolean){}
    like(){
        this._likes += this._isLiked ? -1 : +1;
        this._isLiked = !this.isLiked;
    }
    get likes(){return this._likes}
    get isLiked(){return this._isLiked}
}

module.exports=FCounter;