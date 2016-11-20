class TaskListTaskComponent extends React.Component {
	constructor (props) {
		super(props)
		this.state = {id: props.id, user: props.user}
	}

	render () {
		return (
			<li className="task">
			<div className="task-name"><a href="/task?{this.state.id}">{this.state.name}</a></div>
			<div className="task-poster">by <span className="user-link no-arrow">{this.state.poster}</span></div>
			</li>
		)
	}

	componentDidMount () {
		firebase.database().ref("tasks/" + this.state.id).on("value", function (data) {
			this.setState(data.val())
		}.bind(this))
	}
}
