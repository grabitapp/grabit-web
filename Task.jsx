class Task extends React.Component {
	constructor(props) {
		super(props)
		this.state = {id: props.id, user: props.user /* TODO */}
	}

	render() {
		var buttonText
		var onClickFunction = function () {}
		var disableButton = false

		if (this.state.grabbed) {
			if (this.state.grabbedBy == this.state.user) {
				buttonText = "Complete"
				onClickFunction = (function () { this.complete() }).bind(this)
			} else {
				disableButton = true
				if (this.state.complete) buttonText = "Completed"
				else buttonText = "Grabbed"
			}
		} else {
			if (this.state.poster == this.state.user) {
				buttonText = "Delete"
				onClickFunction = (function () { this.delete() }).bind(this)
			} else {
				buttonText = "Grab"
				onClickFunction = (function () { this.grab() }).bind(this)
			}
		}

		var grabbed = <div className="grabber">grabbed by <a href={"profile.html?" + this.state.grabbedBy} className="user-link">{this.state.grabbedBy}</a></div>
		var button = <a className={"button main" + (disableButton ? "disabled" : "")} onClick={onClickFunction}>{buttonText}</a>
		return (
			<div>
				<div className="task-name">{this.state.name}</div>
				<div className="task-poster">by <a href={"profile.html?" + this.state.poster} className="user-link">{this.state.poster.replace(/%2E/, ".")}</a></div>
				{this.state.grabbed && grabbed}
				<div className="task-description">{this.state.description}</div>
				<div className="buttons">
					{button}
					<a className="button" href="tasks.html">Back</a>
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
		firebase.database().ref("users/" + this.state.user + "/postedTasks").child(this.state.id).remove();
		window.locaton.href = "tasks.html";
	}

	complete () {
		firebase.database().ref("tasks/" + this.state.id).update({
			complete: true
		});
		firebase.database().ref("users/" + this.state.user + "/grabbedTasks").child(this.state.id).remove();
		window.location.href = "tasks.html";
	}

	componentDidMount() {
		firebase.database().ref("tasks/" + this.state.id).on("value", function (data) {
			this.setState(data.val());
		}.bind(this));
	}
}
