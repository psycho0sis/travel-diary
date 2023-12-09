export interface IHeartSvg {
  isFilled: boolean;
  onClick: () => void;
}

export interface ILike {
  amountOfLikes: number;
  isUserAlreadyLiked: boolean;
  decreaseAmountOfLikes: () => void;
  increaseAmountOfLikes: () => void;
}
