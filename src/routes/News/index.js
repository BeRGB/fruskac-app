// @flow

import { connect } from "react-redux";
import News from "./News";

const mapDispatchToProps = {};
const mapStateToProps = state => ({
  items: state.news.data,
  language: state.settings.language
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
