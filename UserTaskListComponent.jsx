class UserTaskListComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {tasks: [], user: props.user /* TODO */}
	}

	render () {
		return (
			<ul id="task-list">
				{this.state.tasks.length > 0 ?
					this.state.tasks.map(function (task) {
						return <UserTaskListTaskComponent id={task} user={this.state.user} />
					}.bind(this)) : "No new items available at this time."}
			</ul>
		)
	}

	componentDidMount () {
		firebase.database().ref("tasks").on("value", function (data) {
			var items = []
			var tasks = data.val()
			for (var id in tasks)
				if (parseInt(id) && !tasks[id].complete && (tasks[id].poster == this.state.user || tasks[id].grabbedBy == this.state.user))
					items.push(parseInt(id))
			this.setState({tasks: items})
		}.bind(this))
	}
}
