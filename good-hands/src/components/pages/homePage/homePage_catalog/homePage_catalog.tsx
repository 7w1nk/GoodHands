import CatalogSlider from "./catalog_slider";

const HomePage_catalog = () => {
    return (
        <div className="home-catalog">
            <h1 className="home-catalog_title">Каталог животных</h1>
            <div className="home-catalog_slider">
                <CatalogSlider />
            </div>
        </div>
    );
};
export default HomePage_catalog;
