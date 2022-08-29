function ImproveSkills() {
    const list = [
        "Learn new recepies",
        "Experiment with food",
        "Write your own recepies",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked"
    ]

    return (
        <div className="section improve-skills">
            <div className="col img">
                <img src="/img/gallery/img_10.jpg" alt="" />
            </div>
            <div className="col typograhy">
                <h3 className="title">Improve Your Culinary Skills</h3>
                {list.map((item, index) => {
                    return <p className="skill-item" key={index}>{item}</p>
                })}
                <button className="btn">singup now</button>
            </div>
        </div>
    )
}

export default ImproveSkills;