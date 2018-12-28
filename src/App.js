import React, {Component} from 'react';
import style from './App.less'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className={style.content}>
                    <span className={style.text}>哈喽沃德</span>
                </div>
            </div>
        );
    }
}

export default App;
