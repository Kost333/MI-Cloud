import React, {useEffect, useState} from "react";
import styles from "@/styles/main/QuestionsContainer.module.css";
import Image from "next/image";

type QuestionType = {
    id: number | string;
    title: string,
    answer: string,
    opened: boolean
}

const QuestionsContainer = () => {
    const [questions, setQuestions] = useState([] as QuestionType[]);

    useEffect(() => {
        setQuestions([
            {
                id: 1,
                title: 'What do you need to get started?',
                answer: 'You can access your hosting services using your username and password that you receive after signing up. You can also use our web-based control panel to manage your hosting services.',
                opened: false
            },
            {
                id: 2,
                title: 'What do you need to get started?',
                answer: 'You can access your hosting services using your username and password that you receive after signing up. You can also use our web-based control panel to manage your hosting services.',
                opened: false

            },
            {
                id: 3,
                title: 'What do you need to get started?',
                answer: 'You can access your hosting services using your username and password that you receive after signing up. You can also use our web-based control panel to manage your hosting services.',
                opened: false
            },
            {
                id: 4,
                title: 'What do you need to get started?',
                answer: 'You can access your hosting services using your username and password that you receive after signing up. You can also use our web-based control panel to manage your hosting services.',
                opened: false
            },
        ])
    }, [])


    const toggleItem = (id: number | string) => {
        const newArray = questions.map(question => {
            if (question.id === id) {
                question.opened = !question.opened
            }

            return question
        })

        setQuestions(newArray)
    }

    return (
        <div className={styles["container"]}>
            <h5>Your Questions Answered</h5>
            <h2>Frequently asked</h2>
            <h3>questions</h3>
            <div className={styles["info-container"]}>
                {
                    questions.map(question => {
                        const image = question.opened ? '/assets/minus.svg' : '/assets/plus.svg';
                        return (
                            <div className={styles['questionContainer']} key={question.id}
                                 onClick={() => toggleItem(question.id)}>
                                <div className={styles['questionTitle']}>
                                    <p>{question.title}</p>
                                    <Image src={image} alt="action" width={17} height={16}/>
                                </div>
                                {question.opened &&
                                    <div className={styles['questionAnswer']}><p>{question.answer}</p></div>
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