#react 钩子函数
    1.constructor   ***
        接受兩個參數props context 
    2.componentWillMount 組件將要挂載
    3.componentDidMount組件渲染完成 ***
        組件第一次渲染完成，此時的dom結點已經生成可以在這裏調用Ajax返回setState后會第二次渲染
    4.componentWillReceiveProps
    5、shouldComponentUpdate（nextProps，nextState）
    6、componentWillUpdate（nextProps，nextState）
    5.render
    8、componentDidUpdate（prevProps，prevState）
    9、componentWillUnmount（）


redux
    actions-types.js
        定義類型
    actions.js
        根據類型寫函數 在app.jsx中被引用 作为参数传给子组件
    reducer.js
        初始化数据 根据state返回新值
    store.js    
        import {createStore,applyMiddleware} from 'redux'
        import {comments} from './reducers'
        import thunk from 'redux-thunk'
        export default createStore(
            comments,
            applyMiddleware
        )
        //监听state变化以重新渲染
    
    ***
    app.jsx
        import {connect} from 'react-redux'
        class ××× extends Component{}
        export default connect(
            state=>({comments:state}),//state就是一个comments数组
            {addComment,delComment}
        )(×××)
    
    index.js
        import {Provider} from 'react-redux'
        import store from './redux/store'
        ReactDOM.render((
            <Provider store={store}>
                <App />
            </Provider>
        ),document.getElementById('root'))

