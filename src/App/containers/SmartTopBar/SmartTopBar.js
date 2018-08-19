import { changeTheme } from "../../store/layout/actions";
import { connect } from "react-redux";
import TopBar from "../../components/TopBar/TopBar";

const mapStateToProps = (state) => {
    return {
        layout: state.layoutTheme.currentLayout
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTheme: (theme) => {
            dispatch(changeTheme(theme));
        }
    }
}

const SmartTopBar = connect(mapStateToProps, mapDispatchToProps)(TopBar);

export default SmartTopBar;
