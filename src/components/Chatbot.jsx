import { useState, useRef, useEffect } from "react";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBu57YB9IHabgyJA4dgGYYwSjtGGuArlhY");
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "You are customer service of Blackstudio.id production house. Established in 2019, based in Batu-Malang, East Java. They combine innovative ideas with exceptional execution to deliver high-quality photography, videography, graphic design, and motion graphics. The email for this office is blackstudio.id@gmail.com, user can call this number to order services : 08113577793. Your office at Jl. Suropati Gg. 9 No.20, RT.1/RW.8, Pesanggrahan, Kec. Batu, Kota Batu, Jawa Timur . If a user asks about the cost and price of our product, you must tell the user to ask question in form at the contact section. Also, you can speak multilingual languages, like English and Indonesian. If a user asks you about Bahasa Indonesia, please answer it with Bahasa too. And don't answer questions outside the context above. Keep your answers under 5 sentences long, and use a professional cheerful tone in your answers.",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

const Chatbot = () => {
  const [toggle, setToggle] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [conversationHistory, setConversationHistory] = useState([]);
  const [chatSession, setChatSession] = useState(
    model.startChat({
      generationConfig,
      safetySettings,
    })
  );

  const sendMessage = async (input) => {
    setConversationHistory((prevHistory) => [
      ...prevHistory,
      { sender: "user", text: input },
    ]);
    setUserInput("");
    const result = await chatSession.sendMessage(input);
    const aiResponse = await result.response.text();
    setConversationHistory((prevHistory) => [
      ...prevHistory,
      { sender: "bot", text: aiResponse },
    ]);
  };

  return (
    <main>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
        aria-label="Chatbot"
        className="fixed rounded-full p-2 text-center right-5 bottom-5 sm:right-10 sm:bottom-10 z-20 bg-black hover:scale-105 active:scale-95 transition cursor-pointer"
      >
        <svg
          className="size-7"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 9H17M7 13H17M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {toggle ? (
        <div className=" bottom-20 right-5 sm:bottom-20 sm:right-10 z-50 fixed">
          <div className="w-80 rounded-lg overflow-hidden p-2 glass">
            <div className="bg-black w-full text-white bebas tracking-wider rounded-md text-lg p-2">
              Chatbot
            </div>
            <ul className=" overflow-y-scroll h-80 sm:h-96 ">
              <li className="m-1 bg-white rounded-r-md rounded-t-md w-[80%] p-1 float-left">
                <p className="font-md text-sm montserat">Chatbot</p>
                <p className="font-light text-sm poppins">
                  Hi, Welcome to Blackstudio.id, How can I help you today?
                </p>
              </li>
              {conversationHistory.map((message, index) => (
                <li
                  key={index}
                  className={`m-1 bg-white rounded-t-md w-[80%] p-1 ${
                    message.sender === "bot"
                      ? "float-left rounded-r-md"
                      : "float-right rounded-l-md"
                  }`}
                >
                  <p className="font-xl text-sm montserat">
                    {message.sender === "bot" ? "Chatbot" : "User"}
                  </p>
                  <p className="font-light text-sm poppins">{message.text}</p>
                </li>
              ))}
            </ul>

            <div className="flex gap-1 p-2">
              <input
                type="text"
                className="text-sm rounded-md px-5 flex-1 montserat focus:outline-none"
                placeholder="Ask your question here"
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage(userInput);
                    setUserInput("");
                  }
                }}
              />
              <button
                onClick={() => {
                  sendMessage(userInput);
                  setUserInput("");
                }}
                className="bg-gradient-to-t from-black to-gray-950 p-3 rounded-md bebas text-white transition hover:scale-105 active:scale-95"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
};

export default Chatbot;
