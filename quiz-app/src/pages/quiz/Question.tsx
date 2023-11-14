import { useEffect, useRef, useState } from 'react';
import { flushSync } from "react-dom";
import { IAnswer, IQuestionResponse, OptionNames } from "@/redux/models/IQuestion.ts";

import Button from "@/components/button";

interface IQuestionPage {
    question: IQuestionResponse,
    setAnswer: (index: IAnswer) => void,
    currentQuestion: number,
    totalQuestion: number
}

const Question = ({ question, setAnswer, currentQuestion, totalQuestion }: IQuestionPage) => {
    const timer = useRef<NodeJS.Timeout | null>(null);
    const blockClickTimer = useRef<NodeJS.Timeout | null>(null);
    const progressBar = useRef<HTMLDivElement | null>(null);

    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [activeClick, setActiveClick] = useState<boolean>(false);

    useEffect(() => {
        if (progressBar.current) {
            progressBar.current.classList.remove("active");
            setTimeout(() => {
                if (progressBar.current) {
                    progressBar.current.classList.add("active");
                }
            }, 0);
        }
        blockClickTimer.current = setTimeout(() => {
            setActiveClick(true);
        }, 10 * 1000)
        timer.current = setTimeout(goNextQuestion, 30 * 1000);

        return () => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            if (blockClickTimer.current) {
                clearTimeout(blockClickTimer.current);
            }
            setSelectedOption(null);
            setActiveClick(false);
        }
    }, [question]);

    const goNextQuestion = () => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        if (blockClickTimer.current) {
            clearTimeout(blockClickTimer.current);
        }
        flushSync(() => {
            setAnswer(selectedOption)
            setSelectedOption(null);
            setActiveClick(false);
        });
    }

    const handleSelectOption = (index: number) => {
        if (activeClick) {
            setSelectedOption(index)
        }
    }

    return (
        <>
            <div className="progress-bar h-1 w-0 bg-gray-700" ref={progressBar}></div>
            <div className="my-5 text-center text-sm text-indigo-400 flex justify-center gap-1">
                <b>{currentQuestion}</b>
                of
                <span>{totalQuestion}</span>
            </div>
            <div className="px-10 py-5">
                <div className="title">
                    <span className="text-sm text-gray-500 font-semibold">{currentQuestion}. Question:</span>
                    <p className="mt-1.5 text-white">{question.title}</p>
                </div>
                <div className="my-10 mx-0 flex justify-between flex-wrap gap-5">
                    {
                        question.options.map((option, index) => (
                            <div
                                key={index}
                                className={`w-full h-16 border p-2.5 rounded-md cursor-pointer flex justify-start items-center
                                ${index === selectedOption ? ' bg-indigo-900 text-white' : ''}
                                ${!activeClick ? 'bg-gray-700 text-slate-500 border-gray-700 cursor-wait' : 'border-indigo-950'}`}
                                onClick={() => handleSelectOption(index)}
                            >
                                {OptionNames[index]} - {option}
                            </div>
                        ))
                    }
                </div>
                <div className="p-2.5 flex justify-end items-center">
                    <Button onClick={goNextQuestion} text="Next" color="bg-indigo-400"/>
                </div>
            </div>
        </>
    );
};

export default Question;
