import QuestionSlider from "./question_slider";

const HomePage_question = () => {
    return (
        <div className="home-question">
            <h1
                className="home-question_title"
                style={{ color: "#FF914C", fontSize: "48px" }}
            >
                Часто задаваемые вопросы
            </h1>
            <div className="home-question_slider">
                <QuestionSlider />
            </div>
        </div>
    );
};
export default HomePage_question;
