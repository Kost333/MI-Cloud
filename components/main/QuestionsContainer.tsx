import React, {useEffect, useState} from "react";
import styles from "@/styles/main/QuestionsContainer.module.css";
import Image from "next/image";
import {questionsStandard} from "@/utility/utils";
import {QuestionType} from "@/types/types";

const QuestionsContainer = () => {
    const [questions, setQuestions] = useState<QuestionType[]>([]);

    useEffect(() => {
        setQuestions(questionsStandard)
    }, [])


    const toggleItem = (id: number | string) => {
        const newQuestions = questions.map((question: QuestionType) => {
            if (question.id === id) {
                question.opened = !question.opened
            }

            return question;
        })

        setQuestions(newQuestions);
    }

    return (
        <div className={styles["container"]}>
            <h5>Your Questions Answered</h5>
            <h2>Frequently asked</h2>
            <h3>questions</h3>
            <div className={styles["info-container"]}>
                {
                    questions.map((question: QuestionType) => {
                        const image = question.opened ? '/assets/minus.svg' : '/assets/plus.svg';
                        return (
                            <div className={styles['question-container']} key={question.id}
                                 onClick={() => toggleItem(question.id)}>
                                <div className={styles['question-title']}>
                                    <p>{question.title}</p>
                                    <Image src={image} alt="action" width={17} height={16}/>
                                </div>
                                {question.opened &&
                                    <div className={styles['question-answer']}><p>{question.answer}</p></div>
                                }
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );

};

export default QuestionsContainer;