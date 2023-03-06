import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  _circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    background: 'linear-gradient(90deg, rgba(67,118,170,1) 0%, rgba(75,133,180,1) 35%, rgba(87,155,194,1) 100%)',
    border: "1px solid #fff",
    position: "absolute",
    top: 120,
    left: 360,
  },

  _textCircle: {
    // color: "#ffffff",
    // fontSize: 50,
    // fontWeight: "bold",
    position: "absolute",
    top: 15,
    left: 38,
  },

  _cardStack: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "&:hover": {
      boxShadow: "0px 0px 15px #706F6F",
      cursor: "pointer",
    },
  },

  _cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    width: 300,
    backgroundColor: "#F5F5F5",
    border: "1px solid #1e1e1e",
  },

  _cardFooter: {
    width: 300,
    height: 35,
    background: 'linear-gradient(90deg, rgba(67,118,170,1) 0%, rgba(75,133,180,1) 35%, rgba(87,155,194,1) 100%)',
    border: "1px solid #1e1e1e",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
}));
