import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import './collection-preview.scss';


const CollectionPreview = ({title, items})=>(

    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((item, idx) => idx < 4)
                .map(({id, name, price, imageUrl})=>(
                    <CollectionItem key={id} id={id} name={name} price={price} imageUrl={imageUrl}/>
                ))
            }
        </div>    
    </div>


)

export default CollectionPreview;