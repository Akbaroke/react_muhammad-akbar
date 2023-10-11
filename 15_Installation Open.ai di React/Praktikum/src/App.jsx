import { useEffect, useState } from 'react';
import BG_AI from './assets/bg-ai3.jpg';
import IMG_GPT from './assets/gpt.jpg';
import { TbTrash } from 'react-icons/tb';
import { AiOutlineArrowUp } from 'react-icons/ai';
import formattedDate from './utils/formatedDate';
import { Loader, ScrollArea } from '@mantine/core';
import InputChat from './components/InputChat';
import TimeDisplay from './components/TimeDisplay';
import useScrollToBottom from './hooks/useScrollToBottom';
import openai from './config/openAi';
import cn from './utils/nc';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messageDatas, setMessageDatas] = useState([]);
  const viewport = useScrollToBottom();

  useEffect(() => {
    const persist = localStorage.getItem('messageDatas', messageDatas);
    if (persist?.length > 0) {
      setMessageDatas(JSON.parse(persist));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (messageDatas?.length > 0) {
      localStorage.setItem('messageDatas', JSON.stringify(messageDatas));
    }
  }, [messageDatas]);

  const handleRequestQuestion = async (e) => {
    e.preventDefault();
    const content = inputValue;
    setMessageDatas((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        role: 'user',
        message: content,
        time: Math.floor(new Date().getTime() / 1000.0),
      },
    ]);
    setIsLoading(true);
    setInputValue('');
    try {
      const response = await openai.chat.completions.create({
        messages: [
          {
            role: 'user',
            content: content + ' berikan jawaban singkat hanya 50 kata',
          },
        ],
        model: 'gpt-3.5-turbo',
        max_tokens: 100,
      });
      setIsLoading(false);
      setMessageDatas((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          role: 'bot',
          message: response.choices[0].message.content,
          time: Math.floor(new Date().getTime() / 1000.0),
        },
      ]);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handelDeleteAll = () => {
    if (confirm('Are you sure to delete all history ?')) {
      setMessageDatas([]);
      localStorage.removeItem('messageDatas');
    }
  };

  return (
    <div className="w-screen h-screen grid place-items-center bg-gray-900 p-6">
      <img
        src={BG_AI}
        alt=""
        className="w-full h-full object-cover object-center fixed filter brightness-90 blur-sm"
      />
      <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/40 sm:w-[600px] sm:h-[800px] h-full w-full flex flex-col justify-between">
        <div className="backdrop-blur-sm bg-white/50 p-5 flex justify-between items-center">
          <div>
            <h1 className="font-bold text-[18px]">What do you want to ask ?</h1>
            <p className="text-gray-600 text-[14px]">{formattedDate}</p>
          </div>
          <div
            className="bg-white w-10 h-10 grid place-items-center rounded-full cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={handelDeleteAll}>
            <TbTrash />
          </div>
        </div>
        <ScrollArea
          className="flex-1 px-5 [&>div>div>div:first-child]:pt-5"
          viewportRef={viewport}>
          <div className="flex flex-col gap-5">
            {messageDatas.map((data, index) =>
              data.role === 'user' ? (
                <div
                  className="flex flex-row-reverse gap-3 items-end"
                  key={index}>
                  <img
                    src="https://api.dicebear.com/7.x/notionists-neutral/svg?seed=Felix"
                    alt={data.role}
                    width={35}
                    height={35}
                    className="rounded-lg rounded-bl-none h-max bg-white"
                  />
                  <div className="p-5 rounded-3xl rounded-br-none bg-white text-gray-700 w-max max-w-[250px] sm:max-w-sm overflow-hidden flex flex-col gap-4">
                    <p className="text-[14px] break-words whitespace-pre-line">
                      {data.message}
                    </p>
                    <TimeDisplay
                      time={data.time}
                      className="text-[12px] text-gray-400 text-right"
                      isTimeOnly={true}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex gap-3 items-end" key={index}>
                  <img
                    src={IMG_GPT}
                    alt={data.role}
                    width={35}
                    height={35}
                    className="rounded-lg rounded-br-none h-max"
                  />
                  <div className="p-5 rounded-3xl rounded-bl-none bg-white text-gray-700 w-max max-w-[250px] sm:max-w-sm overflow-hidden flex flex-col gap-4">
                    <p className="text-[14px] break-words">{data.message}</p>
                    <TimeDisplay
                      time={data.time}
                      className="text-[12px] text-gray-400 text-left"
                      isTimeOnly={true}
                    />
                  </div>
                </div>
              )
            )}
            {isLoading && (
              <div className="flex gap-3 items-end">
                <img
                  src={IMG_GPT}
                  alt="loading"
                  width={35}
                  height={35}
                  className="rounded-lg rounded-br-none h-max"
                />
                <div className="p-5 rounded-3xl rounded-bl-none bg-white text-gray-700 w-max max-w-[250px] sm:max-w-sm overflow-hidden flex flex-col gap-4">
                  <Loader color="dark" size="xs" variant="dots" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <form
          className="m-5 bg-white rounded-xl flex justify-between p-2 items-center"
          onSubmit={handleRequestQuestion}>
          <InputChat
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            className={cn(
              'bg-[#2DF2C5] w-8 h-8 grid place-items-center rounded-full transition-all duration-300',
              {
                'opacity-50': isLoading,
                'cursor-pointer hover:scale-105': !isLoading,
              }
            )}
            disabled={isLoading}>
            {isLoading ? (
              <Loader color="dark" size="xs" />
            ) : (
              <AiOutlineArrowUp />
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
