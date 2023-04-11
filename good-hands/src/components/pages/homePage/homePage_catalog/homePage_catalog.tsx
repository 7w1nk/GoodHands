import CatalogSlider from "./catalog_slider";

const HomePage_catalog = () => {
    return (
        <div className="homePage_catalog">
            <h1 className="homePage_catalog-title">Каталог животных</h1>
            <div className="homePage_catalog-slider">
                <CatalogSlider />
            </div>
        </div>
    );
};
export default HomePage_catalog;
