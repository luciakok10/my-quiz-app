import { useState } from 'react'

const questions = [
  { 
    title: "當你在森林中迷路，看到一盞燈火，你會？", 
    options: [{ text: "立刻跑過去", type: "A" }, { text: "在原地觀察", type: "B" }] 
  },
  { 
    title: "你覺得燈火主人的杯子是什麼顏色？", 
    options: [{ text: "純白色", type: "A" }, { text: "深藍色", type: "B" }] 
  }
];

const results = {
  A: { title: "行動派冒險家", desc: "你充滿勇氣，總是第一時間面對挑戰！" },
  B: { title: "深邃思想家", desc: "你理性且冷靜，總能看透事物的本質。" }
};

function App() {
  const [step, setStep] = useState(-1);
  const [score, setScore] = useState({ A: 0, B: 0 });

  const handleSelect = (type) => {
    setScore(prev => ({ ...prev, [type]: prev[type] + 1 }));
    setStep(step + 1);
  };

  const finalResult = score.A >= score.B ? results.A : results.B;

  // 定義統一的文字顏色變數，方便管理
  const textColor = "#333333"; 

  return (
    <div style={{ 
      minHeight: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', 
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', margin: 0, 
      fontFamily: 'sans-serif', color: textColor // 這裡設定全域文字顏色
    }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '24px', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', width: '90%', maxWidth: '320px' }}>
        
        {step === -1 && (
          <div>
            <h1 style={{ fontSize: '24px', marginBottom: '10px', color: textColor }}>🔮 靈魂色彩測驗</h1>
            <p style={{ color: '#666', marginBottom: '30px' }}>探索你最真實的樣貌</p>
            <button onClick={() => setStep(0)} style={{ background: '#333', color: 'white', border: 'none', padding: '15px 40px', borderRadius: '12px', cursor: 'pointer', fontSize: '16px' }}>
              開始探索
            </button>
          </div>
        )}

        {step >= 0 && step < questions.length && (
          <div>
            <h2 style={{ fontSize: '20px', marginBottom: '30px', color: textColor }}>{questions[step].title}</h2>
            {questions[step].options.map((opt, i) => (
              <button key={i} onClick={() => handleSelect(opt.type)} style={{ 
                display: 'block', width: '100%', margin: '10px 0', padding: '15px', 
                borderRadius: '12px', border: '1px solid #eee', background: 'white', 
                cursor: 'pointer', color: textColor // 按鈕內的文字也設為深色
              }}>
                {opt.text}
              </button>
            ))}
          </div>
        )}

        {step === questions.length && (
          <div>
            <h3 style={{ color: '#888', margin: 0 }}>測驗結果</h3>
            <h1 style={{ color: textColor, fontSize: '28px', margin: '10px 0' }}>{finalResult.title}</h1>
            <p style={{ color: '#555', lineHeight: '1.6' }}>{finalResult.desc}</p>
            <button onClick={() => window.location.reload()} style={{ 
              marginTop: '20px', padding: '10px 20px', borderRadius: '8px', 
              border: '1px solid #333', cursor: 'pointer', background: 'none', color: textColor 
            }}>
              重新測驗
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;