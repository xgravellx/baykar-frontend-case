import { useEffect } from "react";
import { useSelector } from "react-redux";
import {actions, dispatch, selectors} from "@/redux";

import JoinScreen from "@/pages/quiz/JoinScreen.tsx";
import QuizScreen from "@/pages/quiz/QuizScreen.tsx";

const {
    quiz: {resetQuizAction}
} = actions;

const {
    quiz: {selectQuizIsStarted}
} = selectors;

const Quiz = () => {
    const isQuizStarted = useSelector(selectQuizIsStarted);

    useEffect(() => {
        dispatch(resetQuizAction());
    }, []);

    return (
        <div
            className="relative mx-auto mt-12 mb-5 w-11/12 max-w-3xl min-h-[350px] border border-slate-700 shadow rounded-xl backdrop-opacity-10">
            {
                isQuizStarted ? <QuizScreen/> : <JoinScreen/>
            }
        </div>
    );
};

export default Quiz;
