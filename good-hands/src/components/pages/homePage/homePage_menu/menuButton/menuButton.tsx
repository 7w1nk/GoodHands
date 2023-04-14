interface IImportImageProps {
    src: any;
    name: string;
}
const MenuButton = (props: IImportImageProps) => {
    return (
        <a
            href="homePage/homePage_menu/menuButton#"
            className="home-menu_button"
        >
            <img src={props.src} alt={"Open " + props.name} />
        </a>
    );
};

export default MenuButton;
