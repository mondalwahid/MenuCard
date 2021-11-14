import React from 'react'

const MenuCard = ({MenuData}) => {
    return (
        <>
        <div className="main-card--container">
        {
            MenuData.map((CurrentElement) => {
                const {id,name,category,description,image} = CurrentElement;
                return (
                    <>
                    <div className="card-container" key={id}>
                <div className="card">
                    <div className="card-body">
                        <span className="card-number card-circle subtle" style={{color: "grey"}}>
                            {id}</span>
                        <br />
                        <hr />
                        <div className="card-author subtle">{category}</div>
                        <h2 className="card-desciption subtle">{name}</h2>
                        <div className="card-description"> {description}</div>
                    </div>
                    <div className="img-container" class="col-xs-1" align="center">
                    <img src={image} class="img-fluid" alt="Responsive image" alt="images" className="card-media" />
                    </div>
                    <hr />
                    <a className="card-tag subtle">Order Now</a>
                    <br />
                </div>
            </div>
            </>
                )
            })
        }
            </div>
        </>
    )
}

export default MenuCard
