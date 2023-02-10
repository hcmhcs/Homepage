import { useNavigate } from "react-router-dom";

export default function Join() {
  const movePage = useNavigate();
  function moveLogin() {
    movePage("/login");
  }
  return (
    <div className="join">
      <h2>회원가입</h2>
      <form method="post">
        <div id="join-id">
          <span>아이디</span>
          <input
            name="username"
            type="text"
            required
            maxLength="15"
            placeholder="id"
          ></input>
        </div>
        <div id="password">
          <div id="join-password1">
            <span>비밀번호</span>
            <input
              name="password"
              type="password"
              required
              maxLength="20"
              placeholder="password"
            ></input>
          </div>
          <div id="join-password2">
            <span>비밀번호확인</span>
            <input
              name="passwordcheck"
              type="password"
              required
              maxLength="20"
              placeholder="passwordagain"
            ></input>
          </div>
        </div>
        <div id="join-email">
          <span>이메일</span>
          <input
            name="email"
            type="email"
            required
            maxLength="20"
            placeholder="email"
          ></input>
        </div>
        <div id="join-name">
          <span>이름</span>
          <input
            name="name"
            type="text"
            required
            maxLength="10"
            placeholder="name"
          ></input>
        </div>
        <input type="submit" value="join"></input>
      </form>
      <button onClick={moveLogin}>이미아이디가있으신가요?</button>
    </div>
  );
}