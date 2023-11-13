import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { IAnswer, IQuestionResponse } from "@/redux/models/IQuestion.ts";
import { actions, dispatch, selectors } from "@/redux";

import Question from "@/pages/quiz/Question.tsx";

const {
    quiz: {setAnswerAction}
} = actions;

const {
    quiz: {selectIsQuizEnd, selectQuizQuestionList, selectQuizCurrentQuestionIndex}
} = selectors;

const QuizScreen = () => {
    const navigate: NavigateFunction = useNavigate();

    const questionList: IQuestionResponse[] = useSelector(selectQuizQuestionList);
    const isQuizEnd: boolean = useSelector(selectIsQuizEnd);
    const currentQuestionIndex: number = useSelector(selectQuizCurrentQuestionIndex);


    useEffect(() => {
        if (isQuizEnd) {
            navigate('/result');
        }
    }, [isQuizEnd]);

    const handleAnswer = (index: IAnswer) => {
        dispatch(setAnswerAction(index));
    }

    return (
        <div className="bg-slate-950 rounded-xl shadow text-slate-200 backdrop-opacity-10">
            {
                !isQuizEnd && questionList[currentQuestionIndex] && <Question
                    question={questionList[currentQuestionIndex]}
                    currentQuestion={currentQuestionIndex + 1}
                    totalQuestion={questionList.length}
                    setAnswer={handleAnswer}
                />
            }
        </div>
    );
};

export default QuizScreen;
