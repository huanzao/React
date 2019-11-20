import {connect} from 'react-redux'
import {up,down} from '../redux/actions'
import Counter from '../component/counter'
export default connect(
    state=>({count:state}),
    {up:up,down:down}
)(Counter)