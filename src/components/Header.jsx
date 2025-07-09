import style from "./Header.module.css"
const Header = ({weather})=> {
    return(
        <div>
        <h3>{weather.name}</h3>
        <div className={style.temp}>{weather.main.temp}</div>
        </div>
    );
};
export default Header;