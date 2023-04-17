import Slider from "react-slick";

const QuestionSlider = () => {
    const settings = {
        infinity: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div className="home-question_slider_items">
                <span className="home-question_slider_tag">
                    Как сделать заказ?
                </span>
                <p className="home-question_slider_text">
                    Сделать заказ из интернет-магазина очень легко: когда вы
                    нашли понравившегося питомца, договорились обо всем с
                    продавцом-заводчиком, кликните на изображение корзины. Чтобы
                    завершить оформление нажмите на кнопку «Оформить заказ» и
                    заполните данные необходимые для его доставки и оплаты...
                    <a href="">Подробнее</a>.
                </p>
            </div>
            <div className="home-question_slider_items">
                <span className="home-question_slider_tag">
                    Какова стоимость доставки?
                </span>
                <p className="home-question_slider_text">
                    Стоимость доставки будет рассчитана автоматически после
                    того, как вы введете свой адрес. Вам будет предложены
                    несколько вариантов доставки: курьерская доставка, а также
                    варианты самовывоза...
                    <a href="">Подробнее</a>.
                </p>
            </div>
            <div className="home-question_slider_items">
                <span className="home-question_slider_tag">
                    Как совершить оплату?
                </span>
                <p className="home-question_slider_text">
                    Оплата на нашем сайте производится онлайн банковской картой.
                    Для оплаты товара с помощью банковской карты на
                    соответствующей странице необходимо выбрать кнопку «Оплата
                    банковской картой». Оплата происходит через ПАО СБЕРБАНК с
                    использованием Банковских карт следующих платежных систем...
                    <a href="">Подробнее</a>.
                </p>
            </div>
            <div className="home-question_slider_items">
                <span className="home-question_slider_tag">4?</span>
            </div>
        </Slider>
    );
};
export default QuestionSlider;
