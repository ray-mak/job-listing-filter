import React from "react";

function Card(props) {
    const languages = props.info.languages;
    const tools = props.info.tools;
    const langCode = languages.map(item => (
        <div className="language" key={item}>{item}</div>
    ))
    const toolCode = tools.map(item => (
        <div className="language" key={item}>{item}</div>
    ))
    const newText = props.info.new;
    const featured = props.info.featured;

    return (
        <div className="card" key={props.info.id}>
            <img className="logo" src={props.info.logo} alt={`${[props.info.company]} logo`}/>
            <div className="info--container">
              <div className="headline--container">
                <p className="company">{props.info.company}</p>
                {newText && <div className="new--label">NEW!</div>}
                {featured && <div className="featured--label">FEATURED</div>}
              </div>
              <p className="position--title">{props.info.position}</p>
              <p className="details">{props.info.postedAt} &nbsp;•&nbsp; {props.info.contract} &nbsp;•&nbsp;{props.info.location}</p>
            </div>
            <div className="divider"></div>
            <div className="languages--container">
              <div className="language">{props.info.role}</div>
              <div className="language">{props.info.level}</div>
              {langCode}  
              {toolCode}
            </div>
          </div>
    )
}

export default Card;