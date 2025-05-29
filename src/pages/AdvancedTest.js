import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPsychologyAnswers } from "../api"; 
import "../App.css";  

const questions = [
  {
    id: 1,
    question: "아침에 일어나 가장 먼저 하는 일은?",
    options: [
      "눈 비비며 천장을 멍하니 본다",
      "휴대폰을 확인한다",
      "바로 일어나 하루 계획을 점검한다"
    ]
  },
  {
    id: 2,
    question: "친구들과 모임이 잡혔을 때의 반응은?",
    options: [
      "나가면 재밌긴 하겠지만 귀찮다",
      "벌써부터 설렌다, 무슨 옷 입을지 고민",
      "일단 누구 오는지부터 확인한다"
    ]
  },
  {
    id: 3,
    question: "카페에서 옆자리에 앉은 사람이 실수로 당신 음료를 가져갔을 때?",
    options: [
      "정중하게 말하고 상황을 바로잡는다",
      "그냥 새로 시키고 넘긴다",
      "직원에게 조용히 도움을 청한다"
    ]
  },
  {
    id: 4,
    question: "갑자기 비가 내릴 때 당신은?",
    options: [
      "우산 없는데? 뭐 어때, 맞고 간다",
      "아까부터 올 것 같더라",
      "일단 근처 편의점부터 찾는다"
    ]
  },
  {
    id: 5,
    question: "편의점에 들어가면 가장 먼저 향하는 곳은?",
    options: [
      "도시락 코너",
      "신제품 과자 코너",
      "아이스크림 냉동고"
    ]
  },
  {
    id: 6,
    question: "토요일 아침, 눈을 떴는데 일정이 없다면?",
    options: [
      "평소 못 본 사람들과의 만남을 계획한다",
      "넷플릭스를 정주행하며 방콕한다",
      "평소 하던 루틴을 유지하며 하루를 보낸다"
    ]
  },
  {
    id: 7,
    question: "실수로 약속 시간을 헷갈렸다면?",
    options: [
      "‘어쩔 수 없지’ 하며 넘어간다",
      "미리 체크 안 한 나 자신에게 화가 난다",
      "최대한 빠르게 수습하려 애쓴다"
    ]
  },
  {
    id: 8,
    question: "좋아하는 캐릭터가 갑자기 죽는 전개를 보면?",
    options: [
      "슬프지만 “스토리상 필요했겠지”라고 이해한다",
      "눈물 콧물 흘리며 며칠 동안 여운에 잠긴다",
      "작가의 인터뷰나 설정을 파고들어 분석한다"
    ]
  },
  {
    id: 9,
    question: "길을 잃은 사람이 길을 물어본다면?",
    options: [
      "아는 한도에서 친절하게 설명해준다",
      "지도 앱을 켜서 직접 찾아봐준다",
      "긴장해서 말이 꼬일까 봐 걱정된다"
    ]
  },
  {
    id: 10,
    question: "“오늘 뭐 먹지?”에 대한 반응은?",
    options: [
      "아무거나 좋아~ 네가 정해",
      "난 치킨 먹고 싶은데, 너는?",
      "어제 먹은 거랑 겹치지만 않으면 돼"
    ]
  }
];

function AdvancedTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAnswer = async (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    const isLastQuestion = currentQuestion + 1 === questions.length;

    if (!isLastQuestion) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // ✅ 질문 + 답변 쌍으로 묶기
      const answerPairs = questions.map((q, i) => ({
        question: q.question,
        answer: newAnswers[i],
      }));

      try {
        // ✅ API 요청 → 백엔드에서 분석 결과 받기
        const result = await sendPsychologyAnswers(answerPairs);

        // ✅ 결과 페이지로 이동하면서 결과 전달
        navigate("/advanced-result", { state: { result } });
      } catch (error) {
        console.error("🚨 분석 요청 실패:", error);
        alert("분석 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      }
    }
  };

  return (
    
    <div className="test-container">
        {/* 프로그레스 바 */}
        <div className="progress-container">
        <div
            className="progress-bar"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        ></div>
        </div>
    
      <h2>Q{currentQuestion + 1}. {questions[currentQuestion].question}</h2>

      <div className="options">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="option-button"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AdvancedTest;