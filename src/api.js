const BASE_URL = "https://mbti-api-pp4g.onrender.com";  // FastAPI 백엔드 URL

// ✅ MBTI 기반 오늘의 운세 요청
export const getTodayFortuneByMBTI = async (mbti) => {
  console.log(`🚀 API 요청 실행됨: ${mbti}`);  // API 요청 실행 확인

  try {
    const response = await fetch(`${BASE_URL}/fortune/today/mbti?mbti=${mbti.toLowerCase()}`, {
      method: "GET",  // 백엔드에서 GET 요청을 받도록 설정했으면 GET 사용
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("✅ API 응답 받음:", data);
    return data;
  } catch (error) {
    console.error("🚨 API 요청 실패:", error);
    return null;
  }
};

// ✅ 생년월일 기반 오늘의 운세 요청
export const getTodayFortuneByBirthday = async (birthday) => {
  try {
    const response = await fetch(`${BASE_URL}/fortune/today/birthday?birthday=${birthday}`, {
      method: "GET",  // 백엔드에서 GET 요청을 받도록 설정했으면 GET 사용
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("✅ 생년월일 기반 운세 응답 받음:", data);
    return data;
  } catch (error) {
    console.error("🚨 생년월일 운세 API 요청 실패:", error);
    return null;
  }
};