import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { OptionNames } from "@/redux/models/IQuestion.ts";
import { actions, dispatch, selectors } from "@/redux";

import Table, { IDataItem } from "@/components/table";
import Button from "@/components/button";

const {
    quiz: {getQuizRetryAction, resetQuizAction}
} = actions;

const {
    quiz: {selectQuizResult}
} = selectors;

const Result = () => {
    const navigate: NavigateFunction = useNavigate();
    const result = useSelector(selectQuizResult);

    const handleQuizRetry = () => {
        dispatch(getQuizRetryAction());
        navigate('/')
    }


    useEffect(() => {
        if (result.total === 0) {
            navigate('/');
        }
        return () => {
            dispatch(resetQuizAction());
        }
    }, []);

    const columns = [
        {
            title: 'Answer',
            key: 'title',
            textPosition: 'text-start',
            textColor: 'text-indigo-100'
        },
        {
            title: 'Options',
            key: 'options',
            textPosition: 'text-start',
            textColor: 'text-indigo-100',
            render: ({options}: IDataItem) => (options.map((option: string, index: number) => (
                <div key={index}>{OptionNames[index]} - {option}</div>
            )))
        },
        {
            title: 'Marked Answer',
            key: 'answer',
            textPosition: 'text-center',
            textColor: 'text-gray-950',
            render: ({answer, isCorrect, options}: IDataItem) => (
                <span className={`rounded py-1 px-3 text-xs font-bold 
                    ${answer === null ? 'bg-yellow-400' : (isCorrect ? 'bg-green-400' : 'bg-red-400')}`}>
                    {answer !== null ? `${OptionNames[answer]} - ${options[answer]}` : 'Not Answered'}
                </span>
            )
        },
    ]
    return (
        <div className="mx-auto mt-12 mb-5 px-10">
            <div className="w-full min-h-[200px] flex flex-col justify-evenly items-center gap-4 font-semibold text-lg text-white">
                <h2 className="text-2xl">
                    <span className="pr-2">Accuracy Rate:</span>
                    <span className="text-indigo-400">{result.percentage}%</span>
                </h2>
                <p className="text-gray-500">Selected {result.correct} correct options out of {result.total} questions.</p>
                <Button onClick={handleQuizRetry} text="Retry" width="w-[150px]"/>
            </div>
            <div className="text-center m-3 font-semibold text-2xl">
                Details
            </div>
            <Table
                dataSource={result.answerResult}
                columns={columns}
            />
        </div>
    );
};

export default Result;
