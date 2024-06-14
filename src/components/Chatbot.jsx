import { useState } from "react";
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
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#ffffff"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
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
