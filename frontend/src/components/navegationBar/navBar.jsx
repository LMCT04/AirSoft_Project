import { Box } from "@mui/material";
import logo from "../../assets/logo_img/logo.svg";
import style from "./navBar.module.css";
import { NavLink } from "react-router-dom";

const NavegationBar = () => {
    return (
        <Box
            sx={{
                height: "6vh", width: "100vw", backgroundColor: "#a59f83",
                position: "fixed", display: "flex",
            }}
        >
            <Box
                sx={{
                    width: "45%", display: "flex", alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        width: "12%", height: "80%", marginLeft: "40%",
                    }}
                >
                    <NavLink to="/">
                        <img src={logo} alt="logo" className={style.img} />
                    </NavLink>
                </Box>
            </Box>
            <Box
                sx={{
                    width: "45%",
                }}
            >
                <Box
                    sx={{
                        display: "flex", justifyContent: "center",
                    }}
                >
                    <NavLink className={style.link}>
                        GAMES
                    </NavLink>
                    <NavLink className={style.link} to="/events">
                        EVENT
                    </NavLink>
                    <NavLink className={style.link} to="/inscription">
                        INSCRIPTION
                    </NavLink>
                    <NavLink className={style.link} to="/info">
                        FILES
                    </NavLink>
                </Box>
            </Box>
        </Box>
    );
};

export default NavegationBar;
