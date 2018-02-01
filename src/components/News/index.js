// @flow

import { connect } from "react-redux";
import News from "./News";
import { onNavigateBack } from "../../actions/navigation";

const mapDispatchToProps = {
  onNavigateBack
};
const mapStateToProps = state => ({ language: state.settings.language });

export default connect(mapStateToProps, mapDispatchToProps)(News);
