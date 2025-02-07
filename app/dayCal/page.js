'use client'
import { useState } from 'react';


const DogCalorieCalculator = () => {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [dogStatus, setDogStatus] = useState('');
  const [result, setResult] = useState(null);

  const dogTypes = [
    { value: '1.4', label: '성견(중성화 함)' },
    { value: '1.6', label: '성견(중성화 안함)' },
    { value: '1', label: '비만견' },
    { value: '0.8', label: '고령견' },
    { value: '2', label: '퍼피' },
  ];

  const calculateCalories = () => {
    if (!name || !weight || !dogStatus) {
      alert('모든 항목을 입력해주세요');
      return;
    }

    const RER = Math.pow(parseFloat(weight), 0.75) * 70;
    const calories = RER * parseFloat(dogStatus);

    setResult({
      name,
      RER: RER.toFixed(2),
      calories: calories.toFixed(2)
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>강아지 칼로리 계산기</h2>
      
      <div style={styles.formGroup}>
        <label style={styles.label}>이름</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="강아지 이름"
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>몸무게 (kg)</label>
        <input
          type="number"
          min="0"
          step="0.1"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="몸무게를 입력하세요"
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>반려견 상태</label>
        <div style={styles.radioGroup}>
          {dogTypes.map((type) => (
            <div key={type.value} style={styles.radioItem}>
              <input
                type="radio"
                id={type.value}
                name="dogStatus"
                value={type.value}
                checked={dogStatus === type.value}
                onChange={(e) => setDogStatus(e.target.value)}
                style={styles.radio}
              />
              <label htmlFor={type.value} style={styles.radioLabel}>
                {type.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={calculateCalories}
        style={styles.button}
      >
        계산하기
      </button>

      {result && (
        <div style={styles.result}>
          <p style={styles.resultTitle}>{result.name}의 계산 결과</p>
          <p style={styles.resultText}>RER: {result.RER} kcal</p>
          <p style={styles.resultText}>하루 권장 칼로리: {result.calories} kcal</p>
        </div>
      )}

    <div style={styles.copy}>Created by. <a href="//www.instagram.com/vito.igh">비토링 @vito.igh</a></div>
    </div>

  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center'
  },
  formGroup: {
    marginBottom: '20px'
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '500'
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px',
    boxSizing: 'border-box'
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  radioItem: {
    display: 'flex',
    alignItems: 'center'
  },
  radio: {
    marginRight: '8px'
  },
  radioLabel: {
    fontSize: '14px'
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500'
  },
  result: {
    marginTop: '20px',
    padding: '15px',
    backgroundColor: '#f5f5f5',
    borderRadius: '4px'
  },
  resultTitle: {
    fontWeight: 'bold',
    marginBottom: '10px'
  },
  resultText: {
    margin: '5px 0'
  },
  copy: {
    marginTop: '20px',
    textAlign: 'center',
  }
};

export default DogCalorieCalculator;