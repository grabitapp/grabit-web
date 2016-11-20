class UserTaskListTaskComponent extends React.Component {
	constructor (props) {
		super(props)
		this.state = {id: props.id, user: props.user}
	}

	render () {
		var element
		if (this.state.poster == this.state.user) {
			if (this.state.grabbed) {
				element = <div className="task-poster">Grabbed by <a className="user-link no-arrow" href="/profile?{this.state.grabbedBy}"><span className="user-link no-arrow">{this.state.grabbedBy}</span></a></div>
			} else {
				element = <div className="task-poster">Posted by you</div>
			}
		} else {
			element = <div className="task-poster">Posted by <a className="user-link no-arrow" href="/profile?{this.state.poster}"><span className="user-link no-arrow">{this.state.poster}</span></a></div>
		}
		return (
			<li className="task">
			<div className="task-name"><a href="/task?{this.state.id}">{this.state.name}</a></div>
			{element}
			</li>
		)
	}

	componentDidMount () {
		firebase.database().ref("tasks/" + this.state.id).on("value", function (data) {
			this.setState(data.val())
		}.bind(this))
	}
}