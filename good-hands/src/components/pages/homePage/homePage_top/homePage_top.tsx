import TopSlider from "./top_slider";

const HomePage_top = () => {
    return (
        <div className="home-top">
            <h1 className="home-top_title">Топ объявлений</h1>
            <div className="home-top_slider">
                <TopSlider />
            </div>
        </div>
    );
};

export default HomePage_top;
