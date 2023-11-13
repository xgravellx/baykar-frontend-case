import { actions, dispatch } from "@/redux";
import Button from "@/components/button";

const {
    quiz: {getQuizStartAction}
} = actions;

const JoinScreen = () => {
    const handleStartQuiz = () => {
        dispatch(getQuizStartAction());
    }

    return (
        <div className="bg-slate-950 w-full h-[450px] flex flex-col justify-evenly items-center gap-5 text-center p-5 rounded-xl shadow drop-shadow-lg">
            <h2 className="text-2xl text-white">
                Join Quiz
            </h2>
            <p className="max-w-xs text-indigo-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, saepe.
            </p>
            <Button onClick={handleStartQuiz} text="Start" color="bg-indigo-600" width="w-4/5" />
        </div>
    );
};

export default JoinScreen;
