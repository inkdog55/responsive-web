"use client";

export default function Header() {
  const ClickEvent = (event) => {
    event.preventDefault(); // HTML의 submit 관련 고유 동작 중단시키기

    // AJAX 요청하기
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__start">
          <button className="header__hamburger">&#9776;</button>
          <span className="header__title">YoonTube</span>
        </h1>
        <div className="header__center">
          <form
            className="header__form"
            onSubmit={ClickEvent}
          >
            <input
              className="header__input--text"
              placeholder="보고싶은 동영상"
            />
            <button className="header__input--button">검색</button>
          </form>
        </div>
        <div className="header__end">
          <button className="header__search">&#128269;</button>
          <div className="header__profile"></div>
        </div>
      </div>
    </header>
  );
}
