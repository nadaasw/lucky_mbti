import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

function AdvancedResult() {
  const location = useLocation();
  const { character, summary, mbtiGuess, recommand_music } = location.state || {};
  const navigate = useNavigate();

  return (
    <div className="result-container">
      <h1 className="result-title">🧠 성격 테스트 결과</h1>

      {/* 캐릭터 이미지 */}
      <img
        src={`/public/images/lilakuma.png`} // 예: /images/리락쿠마.png
        alt="리락쿠마"
        className="result-character-image"
      />

      {/* 캐릭터 이름 */}
      <h2 className="result-character-name">당신과 닮은 캐릭터: "리락쿠마"</h2>

      {/* 성격 요약 */}
      <p className="result-summary">{summary}</p>

      {/* 추정된 MBTI */}
      <p className="result-mbti">예상되는 MBTI 유형: <strong>{mbtiGuess}</strong></p>

      {/* 음악 추천 */}
      <p className="result-music">🎧 어울리는 아티스트: <em>{recommand_music}</em></p>

      <button onClick={() => navigate("/")}>홈으로 돌아가기</button>
    </div>
  );
}

export default AdvancedResult;