import React, { useEffect, useState } from 'react';

const words = ['GIS Engineer', 'Full Stack Developer', 'Data Analyst'];
const TYPING_SPEED = 100;
const DELETING_SPEED = 60;
const PAUSE_BEFORE_DELETE = 1500;
const PAUSE_BEFORE_TYPE = 500;

export default function AnimatedText() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];

    let timer;

    if (!isDeleting && text !== currentWord) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, TYPING_SPEED);
    } else if (isDeleting && text !== '') {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, DELETING_SPEED);
    } else if (!isDeleting && text === currentWord) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, PAUSE_BEFORE_DELETE);
    } else if (isDeleting && text === '') {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, PAUSE_BEFORE_TYPE);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="text-red-600">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}
