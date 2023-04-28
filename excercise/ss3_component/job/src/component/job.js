import {Component} from "react";

export class Job extends Component {
    constructor() {
        super();
        this.state = {
            jobName: '',
            jobList: [
                "Mua quà cho nyc", "Tặng quà cho nyc", "Ngủ với nyc"
            ]
        }
    }

    handleInputJob(value) {
        this.setState({
            jobName: value
        })
    }

    handleAddJob() {
        this.setState({
            jobList: [...this.state.jobList, this.state.jobName],
            jobName: ''
        })
    }

    render() {
        return (
            <>
                <input type="text" value={this.state.jobName}
                       onChange={(event) => this.handleInputJob(event.target.value)}/>
                <button onClick={() => this.handleAddJob()}>Add
                </button>
                <ul>
                    {
                        this.state.jobList.map((job, index) => (
                            <li key={index}>
                                {job}
                            </li>
                        ))
                    }
                </ul>
            </>
        )
    }
}