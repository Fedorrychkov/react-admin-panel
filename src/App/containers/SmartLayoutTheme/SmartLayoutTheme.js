import { connect } from 'react-redux';
import LayoutTheme from '../../components/LayoutTheme/LayoutTheme';

const mapStateToProps = (state) => {
    return {
        layout: state.layoutTheme.currentLayout,
        token: ''
    }
}

const SmartLayoutTheme = connect(mapStateToProps)(LayoutTheme);

export default SmartLayoutTheme;
