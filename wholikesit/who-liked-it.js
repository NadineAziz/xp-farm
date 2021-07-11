function whoLikesIt(likes) {
  if (likes.length === 0) {
    return "no one likes this";
  } else if (likes.length === 1) {
    return likes[0] + " likes this";
  } else if (likes.length === 2) {
    return likes[0] + " and " + likes[1] + " like this";
  } else if (likes.length === 3) {
    return likes[0] + ", " + likes[1] + " and " + likes[2] + " like this";
  } else if (likes.length === 4) {
    return (
      likes[0] + ", " + likes[1] + ", " + likes[2] + " and 1 other like this"
    );
  } else {
    return (
      likes[0] +
      ", " +
      likes[1] +
      ", " +
      likes[2] +
      " and " +
      (likes.length - 3) +
      " others like this"
    );
  }
}

module.exports = {
  whoLikesIt,
};
