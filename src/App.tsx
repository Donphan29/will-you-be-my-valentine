"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [currentGIF, setCurrentGif] = useState("https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif");
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  const noGIF = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTYzbDc4NXZlYW1nanYwcTlha2lydnlkNTRyaG1qcjY5MnUyY2pudSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/P53TSsopKicrm/giphy.gif";

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    setCurrentGif(noGIF);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Are you REALLY sure",
      "ok :((",
      "NO, PLEASE",
      "I'll die",
      "Like fr",
      "i'm dead, goodbye",
      "mango pie?",
      "matcha, boba, banh mi, chicken adobo?",
      "i actually never had filipino food lol",
      "wait, STOP",
      "still no?",
      "nooooo :(("
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW1naGdsb2tucTRrenFxZDZiZWZ1cWtpenY3YmozdjNxcTQyN3ptNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11sBLVxNs7v6WA/giphy.gif" />
          <div className="my-4 text-4xl font-bold text-center">YYAAAAY!!!</div>
          <div className="my-4 text-l font-bold text-center">(i actually cant see what you clicked so please lmk lol)</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src={currentGIF}
          />
          <h1 className="my-4 text-4xl text-center">Sarah, will you be my valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
