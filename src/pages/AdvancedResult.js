import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";  

function AdvancedResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const { result } = location.state || {};

  const [character, setCharacter] = useState("");
  const [summary, setSummary] = useState("");
  const [mbtiGuess, setMbtiGuess] = useState("");
  const [music, setMusic] = useState("");

  useEffect(() => {
    if (result) {
      setCharacter(result.character);
      setSummary(result.summary);
      setMbtiGuess(result.mbtiGuess);
      setMusic(result.recommand_music);
    }
  }, [result]);

  return (
    <div className="result-wrapper">
      <h1 className="result-title">🧠 성격 테스트 결과</h1>

      <img
        src={`/images/lilakuma.png`}
        alt={character}
        className="character-img"
      />

      <h2 className="character-name">당신과 닮은 캐릭터: "{character}"</h2>

      <div className="result-description">
        <p><strong>예상되는 MBTI 유형:</strong> {mbtiGuess}</p>
        <p><strong>🎧 어울리는 아티스트:</strong> {music}</p>
        <p className="summary-text">{summary}</p>
      </div>

      <button className="return-button" onClick={() => navigate("/")}>
        ⬅️ 홈으로 돌아가기
      </button>
    </div>
  );
}

export default AdvancedResult;