function gamBamBo(me, you) {

  //1. 이름 만들기
  //2. 규칙을 적어놓기(불변의 전제)

  //가위바위보 해석. 추상적인 것

  /**
   * 가위는 주먹한테 지고 보한테는 이긴다.
   * 바위는 보한테 지고 가위한테 이긴다.
   * 보는 가위한테 지고 주먹한테 이긴다.
  */

  //(가위 바위 보)만 입력해야 함.

  function randomNum() {

    let rules = ["가위", "바위", "보"]
    let num = Math.floor(Math.random(0, 2) * 3);
    let ranNum = rules[num]
    return ranNum;

  }

  randomNum();


  if (me === "가위") {
    //가위 vs 바위
    if (you === "바위") {
      console.log("나:", me, "너:", you);
      console.log(me, "가 졌습니다.")
      return 0;
    }
    //가위 vs 가위
    if (you === "가위") {
      console.log("나:", me, "너:", you);
      console.log("비겼습니다.")
      return 1;
    }
    //가위 vs 보
    if (you === "보") {
      console.log("나:", me, "너:", you);
      console.log(me, "가 이겼습니다.")
      return 2;
    }
  }

  if (me === "바위") {
    //바위 vs 바위
    if (you === "보") {

      console.log("나:", me, "너:", you);
      console.log(me, "가 졌습니다.")
      return 0;
    }

    if (you === "바위") {
      console.log("나:", me, "너:", you);
      console.log("비겼습니다.")
      return 1;
    }

    if (you === "가위") {
      console.log("나:", me, "너:", you);
      console.log(me, "가 이겼습니다.")
      return 2;
    }
  }


  if (me === "보") {
    if (you === "가위") {

      console.log("나:", me, "너:", you);
      console.log(me, "가 졌습니다.")
      return 0;
    }

    if (you === "보") {
      console.log("나:", me, "너:", you);
      console.log("비겼습니다.")
      return 1;
    }

    if (you === "바위") {
      console.log("나:", me, "너:", you);
      console.log(me, "가 이겼습니다.")
      return 2;
    }
  }
}





//랜덤 -> 승률