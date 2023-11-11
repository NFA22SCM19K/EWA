import './style.css';
export default function Content() {
    return(
        <>
    <div id="content">
	
	<div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
		<ol className="carousel-indicators">
			<li data-target="#carouselExampleInterval" data-slide-to="0" className="active"></li>
			<li data-target="#carouselExampleInterval" data-slide-to="1"></li>
			<li data-target="#carouselExampleInterval" data-slide-to="2"></li>
		</ol>

		<div className="carousel-inner">
			<div className="item active" >
				<img src="images/doorbells/Arlo_wireless_video_doorbell.png" style={{width: "auto",
				height: "245px",
				maxHeight: "245px",
				margin: "auto", 
				display: "block"}} alt="..."/>
			</div>
			<div className="item" >
				<img src="images/speakers/echodot_2.jpg" style={{width: "auto",
				height: "245px",
				maxHeight: "245px",
				margin: "auto", 
				display: "block"}} alt="..."/>
			</div>
			<div className="item"  >
				<img src="images/thermostats/echobee3_Lite_Smart.jpg" style={{width: "auto",
				height: "245px",
				maxHeight: "245px",
				margin: "auto", 
				display: "block"}} alt="..."/>
			</div>
		</div>

		<a className="left carousel-control" href="#carouselExampleInterval" role="button" data-slide="prev">
			<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
			<span className="sr-only">Previous</span>
		</a>
		<a className="right carousel-control" href="#carouselExampleInterval" role="button" data-slide="next">
			<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
			<span className="sr-only">Next</span>
		</a>
	</div>

</div>

        </>
    );
}