import { Component } from "react";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: "",
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) =>
                this.setState(
                    () => {
                        return { monsters: users };
                    },
                    () => console.log(this.state.monsters)
                )
            );
    }

    render() {
        console.log("render");
        const filterMonsters = this.state.monsters.filter((monster) =>
            monster.name.toLocaleLowerCase().includes(this.state.searchField)
        );
        return (
            <div className="App">
                <input
                    className="search-box"
                    type="search"
                    placeholder="search monsters"
                    onChange={(event) => {
                        const searchField =
                            event.target.value.toLocaleLowerCase();

                        this.setState(() => {
                            return { searchField }; // 这里只需要修改状态, 下面后自动渲染
                        });
                    }}
                />
                {filterMonsters.map((monster) => {
                    return (
                        <div key={monster.id}>
                            <h2>{monster.name}</h2>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default App;
