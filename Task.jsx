class TaskComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {id: props.id, user: props.user /* TODO */}
	}

	render() {
		var buttonText
		var onClickFunction = function () {}
		if (this.state.poster == this.state.user) {
			if (this.state.grabbed) buttonText = "Grabbed"
			else {
				buttonText = "Delete"
				onClickFunction = (function () { this.delete() }).bind(this)
			}
		} else {
			if (this.state.grabbed) {
				if (this.state.grabbedBy == this.state.user) buttonText = "Complete"
				else buttonText = "Grabbed"
			} else {
				buttonText = "Grab"
				onClickFunction = (function () { this.grab() }).bind(this)
			}
		}
		var grabbed = <div className="grabber">grabbed by <a href="/profile?{this.state.grabbedBy}" className="user-link">{this.state.grabbedBy}</a></div>
		var disableButton = this.state.grabbed && (this.state.poster == this.state.user || this.state.grabbedBy != this.state.user)
		var button = <a className={"button main" + (disableButton ? "disabled" : "")} onClick={onClickFunction}>{buttonText}</a>
		return (
			<div>
				<div className="task-name">{this.state.name}</div>
				<div className="task-poster">by <a href="/profile?{this.state.poster}" className="user-link">{this.state.poster}</a></div>
				{this.state.grabbed && grabbed}
				<div className="task-description">{this.state.description}</div>
				<div className="buttons">
					{button}
					<a className="button" href="/tasks">Back</a>
				</div>
			</div>
		)
	}

	grab () {
		firebase.database().ref("tasks/" + this.state.id).update({
			grabbed: true,
			grabbedBy: this.state.user,
			complete: false
		})
		firebase.database().ref("users/" + this.state.user + "/grabbedTasks/" + this.state.id).set(true)
	}

	delete () {
		firebase.database().ref("tasks").child(this.state.id).remove();
		firebase.database().ref("users/" + user + "/postedTasks").child(this.state.id).remove();
		window.locaton.href = "/tasks";
	}

	componentDidMount() {
		firebase.database().ref("tasks/" + this.state.id).on("value", function (data) {
			this.setState(data.val());
		}.bind(this));
	}
}
