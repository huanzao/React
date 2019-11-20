import {connect} from 'react-redux'
import {up,down,myAsync} from '../redux/actions'
import Counter from '../component/counter'
export default connect(
    state=>({count:state}),
    {up,down,myAsync}
)(Counter)