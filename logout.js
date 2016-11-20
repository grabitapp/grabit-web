function logout () {
	firebase.auth().signOut().then(function (e) {
		window.location.href = "index.html"
	})
}
