import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { actions, dispatch, selectors } from "@/redux";
import { IPending } from "@/redux/store/IStore.ts";

import Navbar from "@/layout/Navbar.tsx";
import Loading from "@/components/loading";

const {
    question: { getQuestionListAction }
} = actions;

const {
    question: { selectGetQuestionPending }
} = selectors;

const Layout = () => {
    const loading: IPending = useSelector(selectGetQuestionPending);

    useEffect(() => {
        dispatch(getQuestionListAction());
    }, []);

    return (
        <>
            {
                loading ? <Loading/> : <>
                    <Navbar/>
                    <Outlet/>
                </>
            }
        </>
    );
};

export default Layout;
