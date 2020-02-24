import React, { Component } from "react";
import axios from "axios";

export class Graphics extends Component {
	state = {
		data: {},
		loaded: false
	};

	componentDidMount() {
		this.getData();
	}

	getHasTags = str => {
		const hashArr = str.split(" ");
		const filteredHash = hashArr.filter(hash => (hash.match(/#/g) ? hash : ""));
		console.log(filteredHash);
	};

	getData = async () => {
		await axios
			.get(`https://www.instagram.com/olugfx/?__a=1`)
			.then(({ status, data }) => {
				if (status === 200) {
					this.setState({ data: data, loaded: true });
				}
			})
			.catch(err => {
				// console.log(err);
			});
	};

	render() {
		const { loaded } = this.state;
		let userData;
		if (loaded) {
			userData = this.state.data.graphql.user;
		}

		console.log(userData);

		return (
			<div
				style={{
					width: "80%",
					margin: "80px auto"
				}}
			>
				{loaded ? (
					<div>
						<div
							style={{
								height: "80px",
								backgroundColor: "#02203c",
								marginTop: "-80px"
							}}
						></div>
						<div style={{ display: "flex", alignContent: "center" }}>
							<img
								src={userData.profile_pic_url_hd}
								alt={userData.full_name}
								width="100"
								height="100"
							/>
							<ul style={{ color: "#000" }}>
								<li>Description: {userData.biography}</li>
								<li>Full Name: {userData.full_name}</li>
								<li>followers: {userData.edge_followed_by.count}</li>
								<li>{userData.edge_owner_to_timeline_media.count}</li>
							</ul>
						</div>

						<div
							style={{
								display: "flex",
								flexWrap: "wrap"
							}}
						>
							{userData.edge_owner_to_timeline_media.edges.map(media => (
								<div
									key={media.node.id}
									style={{
										width: "300px",
										marginRight: "30px",
										marginBottom: "30px",
										overflow: "hidden",
										backgroundColor: "#f8f8f8",
										boxShadow: "0 0 2px 1px rgba(0,0,0,.2)"
									}}
								>
									<img
										name={this.getHasTags(
											media.node.edge_media_to_caption.edges[0].node.text
										)}
										src={media.node.display_url}
										alt={media.node.full_name}
										width="300"
										height="300"
										style={{
											marginBottom: "20px"
										}}
									/>
									<p style={{ color: "#000", width: "100%", padding: "10px" }}>
										{media.node.edge_media_to_caption.edges[0].node.text}
									</p>
								</div>
							))}
						</div>
					</div>
				) : (
					<h2 style={{ color: "#000" }}>Loading...</h2>
				)}
			</div>
		);
	}
}

export default Graphics;
